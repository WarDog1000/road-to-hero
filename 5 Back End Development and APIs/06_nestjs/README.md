# Nestjs + class-validator

Nestjs es uno de los Frameworks de Nodejs mas populares actualmente para la creación de aplicaciones web Backend profesionales y que necesiten escalar en algun momento. Este Framework posee una arquitectura limpia para escribir codigo y crear API REST, APIs de GraphQL, Websockets y microservicios, todo usando sintaxis y paquetes de Typescript, ademas que posee una comunidad muy grande y documentación de todos sus modelos principales para que podamos crear rápidamente código de Backend.

## Primeros comandos

> Instalar Nest en el PC

```bash
npm i -g @nestjs/cli
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

## Module

> `src/tasks/tasks.module.ts`

```javascript
import { Module } from '@nestjs/common'
import { TaskController } from './tasks.controller';
import { TaskService } from './tasks.service';

@Module({ // declarative
  controllers: [TaskController], // controladores (infraestructura)
  providers: [TaskService] // inyeccion de dependencias (servicios)
})
```

## Controller

> `src/tasks/tasks.controller.ts`

```javascript
import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TaskService } from "./tasks.service";

@Controller('/tasks')
export class TaskController {

  taskService: TaskService;
  
  constructor(taskService: TaskService) {
    this.taskService =  taskService;
  }

  @Get('/getall')
  getAllTasks() { 
    return this.taskService.getTasks();
  }
  @Get('/getone/:id')
  getOneTask() {
    return this.taskService.getOneTask();
  }

  @Post('/create')
  createTask() {
    return this.taskService.createTask();
  }

  @Put('/update/:id')
  updateTask() {
    return this.taskService.updateTask();
  }

  @Delete('/del/:id')
  deleteTask() {
    return this.taskService.deleteTask();
  }

  @Patch('/patch')
  updateTaskStatus() {
    return this.taskService.updateTaskStatus();
  }

}
```

## Service

> `src/tasks/tasks.service.ts`


```javascript
import { Injectable } from '@nestjs/common'

@Injectable()
export class TaskService {
  
  getTasks() {

    // buscar en una base de datos &&? 

    // aplicar logica de negocio &&?

    return 'Obteniendo todas las atreas'
  }

  getOneTask() {
    return 'Obteniando una tarea'
  }

  createTask() {
    return 'Tarea creada'
  }

  updateTask() {
    return 'Tarea modificada'
  }

  deleteTask() {
    return 'Tarea eliminada'
  }

  updateTaskStatus() {
    return 'Actulizando el status de la tarea'
  }
}
```

## @Req(), @Res()

```javascript
import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express'

@Controller('/hello')
export class HelloController {

  @Get('/')
  index(@Req() req: Request, @Res() res: Response) {

    /***
     * 
     * Http Request
     * 
     * GET http://localhost:3000/hello
     * 
     * "response": { "message": 'Hello World1' }
     * 
     */

    res.status(200).json({
      message: 'Hello Worlds!'
    })
  }
}

```

## Request: @Body()

```javascript
import { Body } from '@nestjs/common'
 
@Controller('/tasks')
export class TaskController {

  taskService: TaskService;
  
  constructor(taskService: TaskService) {
    this.taskService =  taskService;
  }

  @Post('/create')
  createTask(@Body() task: any) {

    /**
     *
     * POST 
     * 
     * Body { "name": "task 1", "description": "a new task", "status": true }
     * 
     * */

    return this.taskService.createTask(task);
  }
}
```

## Request: @Query()

```javascript
import { Query } from '@nestjs/common'

  @Get('/for')
  getTasksFor(@Query() query: any) {
    console.log(query); 
    /** 
     * 
     * GET
     * 
     * http://localhsote:3000/tasks/for?query=123
     * 
     * "response": {query: '123'}
     * 
     **/
    return 'Tareas obtenidas en base a:' + query
  }
```

## Request: @Param()

```javascript
import { Param } from '@nestjs/common'

 @Get('/getone/:id')
  getOneTask(@Param('id') id: string) {

    /**
     * 
     * GET
     * 
     * http://localhost:3000/tasks/getone/1
     * 
     * */

    return this.taskService.getOneTask(id);
  }
```

## HTTP Response: NotFoundException

```javascript
import { NotFoundException } from '@nestjs/cli';

 @Get('/error')
  launchError() {
    const error = true;

    /**
     * 
     * GET
     * 
     * http://localhost:3000/hello/error
     * 
     * "response": {
     * "message": "La tarea no fue encontrada",
     * "error": "Not Found",
     * "statusCode": 404
     * },
     * "status": 404,
     * "options": {},
     * "message": "La tarea no fue encontrada",
     * "name": "NotFoundException"
     * }
     * 
     * */

    if(error) return new NotFoundException('La tarea no fue encontrada') 
  }
