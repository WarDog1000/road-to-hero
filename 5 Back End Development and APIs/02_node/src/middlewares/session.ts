import { NextFunction, Request, Response } from "express"
import { verifyToken } from "../utils/jwt.handle"
import { JwtPayload } from "jsonwebtoken"

type CleanToken = string

interface RequestExt extends Request {
  user?: string | JwtPayload
}

const checkJWT =(req: RequestExt, res: Response, next: NextFunction ) => {

  try {

    const reqToken = req.headers.authorization || ''

    const cleanToken: CleanToken = reqToken.split(' ').pop() as CleanToken // ['Bearer', '*****'] 

    const token = verifyToken(cleanToken)

    if(!token) {

      res.status(401).send("INVALID_SESSION")
      
    } else {

      req.user = token

      next()
    }
    
  } catch (error) {
    res.status(400).send("INVALID_TOKEN")
  }

}

export { checkJWT }