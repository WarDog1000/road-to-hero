import { Schema, model } from 'mongoose'
import Views from '../interfaces/views.interface'

const ViewsSchema = new Schema<Views> (
  {
    name: String,
    count: Number
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export default model('views', ViewsSchema)