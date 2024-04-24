import { Controller, Get, Req, Res, Query, NotFoundException, HttpCode, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express'
import { ValidateQueryPipe } from './pipes/validate-query/validate-query.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

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
  @HttpCode(404)
  launchError() {
    const error = true;

    if(error) return new NotFoundException('La tarea no fue encontrada') 
  }

  @Get('/404')
  @HttpCode(404)
  notFoundPage() {
    return 'Se lanzo un nuevo error'
  }

  @Get('ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    return num + 14;
  }

  @Get('/greet')
  greet(@Query(ValidateQueryPipe) query: {name: string, description: string, age: number}) {
    return `Hello ${query.name}, ${query.description}, tienes ${query.age} años apartir de ahora`
  }

  @Get('/guards')
  @UseGuards(AuthGuard)
  privateAccessRoute() {
    return 'Acceso a la ruta protegida'
  }
}
