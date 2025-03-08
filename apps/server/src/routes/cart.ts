import { Request, Response, Router } from "express";
import { db } from "@repo/db/client";
import { carts } from "@repo/db/schema";
import { insertCartSchema } from "@repo/db/schema";
import { eq } from "drizzle-orm"; 

const cartRoutes = Router();

cartRoutes.post("/carts", async (req: Request, res: Response) => {
  try {
    const { user_id, product_id, quantity } = req.body;

    // Validação de entrada
    const parsed = insertCartSchema.safeParse({ user_id, product_id, quantity });
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.format() });
    }

    const result = await db
      .insert(carts)
      .values({
        user_id,
        product_id,
        quantity,
      });

    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao adicionar produto ao carrinho" });
  }
});

cartRoutes.get("/carts", async (req: Request, res: Response) => {
  try {
    const { user_id } = req.query;

    if (!user_id) {
      return res.status(400).json({ error: "user_id é obrigatório" });
    }

    const cartItems = await db
      .select()
      .from(carts)
      .where(eq(carts.user_id, user_id as string));

    return res.status(200).json(cartItems);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar itens do carrinho" });
  }
});

cartRoutes.put("/carts/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    if (isNaN(Number(id))) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const existingCartItem = await db
      .select()
      .from(carts)
      .where(eq(carts.id, Number(id))) //
      .execute();

    if (!existingCartItem.length) {
      return res.status(404).json({ error: "Item no carrinho não encontrado" });
    }

    const result = await db
      .update(carts)
      .set({ quantity })
      .where(eq(carts.id, Number(id))); 

    return res.status(200).json({ message: "Item atualizado no carrinho", result });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar item do carrinho" });
  }
});

cartRoutes.delete("/carts/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (isNaN(Number(id))) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const existingCartItem = await db
      .select()
      .from(carts)
      .where(eq(carts.id, Number(id))) 
      .execute();

    if (!existingCartItem.length) {
      return res.status(404).json({ error: "Item no carrinho não encontrado" });
    }

    await db.delete(carts).where(eq(carts.id, Number(id))); 

    return res.status(200).json({ message: "Item excluído do carrinho com sucesso" });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao excluir item do carrinho" });
  }
});

export default cartRoutes;
