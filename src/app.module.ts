import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerModule } from './logger.module';

@Module({
  imports: [CqrsModule.forRoot(), CatsModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
