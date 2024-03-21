import { Request, Response } from 'express'
import { handleHTTP } from '../utils/error.handle'
import { findMany, findOne, insertOne, updateOne, removeOne } from '../services/item'

const getItems = async (req: Request, res: Response) => {
  try {

    const response = await findMany()
    res.send(response)

  } catch (eror) {
    handleHTTP(res, 'ERROR_GET_ITEMS')
  }
}

const getItem = async (req: Request, res: Response) => {
  try {
    
    const response = await findOne(req.params.id)

    res.send(response ? response : `NOT_FOUND: ${req.params.id}`)

  } catch (error) {
    handleHTTP(res, 'ERROR_GET_ITEM')
  }
}

const postItem = async (req: Request, res: Response) => {
  try {

    const responseItem = await insertOne(req.body)

    res.send(req.body)

  } catch (error) {

    handleHTTP(res, 'ERROR_CREATE_ITEM', error)
    
  }
}

const updateItem = async (req: Request, res: Response) => {
  try {

    const response  = await updateOne(req.params.id, req.body)

    res.send(response)

  } catch (error) {
    handleHTTP(res, 'ERROR_UPDATE_ITEM')
  }
}

const deleteItem = async (req: Request, res: Response) => {
  try {

    const response = await removeOne(req.params.id)

    res.send(response)
    
  } catch (error) {
    handleHTTP(res, 'ERROR_DELETE_ITEM')
  }
}

export { getItem, postItem, deleteItem, updateItem, getItems }