import mongoose from 'mongoose'

try {
  
  await mongoose.connect('mongodb://localhost:27071/jwtdb').then( db => console.log("Database is connected"))
  
} catch (error) {

  console.log(error.message)

}
