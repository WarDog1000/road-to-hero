import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

  private users = [{
    id: 1,
    name: 'Jhon Doe',
    phone: '123456789'
  },
  {
    id: 2,
    name: 'Jane Doe',
    phone: '789456123'
  }
]

  getUsers() {
    return this.users;
  }

  createUser(user: CreateUserDto) {

    return {
      ...user,
      id: crypto.randomUUID()
    }
  }
}
