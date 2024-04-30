import { Request, Response } from 'express'
import { createViewsService, deleteOneViewsService, getAllViewsService, getOneViewsService, updateOneViewsService } from '../services/views.service'

export const createViews = async (req: Request, res: Response) => {
  
  try {

    const body = req.body

    const response = await createViewsService(body)

    res.status(201).json(response)

  } catch (error: any) {
    res.status(409).json({message: error.message})
  }
}

export const getAllViews = async (req: Request, res: Response) => {

  try {

    const response = await getAllViewsService()
   
    res.status(200).json(response)
    
  } catch (error: any) {
    res.status(404).json({message: error.message})
  }
  
}

export const getOneViews = async (req: Request, res: Response) => {
  
  try {

    const id = req.params.id

    const response = await getOneViewsService(id)

    res.status(200).json(response)
    
  } catch (error: any) {
    res.status(404).json({message: error.message})
  }
}

export const updateOneViews = async (req: Request, res: Response) => {

  try {
    
    const id = req.params.id

    const data = req.body
    
    const response = await updateOneViewsService(id, data)
    
    res.status(200).json(response)

  } catch (error: any) {
    res.status(404).json({message: error.message})
  }
}

 export const deleteOneViews = async (req: Request, res: Response) => {

   try {

    const id = req.params.id

    const response = await deleteOneViewsService(id)

    if(!response) throw new Error(`ID: ${id} NOT_FOUND`)

    res.status(200).json(response)
     
  } catch (error: any) {
    res.status(404).json({message: error.message})
  }
 }