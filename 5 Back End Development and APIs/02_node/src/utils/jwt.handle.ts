import { sign, verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || "token.01010101"

const generateToken = async (id: string) => {

  const jwt = sign({id}, JWT_SECRET, {expiresIn: "12h"})

  return jwt
}

const verifyToken = (reqToken: string) => {

 const jwt = verify(reqToken, JWT_SECRET)
 
 return jwt
}

export { generateToken, verifyToken }