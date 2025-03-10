import { Request, Response, Router } from "express";
import { db } from "@repo/db/client";
import { products } from "@repo/db/schema";
import { insertProductSchema } from "@repo/db/schema"; 
import { eq } from "drizzle-orm";

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
    const initial = parseInt(req.query.initial as string) || 0;
    const limit = parseInt(req.query.final as string) || 10; 

    if (initial < 0 || limit <= 0) {
      return res.status(400).json({ error: "Parâmetros de paginação inválidos" });
    }

    const productsList = await db
      .select()
      .from(products)
      .offset(initial)
      .limit(limit); 

    return res.status(200).json(productsList);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar produtos" });
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