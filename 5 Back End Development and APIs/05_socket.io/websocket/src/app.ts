import express from 'express'
import { createServer } from 'node:http'
import { Server } from 'socket.io'
import {config} from './config'
import {router} from './router'
import cors from 'cors'
import morgan from 'morgan'
import { WebRTC } from './utils/socket.io'

// INITIALIZE
const app = express()
const server = createServer(app)

// WEBSOCKET
server.listen(config.SOCKET)
const io = new Server(server, {
  cors: {
    origin: '*',
  }
})

io.on('connection', socket => {

  console.log('Client connected')
  console.log('socket id:', socket.id)
  console.log('socket connected:', socket.connected)
  
  WebRTC(socket)
  
  socket.on('disconnect', () => {
    console.log('Client disconnected')
    console.log('socket id:', socket.id)
    console.log('socket connected:', socket.connected)
  })
})

// PORT
app.set('port', config.PORT)

// MIDDLEWARES
app.use(cors())
app.use(morgan(config.LOGS))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
 
app.get('/api/dev', function (req, res) {
  res.send('hello, world!')
})

// ROUTER
app.use(router)

export { app }