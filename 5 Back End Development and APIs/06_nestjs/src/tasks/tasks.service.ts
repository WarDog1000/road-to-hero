import { Injectable } from '@nestjs/common'

@Injectable()
export class TaskService {
  
  getTasks() {

    // buscar en una base de datos &&? 

    // aplicar logoca de negocio &&?

    return 'Obteniendo todas las atreas'
  }

  testing() {
    return 'Test!! '
  }
}