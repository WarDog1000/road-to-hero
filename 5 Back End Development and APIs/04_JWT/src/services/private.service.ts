import UserModel from '../models/user.model'

const getAllUsersService = async () => {

 const response = await UserModel.find({})

 return response

}

export { getAllUsersService }