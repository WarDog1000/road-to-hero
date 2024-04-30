import { Socket } from 'socket.io'
import MODEL from '../models/views.model'
import Views from '../interfaces/views.interface'

export const WebRTC = (socket: Socket) => {

  socket.on('update-count', async ({id}: {id: string}) => {
    try {

      console.log(id)

      // Encuentra las vistas correspondientes al ID proporcionado
      const views: Views | null = await MODEL.findOne({ _id: id })

      if (!views) throw new Error(`ID: ${id} NOT_FOUND`)

      // Incrementa el contador de vistas
      views.count++

      // Guarda las vistas actualizadas en la base de datos
      const updatedViews: Views | null = await MODEL.findOneAndUpdate({ _id: id }, views, { new: true })

      if (!updatedViews) throw new Error(`CANNOT_UPDATE_VIEWS`)

      // Emite las vistas actualizadas al cliente
      socket.emit('count-updated', updatedViews.count)

    } catch (error) {
      // Maneja cualquier error que ocurra durante el proceso
      console.error('Error al actualizar las vistas:', error)
    }
  })
}
