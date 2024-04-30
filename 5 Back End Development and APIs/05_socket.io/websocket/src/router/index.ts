// "Creador dinamico de Rutas"
import { Router } from 'express'
import { readdirSync } from 'fs'

const PATH_ROUTER = `${__dirname}`

export const router = Router()

/**
 * 
 * index.routes.ts, items.routes.ts => 'index', 'items'
 * @returns 
 */

const cleanFileName = (filename: string) => {
  const file = filename.split('.').shift()
  return file
}

readdirSync(PATH_ROUTER).filter((filename) => {
  const cleanName = cleanFileName(filename)
  if(cleanName !== 'index') {
    import(`./${cleanName}.routes`).then((moduleRouter) => {
      router.use(`/${cleanName}`, moduleRouter.router)
    })
  }
})