import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { router } from './router'
import dbConnect from './config/mongoose'

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

// coneccion a la base de datos
dbConnect().then(() => console.log("DataBase conexion ready"))

// api router
app.use(router)

app.listen(PORT, () => console.log(`Server listen on port:${PORT}`))