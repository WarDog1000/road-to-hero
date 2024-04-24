import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {

//   private users = [{
//     id: 1,
//     name: 'Jhon Doe',
//     phone: '123456789'
//   },
//   {
//     id: 2,
//     name: 'Jane Doe',
//     phone: '789456123'
//   }
// ]

  constructor(private prisma: PrismaService) {}

  getUsers() {

    // return this.users;

    return this.prisma.users.findMany()

  }

  createUser(user: CreateUserDto) {

    // return {
    //   ...user,
    //   id: crypto.randomUUID()
    // }

    return this.prisma.users.create({data: {...user, id: crypto.randomUUID()}})
  }
}
