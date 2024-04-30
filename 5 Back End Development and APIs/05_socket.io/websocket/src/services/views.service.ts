import Views from '../interfaces/views.interface'
import MODEL from '../models/views.model'

export const createViewsService = async (body: Views) => {

  const name = body.name.toUpperCase();

  const already = await MODEL.findOne({ name })

  if(already) throw new Error(`NAME: ${name}" ALREADY_EXISTS`)

  return await MODEL.create({...body, name})

}

export const getAllViewsService = async () => {

  return await MODEL.find({})

}

export const getOneViewsService = async (id: string) => {

  return await MODEL.findOne({_id: id})

}

export const updateOneViewsService = async (id: string, data: Views) => {

  if(data.name) data = {...data, name: data.name.toUpperCase()}
  
  return await MODEL.findOneAndUpdate({ _id: id }, data, {new: true} )
  
}

export const deleteOneViewsService = async (id: string) => {

  return await MODEL.deleteOne({_id: id})

}