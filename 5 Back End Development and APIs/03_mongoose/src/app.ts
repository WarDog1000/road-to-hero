import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import config from './config'
import { router } from './router'

// initialization
const app = express()

// settings
const PORT = config.PORT
app.set('port', PORT)

// middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use(router)

export default app