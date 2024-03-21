import { Router } from 'express'
import { logMiddleware } from '../middlewares/log'
import { deleteItem, getItem, getItems, postItem, updateItem } from '../controllers/item'

const router = Router()

router.get('/', getItems)

router.get('/:id',logMiddleware, getItem)

router.post('/', postItem)

router.delete('/:id', deleteItem)

router.put('/:id', updateItem)

export { router }

