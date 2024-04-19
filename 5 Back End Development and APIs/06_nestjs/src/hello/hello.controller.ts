import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {

  @Get('/')
  index() {

    /***
     * Http Request
     * GET http://localhsot:3000/hello
     */

    return 'Binevenido a la apgina principal del servidor'
  }
}
