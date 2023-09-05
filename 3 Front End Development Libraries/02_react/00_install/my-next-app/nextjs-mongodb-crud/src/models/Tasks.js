import { Schema } from "mongoose";
new Schema({
  title: {
    type: String,
    required: [true, "El titulo es requerido"],
    unicode: true,
    trim: true
  },
  description: {
    
  }
})