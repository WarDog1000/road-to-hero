import { hash, compare } from 'bcrypt'

const encrypt = async (arg: string) => {
  
  const response = await hash(arg, 10)

  return response
  
}

const verify = async (data: string, encrypted: string) => {

  const response = await compare(data, encrypted)

  return response

}

export { encrypt, verify }