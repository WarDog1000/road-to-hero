import { Body, Controller, Delete, Get, Patch, Post, Put, Query, Param, UsePipes, ValidationPipe } from "@nestjs/common";
import { TaskService } from "./tasks.service";
import { CreateTaskDTO } from "./dto/tasks.interface";
import { UpdateTaskDTO } from "./dto/update-task.dto";

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
  @UsePipes(new ValidationPipe())
  createTask(@Body() task: CreateTaskDTO) {
    return this.taskService.createTask(task);
  }

  @Put('/update/:id')
  updateTask(@Body() task: UpdateTaskDTO) {
    return this.taskService.updateTask(task);
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