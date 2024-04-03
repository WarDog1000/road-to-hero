import { NextFunction, Response } from 'express'
import { RequestExt } from '../interfaces/reqext.interface'
import { handleError } from '../utils/errors'
import { getToken, verifyToken }  from '../utils/jwt'

type Token = string

const checkJWT = (req: RequestExt, res: Response, next: NextFunction) => {
  try {

    const token = getToken(req) as Token

    const session = verifyToken(token)

    if(!session){

      handleError(res, 401, "INVALID_SESSION")

    } else {

      req.user = session

    }
    
  } catch (error) {
    handleError(res, 401, "INVALID_TOKEN")
  }
}

export { checkJWT }