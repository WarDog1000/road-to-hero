import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @Get('/get')
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post('/create')
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user)
  }
}
