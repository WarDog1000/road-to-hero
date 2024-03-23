import { Request, Response } from "express"
import { findMany } from "../services/private.service"
import { handleHTTP } from "../utils/error.handle"
import { JwtPayload } from "jsonwebtoken"

interface RequestExt extends Request {
  user?: string | JwtPayload
}

const getUsers = async (req: RequestExt, res: Response) => {
  try {

    const response = await findMany()
    
    res.send({...response, observer: req?.user})

  } catch (eror) {
    handleHTTP(res, 'ERROR_GET_ITEMS')
  }
}

export { getUsers }