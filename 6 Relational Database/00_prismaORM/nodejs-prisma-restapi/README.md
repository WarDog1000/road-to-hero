# [Nodejs y Prisma ORM REST API]("https://www.youtube.com/watch?v=ESShhQmBjjY&t=198s&ab_channel=FaztCode")

REST API usando Nodejs junto con el Framework Express en el backend, junto con Prisma como ORM para poder comunicar con bases de datos SQL como seria PostgreSQL, MySQL, Sqlite, o Mongodb.  Ademas que usando Prisma también para hacer consultas, además de poder generar migraciones.

### Prerequisitos

- Nesesitas Node.js v16.13.0
- Extencion `Prisma` para vscode, provee autocompletado, formato, autocompletado y resaltado de codigo para el archivo `achema.prisma`.
- Extencion SQLite Viewer, para ver las bases de datos.

## Instalacion

- Prisma es un modulo y se instala como dependencia de desarrolo

```
npm i prisma --save-dev
  or
npm i prisma -D
```

## Initialize

Finalmente, configure Prisma con el comando init de Prisma CLI:

```
npx prisma init --datasource-provider sqlite
  or
npx prisma init
 ```

Próximos pasos:
1. Configure DATABASE_URL en el archivo .env para que apunte a su base de datos existente.
2. Configure el proveedor del bloque de fuente de datos en `esquema.prisma` para que coincida con su base de datos: postgresql, mysql, sqlite, sqlserver,
 mongodb o cucarachadb (crea las tablas).

3. Ejecute una migración para crear las tablas de su base de datos con Prisma Migrate
En este punto, tiene un esquema Prisma pero aún no tiene una base de datos. Ejecute el siguiente comando en su terminal para crear la base de datos SQLite y las tablas Usuario y Publicación representadas por sus modelos:

```
npx prisma migrate dev --name dbname
  or
npx prisma migrate dev
```


Nota: Cuando realizo cambios en mi base de datos debo de volver a ejecutar una migracion.

## Uso de la Base de datos

Para usar o hacer consultas a la base de datos generado con prisma primero se debe de importar el modulo `CLI` de prisma:

```
import { PrismaClient } from "@prisma/client"; 
```

Esta clase crea una coneccion hacia la base de datos desde el server.

### Tambien

puedo levantar una UI de prisma en el navegador para ver y editar mis tablas con el comando: 

```
npx prisma studio
```

## Deploy

/package.json

```
"postinstall": "prisma generate" 
```

/.env

DATABASE_URL="deploy-url-server"

