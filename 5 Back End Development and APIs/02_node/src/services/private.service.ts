import UserModel from "../models/user.model"

const  findMany = async () => {

  const response = await UserModel.find({})

  return response
}

export { findMany }