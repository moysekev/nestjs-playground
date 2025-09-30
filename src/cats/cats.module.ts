import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { WebhooksService } from 'src/webhooks.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService, WebhooksService],
})
export class CatsModule { }
