import { sign, verify } from 'jsonwebtoken'
import { Request, Response } from 'express'

const JWT_SECRET = process.env.JWT_SECRET || "token.01010101"

const generateToken = async (id: string, etc?: string) => {

  const jwt = sign({id, etc}, JWT_SECRET, {expiresIn: "1h"})

  return jwt
}

const verifyToken = async (token: string) => {

  const jwt = verify(token, JWT_SECRET)
  
  return jwt
  
}

const getToken = (req: Request) => {

  const response = (req.headers.authorization)?.split(' ')[1]

  if(!response) return false

  return response
}

export { generateToken, verifyToken, getToken }