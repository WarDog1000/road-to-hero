  import { Schema, model } from 'mongoose'
  import { User } from '../interfaces/user.interface'

  const UserSchema = new Schema<User>(
    {
      username: String,
      email: String,
      password: String,
      role:{ type: String, enum: ["ADMIN", "MANAGER", "USER", "ROOT"]}
    },
    {
      timestamps: true,
      versionKey: false
    }
  )

  const UserModel = model('user_jwt', UserSchema)

  export default UserModel