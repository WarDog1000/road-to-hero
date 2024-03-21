import { Schema, Types, model, Model } from 'mongoose'
import { Item } from '../interfaces/item.interface'

const ItemSchema = new Schema<Item>(
  {
    name: {type: String, required: true},
    color: {type: String, required: true},
    model: {type: String, required: true},
    brand: {type: String, required: true},
    price: {type: Number, required: true},
    year: {type: Number, required: true},
    fuel: {type: String, enum: ["gasoline", "electric"], required: true},
    description: {type: String, required: true }
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const ItemModel = model('items', ItemSchema)

export default ItemModel