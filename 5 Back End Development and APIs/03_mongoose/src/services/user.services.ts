import User from "../interfaces/users.interface"
import usersModel from "../models/users.model"

const createNewUser = async (body: User) => {

  const already = await usersModel.findOne({ email: body.email })
  
  if(already) throw new Error("USER_ALREADY_EXISTS")

  const response = await usersModel.create({...body})

  return response

}

const getAllUsers = async ( ) => {
  
  const response = await usersModel.find({})

  if(!response) throw new Error("USERS_NOT_FOUND")

  return response

}

export { createNewUser, getAllUsers }