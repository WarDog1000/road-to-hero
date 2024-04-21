import { Injectable } from '@nestjs/common'
import { CreateTaskDTO } from './dto/tasks.interface'
import { UpdateTaskDTO } from './dto/update-task.dto'

export interface Task {
  name: string
  description: string
  status: boolean
}

@Injectable()
export class TaskService {

  private tasks = []
  
  getTasks() {
    return this.tasks
  }

  getOneTask(id: string) {
    return this.tasks.find(task => task.id === id)
  }

  createTask(task: CreateTaskDTO) {
    this.tasks.push({...task, id: crypto.randomUUID()})
    return this.tasks 
  }

  updateTask(task: UpdateTaskDTO) {
    console.log(task.title, task.description, task.status)
    return 'Tarea modificada'
  }

  deleteTask() {
    return 'Tarea eliminada'
  }

  updateTaskStatus() {
    return 'Actulizando el status de la tarea'
  }
}