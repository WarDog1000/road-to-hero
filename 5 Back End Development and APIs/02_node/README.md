# Node + Express

### Paso 1: Iniciar el proyecto

> Iniciar `package.json`
```bash
npm init -y
```

### Paso 2: Instalar dependencias

```bash
npm i express cors dotenv mongoose morgan bcrypt jsonwebtoken
```

> devDependencies:

```bash
npm i -D nodemon typescript ts-node @types/node @types/express @types/cors @types/dotenv @types/mongoose @types/jsonwebtoken @types/morgan
```

### Paso 3: Configurar Scripts

> `package.json`

```json
"scripts": {
  "dev": "nodemon src/index.ts",
  "build": "npx tsc",
  "start": "node dist/index.js"
}
```

### Paso 4: Configurar TypeScript

> Instala `typescript` de manera glogal para "desarrollo" (opcional)

```bash
npm i typescript -g
```

> Instalar `tsc` de manera global para transpilar el "desarrollo" (opcional)

```bash
npm i ts-node -g
```

> Crea un archivo de configuración de TypeScript llamado `tsconfig.json` en la raíz del proyecto.

```bash
tsc --init
```

`./tsconfig.json`

```json	
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```

## Project Setup MVC

> Crear directorios

```bash
mkdir src
```

```bash
mkdir router controllers services models interfaces connection utils config
```

> Crear archivo de arranque

```bash
touch src/index.ts src/app.ts src/router/index.ts
```

## App

> `src/app.ts` :

```javascript
import express, { Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import config from './config'
import { router } from './router'

// initializations
const app = express()

const PORT = config.PORT

// settings
app.set('port', PORT)

// middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use(router)

export default app
```

## Index

> `src/index.ts`

```javascript
import app from './app'
import { connection } from './connection'

async function main() {
  
  try {

    // database connection
    await connection()
  
    // server listening
    app.listen(app.get('port'), () => console.log(`Server listen on port: ${app.get('port')}`))
  
  } catch (error) {
    console.log(error)
  }
}


main()
```

## Router

> `src/router/index.ts`

```javascript
// "Creador dinamico de Rutas"
import { Router } from 'express'
import { readdirSync } from 'fs'

const PATH_ROUTER = `${__dirname}`

const router = Router()

/**
 * 
 * index.ts items.ts => index.ts items
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
      console.log(cleanName) // items
      router.use(`/api/${cleanName}`, moduleRouter.router)
    })
  }
})

export { router }
```