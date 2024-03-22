import { Schema, Types, model, Model } from 'mongoose'
import { User } from '../interfaces/user.interface'

const UserSchema = new Schema<User>(
  {
    name: {type: String, required: true},
    role: {type: String, enum: ["ADMIN", "MANAGER", "USER", "ROOT"], default: "USER"},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true}
  }, 
  {
    timestamps: true,
    versionKey: false,
  }
)

const UserModel = model("users", UserSchema)
export default UserModel