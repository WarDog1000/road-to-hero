import { Router } from 'express'
import { createNewUserController, getAllUsersController } from '../controllers/user.controller'

const router = Router()

router.post('/create', createNewUserController)
router.get('/getall', getAllUsersController)

export { router }