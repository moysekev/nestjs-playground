// logger.service.ts
import { Injectable } from '@nestjs/common';
import pino from 'pino';
import * as fs from 'fs';

@Injectable()
export class LoggerService {
  private readonly stream = fs.createWriteStream('combined.json', {
    flags: 'a',
  });
  public readonly logger = pino(
    {
      level: 'debug',
    },
    this.stream,
  );
}
