import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface"
import UserModel from "../models/user.model"
import { encrypt, verified } from "../utils/bcrypt.handle"

const registerNewUser = async (body: User) => {
  const isExist = await UserModel.findOne({email: body.email})

  if(isExist) return "EMAIL_ALREADY_EXIST"

  const encryptedPass = await encrypt(body.password)

  const response = await UserModel.create({...body, password: encryptedPass})

  return response
}

const loginUser = async (body: Auth ) => {
  
  const isExist = await UserModel.findOne({email: body.email})
  
  if(!isExist) return "USER_NOT_FOUND"

  const isPassVerified = await verified(body.password, isExist.password )

  if(!isPassVerified) return "PASSWORD_INCORRECT"

  return isExist
}

export { loginUser, registerNewUser }