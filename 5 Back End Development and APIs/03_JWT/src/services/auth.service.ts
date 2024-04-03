import { User } from "../interfaces/user.interface"
import UserModel from "../models/user.model"
import { encrypt, verify } from "../utils/bcrypt"
import { generateToken } from "../utils/jwt"

const registerService = async (body: User) => {
  
  const { email, password } = body

  const isExist = await UserModel.findOne({ email })

  if(isExist) return "EMAIL_ALREADY_EXIST"

  const encryptedPass = await encrypt(password)

  const response = await UserModel.create({...body, password: encryptedPass})

  return response

}

const loginService = async (body: User) => {
  
  const { email, password } = body

  const getUser = await UserModel.findOne({email})

  if(!getUser) return "USER_NOT_FOUND"

  const verifiedPass = await verify(password, getUser.password )

  if(!verifiedPass) return "INVALID_PASSWORD"

  // Generate token

  const token = await generateToken(getUser.id)

  return {token, auth: true}

}

export { loginService, registerService}