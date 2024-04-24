import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @ApiTags('users')
  @ApiOperation({summary: 'Get all users'})
  @ApiResponse({status: 200, description: 'return all users'})
  @ApiResponse({status: 403, description: 'Forbiden'})
  @Get('/get')
  getUsers() {
    return this.usersService.getUsers();
  }
  
  @ApiTags('users')
  @Post('/create')
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user)
  }
}
