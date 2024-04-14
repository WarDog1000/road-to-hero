import { Schema, model } from 'mongoose'
import User from '../interfaces/users.interface'
import { encrypt, verify } from '../utils/bcrypt'

const UserSchema = new Schema<User> (
  {
    username: String,
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

// encrypt the password
UserSchema.pre('save', async function(next) {
  
  const user = this

  if(!user.isModified('password')) return next()

  const encryptedPass = await encrypt(user.password)

  user.password = encryptedPass

  next()

})

// decode the password
UserSchema.methods.comparePassword = async function (password: string): Promise<boolean> {

  return await verify(password, this.password)

}

export default model('node_mongo', UserSchema)