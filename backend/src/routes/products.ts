import { Request, Response, Router } from "express";
import { db } from "../db/connection";
import { products, productVariants } from "../db/schema.js";
import { insertProductSchema } from "../db/schema.js"; 
import { and, eq, gt, lt } from "drizzle-orm";

const productRoutes = Router();

productRoutes.post("/products", async (req: Request, res: Response) => {
  try {
    const { nome, price, discount, image, type, description, assessment, user_id } = req.body;

    const productData = insertProductSchema.safeParse({
      nome,
      price,
      discount,
      image,
      type,
      description,
      assessment,
      user_id,
    });

    if (!productData.success) {
      return res.status(400).json({ error: productData.error.format() });
    }

    const [newProduct] = await db
      .insert(products)
      .values(productData.data)
      .returning();

    return res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao salvar produto" });
  }
});


productRoutes.get("/products", async (req: Request, res: Response) => {
  try {
    const color = req.query.color as string | undefined;
    const size = req.query.size as string | undefined;
    const minPrice = req.query.minPrice ? parseFloat(req.query.minPrice as string) : undefined;
    const maxPrice = req.query.maxPrice ? parseFloat(req.query.maxPrice as string) : undefined;
    const quantityInitial = req.query.initial ? parseInt(req.query.initial as string) : 0;
    const quantityLimit = req.query.final ? parseInt(req.query.final as string) : 10;

    let conditions = [];

    if (color) {
      conditions.push(eq(productVariants.color, color));
    }

    if (size) {
      conditions.push(eq(productVariants.size, size));
    }

    if (minPrice !== undefined && maxPrice !== undefined) {
      conditions.push(and(gt(products.price, minPrice), lt(products.price, maxPrice)));
    } else if (minPrice !== undefined) {
      conditions.push(gt(products.price, minPrice));
    } else if (maxPrice !== undefined) {
      conditions.push(lt(products.price, maxPrice));
    }

    let query = db.select().from(products)
      .leftJoin(productVariants, eq(products.id, productVariants.product_id));

    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    query = query.limit(quantityLimit).offset(quantityInitial);

    const result = await query;

    if (!result.length) {
      return res.status(404).json({ message: "Nenhum produto encontrado" });
    }

    const productsGrouped = result.reduce((acc: any[], current: any) => {
      const existingProduct = acc.find((item) => item.products.id === current.products.id);
      if (existingProduct) {
        existingProduct.product_variants.push(current.product_variants);
      } else {
        acc.push({
          products: current.products,
          product_variants: [current.product_variants],
        });
      }
      return acc;
    }, []);

    return res.status(200).json(productsGrouped);
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return res.status(500).json({ message: "Erro ao buscar produtos" });
  }
});


productRoutes.get("/products/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = await db
      .select()
      .from(products)
      .where(eq(products.id, Number(id)))
      .limit(1);

    if (!product.length) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    return res.status(200).json(product[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar produto" });
  }
});

productRoutes.put("/products/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nome, price, discount, image, type, description, assessment, user_id } = req.body;

    const productData = insertProductSchema.partial().safeParse({
      nome,
      price,
      discount,
      image,
      type,
      description,
      assessment,
      user_id,
    });

    if (!productData.success) {
      return res.status(400).json({ error: productData.error.format() });
    }

    const [updatedProduct] = await db
      .update(products)
      .set(productData.data)
      .where(eq(products.id, Number(id)))
      .returning();

    if (!updatedProduct) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    return res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao atualizar produto" });
  }
});

productRoutes.delete("/products/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const [deletedProduct] = await db
      .delete(products)
      .where(eq(products.id, Number(id)))
      .returning();

    if (!deletedProduct) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    return res.status(200).json({ message: "Produto excluído com sucesso" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao excluir produto" });
  }
});

export default productRoutes;