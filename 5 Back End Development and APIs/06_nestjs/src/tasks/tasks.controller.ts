import { Body, Controller, Delete, Get, Patch, Post, Put, Query, Param, UsePipes, ValidationPipe } from "@nestjs/common";
import { TaskService } from "./tasks.service";
import { CreateTaskDTO } from "./dto/tasks.interface";
import { UpdateTaskDTO } from "./dto/update-task.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller('/tasks')
export class TaskController {

  taskService: TaskService;
  
  constructor(taskService: TaskService) {
    this.taskService =  taskService;
  }

  @ApiTags('tasks')
  @Get('/getall')
  getAllTasks() { 
    return this.taskService.getTasks();
  }
  
  @ApiTags('tasks')
  @Get('/getone/:id')
  getOneTask(@Param('id') id: string) {
    console.log(id)
    return this.taskService.getOneTask(id);
  }
  
  @ApiTags('tasks')
  @Get('/for')
  getTasksFor(@Query() query: any) {
    console.log(query)
    return 'Tareas obtenidas en base a: ' + query
  }
  
  @ApiTags('tasks')
  @Post('/create')
  @UsePipes(new ValidationPipe())
  createTask(@Body() task: CreateTaskDTO) {
    return this.taskService.createTask(task);
  }

  @ApiTags('tasks')
  @Put('/update/:id')
  updateTask(@Body() task: UpdateTaskDTO) {
    return this.taskService.updateTask(task);
  }
  
  @ApiTags('tasks')
  @Delete('/del/:id')
  deleteTask() {
    return this.taskService.deleteTask();
  }
  
  @ApiTags('tasks')
  @Patch('/patch')
  updateTaskStatus() {
    return this.taskService.updateTaskStatus();
  }

}