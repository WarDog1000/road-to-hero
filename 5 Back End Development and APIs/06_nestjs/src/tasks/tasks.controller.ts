import { Body, Controller, Delete, Get, Patch, Post, Put, Query, Param } from "@nestjs/common";
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
  getOneTask(@Param('id') id: string) {
    console.log(id)
    return this.taskService.getOneTask(id);
  }
  
  @Get('/for')
  getTasksFor(@Query() query: any) {
    console.log(query)
    return 'Tareas obtenidas en base a: ' + query
  }

  @Post('/create')
  createTask(@Body() task: any) {
    return this.taskService.createTask(task);
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