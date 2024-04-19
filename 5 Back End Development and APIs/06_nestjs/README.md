# Nestjs 

Nestjs es uno de los Frameworks de Nodejs mas populares actualmente para la creación de aplicaciones web Backend profesionales y que necesiten escalar en algun momento. Este Framework posee una arquitectura limpia para escribir codigo y crear API REST, APIs de GraphQL, Websockets y microservicios, todo usando sintaxis y paquetes de Typescript, ademas que posee una comunidad muy grande y documentación de todos sus modelos principales para que podamos crear rápidamente código de Backend.

## Primeros comandos

> Instalar Nest en el PC

```bash
npm i -G @nestjs/cli
```

> Crear un nuevo proyecto

```bash
nest new .
```

> Crear <`module`>, <`controller`>, <`service`>

```bash
nest generate <> name

nest generate module tasks
nest generate controller tasks
nest generate service tasks
```

```bash
/tasks
  - tasks.controller.ts
  - tasks.service.ts
  - tasks.module.ts
```

### Abreviaciones

> Crear <`module`>, <`controller`>, <`service`>

```bash
nest generate <> name

nest g m tasks
nest g co tasks
nest g s tasks
```