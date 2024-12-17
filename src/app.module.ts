import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerModule } from './logger.module';

@Module({
  imports: [CatsModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
