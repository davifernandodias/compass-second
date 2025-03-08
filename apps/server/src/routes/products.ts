import { Request, Response, Router } from "express";
import { db } from "@repo/db/client";
import { products } from "@repo/db/schema";
import { insertProductSchema, selectProductSchema } from "@repo/db/schema";
import { eq } from "drizzle-orm"; 

const productRoutes = Router();

productRoutes.post("/products", async (req: Request, res: Response) => {
  try {
    const { nome, price, color, assessment, discount, user_id } = req.body;

    const parsed = insertProductSchema.safeParse({ nome, price, color, assessment, discount, user_id });
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.format() });
    }

    const result = await db
      .insert(products)
      .values({
        nome,
        price,
        color,
        assessment,
        discount,
        user_id,
      });

    return res.status(201).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao salvar produto" });
  }
});

productRoutes.get("/products", async (req: Request, res: Response) => {
  try {
    const productsList = await db.select().from(products);
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
      .execute();

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
    const { nome, price, color, assessment, discount, user_id } = req.body;

    const parsed = insertProductSchema.safeParse({ nome, price, color, assessment, discount, user_id });
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.format() });
    }

    const existingProduct = await db
      .select()
      .from(products)
      .where(eq(products.id, Number(id))) 
      .execute();

    if (!existingProduct.length) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    const result = await db
      .update(products)
      .set({
        nome,
        price,
        color,
        assessment,
        discount,
        user_id,
      })
      .where(eq(products.id, Number(id))); 

    return res.status(200).json({ message: "Produto atualizado com sucesso", result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao atualizar produto" });
  }
});


productRoutes.delete("/products/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const existingProduct = await db
      .select()
      .from(products)
      .where(eq(products.id, Number(id))) 
      .execute();

    if (!existingProduct.length) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    await db.delete(products)
      .where(eq(products.id, Number(id))); 

    return res.status(200).json({ message: "Produto excluído com sucesso" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao excluir produto" });
  }
});


export default productRoutes;
