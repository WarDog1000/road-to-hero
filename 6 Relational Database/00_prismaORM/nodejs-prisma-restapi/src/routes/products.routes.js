import { Router } from "express";
import {PrismaClient} from "@prisma/client";

const dbConnection = new PrismaClient(); // se instancia una coneccion con la base de datos

const router = Router(); // instancia un modulo Route para definir rutas backend

// ruta con metodo GET, hace algo
router.get('/products', async (req, res) => {
  // de la tabla products busca todos
  const allProducts = await dbConnection.products.findMany();
  // res.send("productos");
  res.json(allProducts);
});

// ruta con metodo POST, hace algo
router.post('/products', async (req, res) => {
  // crea un nuevo producto dentro de la tabal products
  const newProduct = await dbConnection.products.create({
    data: req.body
  });
  res.json(newProduct);
});

// ruta para obtener un unico producto de la tabla
router.get('/products/:id', async (req, res) => {
  const aProduct = await dbConnection.products.findUnique({
    where: {
      id: parseInt(req.params.id)
    }
  });
  if(!aProduct) { return res.status(404).json({error: "Product not found!"})}
  res.json(aProduct);
});

// ruta para eliminar un unico producto de la tabla
router.delete('/products/:id', async (req, res) => {
  const deletedProduct = await dbConnection.products.delete({
    where: {
      id: parseInt(req.params.id)
    }
  });
  if(!deletedProduct) { return res.status(404).json({error: "Product not found!"})}
  res.json(deletedProduct);
});

// ruta para actualizar un unico producto de la tabla
router.put('/products/:id', async (req, res) => {
  const updatedProduct = await dbConnection.products.update({
    where: {
      id: parseInt(req.params.id)
    },
    data: req.body
  });
  if(!updatedProduct) { return res.status(404).json({error: "Product not found!"})}
  res.json(updatedProduct);
});

export default router;