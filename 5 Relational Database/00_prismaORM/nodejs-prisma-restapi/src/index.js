import express from "express";
import products from "./routes/products.routes.js";
import categories from "./routes/categories.routes.js";

import cors from "cors";
const server = express(); // instancia el servidor
server.use(cors({
  origin: `${process.env.CLIENT_URL}`
})); // da acceso a los cors
server.use(express.json()); // middleware

server.use('/api', products); // utiliza una ruta
server.use('/api', categories); // utiliza la ruta ./routes/categories.routes.js

server.listen(process.env.PORT); // estable un puerto para el servidor