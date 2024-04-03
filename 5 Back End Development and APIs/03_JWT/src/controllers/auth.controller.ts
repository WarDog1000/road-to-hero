import { Request, Response } from "express"
import { loginService, registerService } from "../services/auth.service"
import { handleError } from "../utils/errors"

const loginController = async (req: Request, res: Response) => {

  try {

    const response = await loginService(req.body)
  
    res.send(response)

  } catch (error) {
    handleError(res, 401, "LOGIN_ERROR")
  }

}

const registerController = async (req: Request, res: Response) => {
  
  try {

    const response = await registerService(req.body)
  
    res.send(response)

  } catch (error) {
    handleError(res, 402, "REGISTER_ERROR")
  }
}

export { loginController, registerController }