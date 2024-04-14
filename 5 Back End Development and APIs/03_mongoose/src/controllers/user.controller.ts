import { Request, Response } from 'express'
import { createNewUser, getAllUsers } from '../services/user.services'

const createNewUserController = async (req: Request, res: Response) => {

  try {

    const response = await createNewUser(req.body)
  
    return res.status(201).json(response)

  } catch (error: unknown) {
    res.json({ message: error})
  }
}

const getAllUsersController = async (req: Request, res: Response) => {

  try {
    const response = await getAllUsers()
  
    return res.status(201).json({response})
    
  } catch (error: unknown) {
    res.json({ message: error})
  }
}

export { createNewUserController, getAllUsersController }