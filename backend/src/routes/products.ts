import { Request, Response, Router } from "express";
import { db } from "../db/connection";
import { products, productVariants, reviews } from "../db/schema.js";
import { and, eq, gt, lt } from "drizzle-orm";

const productRoutes = Router();


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

    const productId = Number(id);
    if (isNaN(productId)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const result = await db
      .select({
        products: products,
        product_variants: productVariants,
        reviews: reviews,
      })
      .from(products)
      .leftJoin(productVariants, eq(products.id, productVariants.product_id))
      .innerJoin(reviews, eq(products.id, reviews.product_id)) 
      .where(eq(products.id, productId));

    if (!result.length) {
      return res.status(404).json({ error: "Produto ou revisões não encontrados" });
    }

    const productGrouped = result.reduce(
      (acc: any, current: any) => {
        if (current.product_variants && !acc.product_variants.some((v: any) => v?.id === current.product_variants.id)) {
          acc.product_variants.push(current.product_variants);
        }
        if (current.reviews && !acc.reviews.some((r: any) => r.id === current.reviews.id)) {
          acc.reviews.push(current.reviews);
        }
        return acc;
      },
      {
        products: result[0]?.products || {},
        product_variants: [],
        reviews: [], 
      }
    );

    return res.status(200).json(productGrouped);
  } catch (error) {
    console.error("Erro ao buscar produto por ID:", error);
    return res.status(500).json({ error: "Erro ao buscar produto" });
  }
});


export default productRoutes;