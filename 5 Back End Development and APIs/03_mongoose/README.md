# Nodejs + Mongoose + Bcrypt

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
      router.use(`/api/${cleanName}`, moduleRouter.router)
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

## Mongoose interface

> `/src/interfaces/user.interface.ts`

```javascript
export interface User {
  email: string
  password: string
  comparePassword: (arg: string) => Promise<boolean>
}
```

## Mongoose model

> `/src/models/user.model.ts`

```javascript
import { Schema, model } from 'mongoose'
import { User } from '../interfaces/user.interface'
import { encrypt, verify } from '../utils/bcrypt'


const UserSchema = new Schema <User>(
   {
    username: String,
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
UserSchema.pre('save', async function(next) {
  
  const user = this

  if(!user.isModified('password')) return next()

  const encryptedPass = await encrypt(user.password)

  user.password = encryptedPass

  next()
})

// decode the password
UserSchema.methods.comparePassword = async function (password: string): Promise<boolean> {

  return await verify(password, this.password)

}

export default model<User>('usersPass', UserSchema)
```

## Bcrypt

> `src/utils/bcrypt.ts`

```javascript
import { hash, compare } from 'bcrypt'

const encrypt = async (arg: string) => {
  
  const response = await hash(arg, 10)

  return response
  
}

const verify = async (data: string, encrypted: string) => {

  const response = await compare(data, encrypted)

  return response

}

export { encrypt, verify }
```

# Usage

### Mongoose methods

* `.find()`
* `.create({})`
* `.findOne({param: value})`
* `.deleteOne({param: value})`
* `.findOneAndUpdate({param: where}, data, {new: true})`


```javascript
import User from "../interfaces/users.interface"
import usersModel from "../models/users.model"

const createNewUser = async (body: User) => {

  const already = await usersModel.findOne({ email: body.email })
  
  if(already) throw new Error("USER_ALREADY_EXISTS")

  const response = await usersModel.create({...body})

  return response

}

const getAllUsers = async ( ) => {
  
  const response = await usersModel.find({})

  if(!response) throw new Error("USERS_NOT_FOUND")

  return response

}

export { createNewUser, getAllUsers }
```

## HTTP Request

```php
POST https://localhost:3000/api/user/create

json body: {
  "username":"jhon doe",
  "email":"jhondoe@gmail.com",
  "password":"123"
}

response: {
  "username": "jhon doe",
  "email": "jhondoe@gmail.com",
  "password": "$2b$10$RWP5jtzcj3xI9Kcbn/zUUu5E7KqvcrEWyv9dwN.aaPP0Fd.IPrjPu",
  "_id": "661b61113d0d68cf4c3a763a",
  "createdAt": "2024-04-14T04:52:33.148Z",
  "updatedAt": "2024-04-14T04:52:33.148Z"
}
```