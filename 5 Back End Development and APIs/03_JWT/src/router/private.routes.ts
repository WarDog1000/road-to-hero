import { Router } from 'express'
import { checkJWT } from '../middlewares/session.middleware'
import { deleteUser, getAllUsers, getOneUser, updateUser } from '../controllers/private.controller'

const router = Router()

router.get('/users', checkJWT, getAllUsers )
router.get('/user/:id', getOneUser )
router.put('/users', updateUser )
router.delete('/users', deleteUser )

export { router }