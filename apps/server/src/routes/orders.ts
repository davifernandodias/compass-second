// import { Request, Response, Router } from "express";
// import { db } from "@repo/db/client";
// import { orders, orderItems } from "@repo/db/schema";
// import { insertOrderSchema, insertOrderItemSchema } from "@repo/db/schema";
// import { eq } from "drizzle-orm";

// const orderRoutes = Router();

// // Criar um novo pedido
// orderRoutes.post("/orders", async (req: Request, res: Response) => {
//   try {
//     const { user_id, status } = req.body;

//     const parsed = insertOrderSchema.safeParse({ user_id, status });
//     if (!parsed.success) {
//       return res.status(400).json({ error: parsed.error.format() });
//     }

//     const orderResult = await db
//       .insert(orders)
//       .values({ user_id, status });

//     const orderId = orderResult[0]?.id;

//     if (!orderId) {
//       return res.status(400).json({ error: "Erro ao criar pedido" });
//     }

//     // Criar os itens do pedido
//     const itemsResult = await db
//       .insert(orderItems)
//       .values(req.body.items.map((item: any) => ({
//         order_id: orderId,
//         product_id: item.product_id,
//         quantity: item.quantity,
//       })));

//     return res.status(201).json({ orderId, itemsResult });
//   } catch (error) {
//     return res.status(500).json({ error: "Erro ao criar pedido" });
//   }
// });

// // Listar todos os pedidos
// orderRoutes.get("/orders", async (req: Request, res: Response) => {
//   try {
//     const ordersList = await db.select().from(orders);
//     return res.status(200).json(ordersList);
//   } catch (error) {
//     return res.status(500).json({ error: "Erro ao buscar pedidos" });
//   }
// });

// // Atualizar status de um pedido
// orderRoutes.put("/orders/:id", async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const { status } = req.body;

//     // Validação do ID
//     if (!id || isNaN(Number(id))) {
//       return res.status(400).json({ error: "ID inválido" });
//     }

//     // Alteração para garantir que estamos trabalhando com tipos corretos
//     const existingOrder = await db
//       .select()
//       .from(orders)
//       .where(eq(orders.id, Number(id))) // A conversão de id para número
//       .execute();

//     if (!existingOrder || existingOrder.length === 0) {
//       return res.status(404).json({ error: "Pedido não encontrado" });
//     }

//     const result = await db
//       .update(orders)
//       .set({ status })
//       .where(eq(orders.id, Number(id)));

//     return res.status(200).json({ message: "Pedido atualizado com sucesso", result });
//   } catch (error) {
//     return res.status(500).json({ error: "Erro ao atualizar pedido" });
//   }
// });

// // Excluir um pedido
// orderRoutes.delete("/orders/:id", async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;

//     // Validação do ID
//     if (!id || isNaN(Number(id))) {
//       return res.status(400).json({ error: "ID inválido" });
//     }

//     // Alteração para garantir que estamos trabalhando com tipos corretos
//     const existingOrder = await db
//       .select()
//       .from(orders)
//       .where(eq(orders.id, Number(id))) // Convertendo o id para número
//       .execute();

//     if (!existingOrder || existingOrder.length === 0) {
//       return res.status(404).json({ error: "Pedido não encontrado" });
//     }

//     // Exclusão com .where() corretamente implementado
//     const deleteResult = await db
//       .delete(orders)
//       .where(eq(orders.id, Number(id)));

//     return res.status(200).json({ message: "Pedido excluído com sucesso", deleteResult });
//   } catch (error) {
//     return res.status(500).json({ error: "Erro ao excluir pedido" });
//   }
// });

// export default orderRoutes;
