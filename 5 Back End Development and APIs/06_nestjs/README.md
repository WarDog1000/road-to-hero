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

## Module

> `tasks/tasks.module.ts`

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

> `/tasks/tasks.controller.ts`

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

> `tasks/tasks.service.ts`


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
     * http://localhsote:3000/tasks?query=123{}
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