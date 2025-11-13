import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerModule } from './logger.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(
    {
      isGlobal: true, // ✅ Makes ConfigService available everywhere
    }
  ), CqrsModule.forRoot(), CatsModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
