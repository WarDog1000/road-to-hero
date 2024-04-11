import { hash, compare } from 'bcryptjs'

const encrypt = async (password: string) => {

  const response = await hash(password, 8)

  return response
  
}

const verify = async (password: string, passHash: string) => {

  const response = await compare(password, passHash)

  return response

}

export { encrypt, verify }