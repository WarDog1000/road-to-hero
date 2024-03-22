import { Request, Response } from "express"
import { handleHTTP } from "../utils/error.handle"
import { loginUser, registerNewUser } from "../services/auth.service"

const registerCtrl = async (req: Request, res: Response) => {
  try {

    const response =  await registerNewUser(req.body)

    res.send(response)
    
  } catch (error) {
    // handleHTTP(res, error)
  }
}

const loginCtrl = async (req: Request, res: Response) => {
  try {

    const response = await loginUser(req.body)

    if(response === "PASSWORD_INCORRECT") {
      res.status(403).send(response)
    } else {
      res.send(response)
    }

    res.send(response)
    
  } catch (error) {
    // handleHTTP(res, error)
  }
}

export { registerCtrl, loginCtrl}