import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

  @Post('/login')
  getLogin() {

  }

  @Post('/signin')
  goSigning() {

  }

}