```

## DTO (Data Transfer Object)

Se puede utilizar como clases

> `src/tasks/dto/tasks.dto.ts`

```javascript
export class CreateTaskDTO {
  title: string
  description: string
  status: boolean
}
```

Se pueden utilizar tambien como interfaces

> `tasks/interfaces/tasks.interfaces.ts`

```javascript
export interface UpdateTaskInterface {
  title?: string
  description?: string
  status?:: boolean
}
```

## Validaciones en Nestjs: 

```bash
npm install --save class-validator class-transformer
```
> `src/tasks/tasks.interface.ts`

```javascript
import { IsString, IsBoolean, MinLength, MaxLength } from 'class-validator'

export class CreateTaskDTO {

  @IsString()
  @MinLength(1)
  title: string

  @MinLength(1)
  @MaxLength(10)
  @IsString()
  description: string

  @IsBoolean()
  status: boolean
}
```

> `src/tasks/tasks.controller.ts`

```javascript
 import fom { UsePipes, ValidationPipe } from "@nestjs/common";
 
  @Post('/create')
  @UsePipes(new ValidationPipe()) // decorador para ejecutar validaciones provenientes de la interface | DTO
  createTask(@Body() task: CreateTaskDTO) {
    return this.taskService.createTask(task);

    /**
     * 
     * POST http://localhost:3000/tasks/create
     * 
     * "body": {
     *    "name": "new task",
     *    "description": "a new task",
     *    "status": "true"
     *  }
     * 
     * "reponse": {
     *    "message: ["status must be a boolean value"],
     *    "error": "Bad Request",
     *    "statusCode": 400
     *  }
     * 
     * */
  }
 ```

 O user el `ValidationPipe` de manera global desde el `main.ts`

 > `src/main.ts`

 ```javascript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true // ignora los datos que no esten especificados en el DTO
  }))
  
  await app.listen(3000);
}
bootstrap();

```
> `src/tasks/tasks.controller.ts`

```javascript
@Post('/create')
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user)
}```

> `src/tasks/dto/create-task.dto.ts`

```javascript
import { IsEmail, IsString, IsNumber, IsNotEmpty, Max } from 'class-validator'

export class CreateUserDto {

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  password: string

  @IsString()
  @IsNotEmpty()
  username: string

  @IsNumber()
  @Max(100)
  age: number
}
```

## HTTP Status Code: @HttpCode()

```javascript
import { HttpCode } from '@nestjs/common';

@Get('/404')
@HttpCode(404)
notFoundPage() {
  return 'Se lanzo un nuevo error'
}
```

```javascript
import { NotFoundException } from '@nestjs/common';

@Get('/error')
@HttpCode(404)
launchError() {
  const error = true;

  if(error) return new NotFoundException('La tarea no fue encontrada') 
}
```

## Pipes: 

* ParseIntPipe

```javascript
import { ParseIntPipe } from '@nestjs/common';

@Get('ticket/:num')
getNumber(@Param('num', ParseIntPipe) num: number) {
  return num + 14;
}
```

* ParseBoolPipe

```javascript
@Get('active/:status')
getNumber(@Param('status', ParseBoolPipe) status: boolean) {
  return status;
}
```

## Pipes Personalizados

```bash
nest g pipe hello/pipes/ValidateQuery
```

> `src/hello/pipes/validate-query/validate-query.pipe.ts`

```javascript
import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateQueryPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {

    const ageNumber = parseInt(value.age.toString(), 10)
 
    if(isNaN(ageNumber)){ // hello => NaN
      throw new HttpException('age must be a number', HttpStatus.BAD_REQUEST)
    }

    return {...value, age: ageNumber};
  }
}


```

```javascript
import { ValidateQueryPipe } from './pipes/validate-query/validate-query.pipe';

@Get('/greet')
greet(@Query(ValidateQueryPipe) query: {name: string, description: string, age: number}) {
  return `Hello ${query.name}, ${query.description}, tienes: ${age} años a partir de ahora`
  /**
   * 
   * Valida que age sea un number
   * 
   * GET http://localhost:3000/hello/greet?name=jhon&description=como estas?&age=20
   * 
   * "response": "Hello jhon, como estas, tienes 20 años apartir de ahora?"
   * 
   * */
}
```

## Guards

```bash
nest g guard hello/guards/auth
```

> `src/hello/guards/auth/auth.guards.ts

```javascript
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest() as Request

    if(!request.headers['authorization']) return false;

    return true;
  }
}
```

```javascript
import { UseGuards } from '@nestjs/common';

@Get('/guards')
@UseGuards(AuthGuard)
privateAccessRoute() {
  return 'Acceso a la ruta protegida'
  /**
   * 
   * GET http://localhost:3000/hello/guards
   * 
   * "headers": {
   * "Accept": "application/json,
   * "Content-Type": "application,
   * "Authorization": "Bearer 123"
   * }
   * 
   * "response": {
   *  "message": "Acceso a la ruta protegida"
   * }
   * 
   * */
}
```

## Middlewares

```bash
nest g middleware auth/logger
```
