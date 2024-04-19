import { Injectable } from '@nestjs/common';

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
}
