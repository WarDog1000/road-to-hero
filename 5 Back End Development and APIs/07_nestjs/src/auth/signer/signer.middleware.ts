import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class SignerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {

    const { authorization } = req.headers;

    if(!authorization) throw new HttpException('UNAUTHORIZAED', HttpStatus.UNAUTHORIZED)

    if(authorization !== 'Bearer 123') throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN)
    
    next();
  }
}
