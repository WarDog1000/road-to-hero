# Socket.io + Nodejs

## Instalacion de dependencias

```bash
npm i socket.io && npm i -D @types/socket.io
```

## Importacion de Modulos

```javascript
import express from 'express'
import { createServer } from 'node:http'
import { Server } from 'socket.io'
```

## Inicializacion del servidor

```javascript
const app = express()
const server = createServer(app)
server.listen(3000, () => console.log(3000))
const io = new Server( server, {
  cors: {
    origin: '*',
  }
})
```

## Websocket coneccion

```javascript
io.on('connection', socket => {

  console.log('Clien connected') // Client connected
  console.log('socket id:', socket.id) // 1234
  console.log('socket connected:', socket.connected) // true

  myFunction(socket)

  socket.on('disconnect', () => {
    console.log('Client disconnected') // clien Disconnected
    console.log('socket id:', socket.id) // 1234
    console.log('socket connected:', socket.connected) // false
  })
})
```

## WebRTC (Web Real Time Comunication)

`/socket.io.ts`

```javascript
import { Socket } from  'socket.io'

export const myFunction = (socket: Socket) => {

  socket.on('update-count', async ({count}: {count: number})) => {

    // logica de la funcion

    socket.emit('count-updated', count)
  }

}
```


