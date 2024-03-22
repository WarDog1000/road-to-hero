import { hash, compare } from 'bcryptjs'

const encrypt = async (pass: string) => {

  const response = await hash(pass, 8)

  return response
}

const verified = async (pass: string, passHash: string) => {

  const response = await compare(pass, passHash)

  return response
}

export { encrypt, verified }