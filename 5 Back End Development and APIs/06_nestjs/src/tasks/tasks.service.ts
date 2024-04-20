import { Injectable } from '@nestjs/common'

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

  createTask(task: any) {
    this.tasks.push({...task, id: crypto.randomUUID()})
    return this.tasks 
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