import { Request, Response } from 'express'
import { handleError } from '../utils/errors'
import { getAllUsersService } from '../services/private.service'

const getAllUsers = async (req: Request, res: Response) => {

  try {

    const response = await getAllUsersService()
  
    res.send(response)
    
  } catch (error) {
    handleError(res, 400, "REQUEST_ERROR")
  }
  
}

const getOneUser = () => {}
const updateUser = () => {}
const deleteUser = () => {}

export { getAllUsers, getOneUser, updateUser, deleteUser }