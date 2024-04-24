import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TaskModule  } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';
import { PaymentsModule } from './payments/payments.module';
import { ChatModule } from './chat/chat.module';


@Module({
  imports: [TaskModule, ProjectsModule, AuthModule, UsersModule, PaymentsModule, ChatModule, ConfigModule.forRoot()],
  controllers: [HelloController],
})

export class AppModule {}
