import io from 'socket.io-client'

// socket.io connection
const socket = io('/');

export const useSocketConnection = () => {


  socket.on('connect', () => {
    console.log(socket.id)
    console.log(socket.connected)
  })
  
  socket.on('disconnect', () => {
    console.log(socket.id)
    console.log(socket.connected)
  })

  return socket
}