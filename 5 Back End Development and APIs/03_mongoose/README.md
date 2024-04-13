# Nodejs + Mongoose

### Inicializar Proyecto
> Crear `package.json`

```bash
npm init -y
```

> Inatalar dependecias

```bash
npm i express mongoose dotenv morgan cors bcrypt
```

```bash
npm i -D typescript ts-node @types/node @types/express @types/mongoose @types/morgan @types/cors @types/bcrypt
```

### Iniciar TypeScript

> Crear `tsconfig.json`

```bash
tsc --init
```

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

## Project Setup

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
      router.use(`/${cleanName}`, moduleRouter.router)
    })
  }
})

export { router }
```

## Mongoose connection

> `src/connection/index.ts`

```javascript
import { connect } from 'mongoose'
import config from '../config'

async function connection(): Promise<void> {
  
  const DB_URI = <string> config.DB.URI

  await connect(DB_URI).then(() => {
    console.log('Database connected')
  })

}

export { connection }

```

### Mongoose methods

* `.find()`
* `.create({})`
* `.findOne({param: value})`
* `.deleteOne({param: value})`
* `.findOneAndUpdate({param: where}, data, {new: true})`

### Mongoose models

> `/src/models/user.model.ts`

```javascript
import { model, Schema } from 'mongoose'
import { User } from '../interfaces/user.interface'
import { generateBcrypt, compareBcrypt } from '../utils/bcrypt'


const userSchema = new Schema<User>(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

// encrypt the password
userSchema.pre('save', async function(next) {
  
  const user = this

  if(!user.isModified('password')) return next()

  const encryptedPass = await generateBcrypt(user.password)

  user.password = encryptedPass

  next()

})

// decode the password
userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {

  return await compareBcrypt(password, this.password)

}

export default model<User>('usersPass', userSchema)
```

### Mongoose interfaces

> `/src/interfaces/user.interface.ts`

```javascript
import { Document } from 'mongoose'

export interface User extends Document {
  email: string
  password: string
  comparePassword: (password: string) => Promise<boolean>
}
```