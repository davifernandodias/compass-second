import express, { NextFunction, Request, Response, Router } from 'express';
import { db } from "../db/connection";
import { users } from "../db/schema.js";
import { eq } from "drizzle-orm"; 

const userRoutes = Router();

userRoutes.post("/users", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id, email, name, image } = req.body;

    if (!email || !name) {
      return res.status(400).json({ error: "Email e nome são obrigatórios" });
    }

    const [insertedUser] = await db
      .insert(users)
      .values({
        id,
        email,
        name,
        image,
      })
      .returning(); 

    return res.status(201).json(insertedUser);
  } catch (error) {
    next(error);
    return res.status(500).json({ error: "Erro ao salvar usuário" });
  }
});

userRoutes.get("/users/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "ID é obrigatório" });
    }

    const result = await db
      .select()
      .from(users)
      .where(eq(users.id, id)) 
      .execute(); 

    console.log({ result });

    if (result.length === 0) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    return res.json(result[0]); 
  } catch (error) {
    next(error);
  }
});

export default userRoutes;
