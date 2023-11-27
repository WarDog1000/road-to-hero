import { Router } from "express";
import {PrismaClient} from "@prisma/client";

const dbConnection = new PrismaClient(); // se instancia una coneccion con la base de datos

const router = Router(); // instancia un modulo Route para definir rutas backend

// ruta con metodo GEt, hace algo
router.get('/categories', async (req, res) => {
  // de la tabla categories busca todos
  const allCategories = await dbConnection.category.findMany({
    include: {
      products: true
    }
  });
  // res.send("productos");
  res.json(allCategories);
});

export default router;