import { Controller, Get } from "@nestjs/common";
import { TaskService } from "./tasks.service";

@Controller()
export class TaskController {

  taskService: TaskService;
  
  constructor(taskService: TaskService) {
    this.taskService =  taskService;
  }

  @Get('/tasks')
  getAllTasks() { 
    return this.taskService.getTasks();
  }
  @Get('/test')
  runTest() {
    return this.taskService.testing();
  }

}