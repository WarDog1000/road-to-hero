import ItemModel from "../models/item"
import { Item } from '../interfaces/item.interface'

const insertOne = async (item: Item) => {

  const response = await ItemModel.create(item)

  return response

}

const findMany = async () => {

  const response = await ItemModel.find({})

  return response
}

const findOne = async (id: string) => {

  const response = await ItemModel.findOne({ _id: id })

  return response
}

const updateOne = async (id:string, data: Item) => {
  
  const response = await ItemModel.findOneAndUpdate({ _id: id }, data, {new: true} )

  return response
}

const removeOne = async (id:string) => {

  const response = await ItemModel.deleteOne({ _id: id })

  return response
}

export { insertOne, findMany, findOne, updateOne, removeOne }