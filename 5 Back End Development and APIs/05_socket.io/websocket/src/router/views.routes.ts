import { Router } from "express";
import { createViews, deleteOneViews, getAllViews, getOneViews, updateOneViews } from '../controllers/views.controller'

export const router = Router()

router.post('/create', createViews)

router.get('/getall', getAllViews)

router.get('/getone/:id', getOneViews)

router.put('/update/:id', updateOneViews)

router.delete('/delete/:id', deleteOneViews)