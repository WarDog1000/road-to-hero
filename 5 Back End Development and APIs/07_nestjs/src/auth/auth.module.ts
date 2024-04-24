import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { SignerMiddleware } from './signer/signer.middleware';

@Module({
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule implements NestModule {

  configure(consumer: MiddlewareConsumer) { // permite utilizar el logger/middleware

    // consumer.apply(LoggerMiddleware).forRoutes('auth')
    
    consumer.apply(LoggerMiddleware).forRoutes(
      {path: 'auth/login', method: RequestMethod.GET},
      {path: 'auth/login', method: RequestMethod.POST}
    )
    .apply(SignerMiddleware).forRoutes('auth/signin')

  }

}
