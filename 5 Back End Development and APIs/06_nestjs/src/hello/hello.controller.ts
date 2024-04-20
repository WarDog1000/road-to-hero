import { Controller, Get, Req, Res, NotFoundException } from '@nestjs/common';
import { Request, Response } from 'express'
import { NotFoundError } from 'rxjs';

@Controller('/hello')
export class HelloController {

  @Get('/')
  index(@Req() req: Request, @Res() res: Response) {

    /***
     * Http Request
     * GET http://localhsot:3000/hello
     */

    res.status(200).json({
      message: 'Hello Worlds!'
    })
  }

  @Get('/error')
  launchError() {
    const error = true;

    if(error) return new NotFoundException('La tarea no fue encontrada') 
  }
}
