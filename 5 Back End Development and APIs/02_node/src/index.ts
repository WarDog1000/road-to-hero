import 'dotenv/config'
import express, { Request, Response } from 'express'
import cors from 'cors'
import { router } from './routes'
import db from './config/mongo'

// Configurar el puerto en el que el servidor escuchará
const PORT = process.env.PORT || 3000

// Crear una instancia de la aplicación Express
const app = express()

// permite origenes cruzados
app.use(cors(
    // {origin: [''],}
    ))

db().then(() => console.log("Data Base conexion ready"))

// Middleware para manejar solicitudes JSON
app.use(express.json())

app.use(router)

// Ruta de ejemplo
app.get('/items', (req: Request, res: Response) => {
    res.send('¡Hola, mundo!')
})

// Manejar errores 404 (recurso no encontrado)
app.use((req: Request, res: Response) => {
    res.status(404).send('Recurso no encontrado')
})

// Manejar errores 500 (error interno del servidor)
app.use((err: any, req: Request, res: Response, next: any) => {
    console.error(err.stack)
    res.status(500).send('Error interno del servidor')
})

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`)
})
