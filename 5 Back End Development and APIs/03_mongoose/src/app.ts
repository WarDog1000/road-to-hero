import 'dotenv/config'
import express, { Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { router } from './router'

// initializations
const app = express()

const PORT = process.env.PORT || 3000

// settings
app.set('port', PORT)

// middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// routes
app.get('/', (req: Request, res: Response) => { res.send("Hola mundo")})
app.use(router)

export default app