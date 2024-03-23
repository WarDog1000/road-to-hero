import { Router } from "express";
import { getUsers } from "../controllers/private.controller";
import { checkJWT } from "../middlewares/session";

/**
 *  JWT valido
 *  A esta ruta solo se pueden acceder los usuarios qute tengan session activa! 
 */

const router = Router()

router.get('/', checkJWT, getUsers)

export { router }