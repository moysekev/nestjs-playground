import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';
import { LoggerService } from 'src/logger.service';
import { WebhooksService } from 'src/webhooks.service';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  constructor(
    private readonly logger: LoggerService,
    private readonly eventService: WebhooksService,
  ) { }

  create(createCatDto: CreateCatDto) {
    this.cats.push(createCatDto);
    this.logger.logger.debug(
      {
        origin: CatsService.name,
        action: 'create',
        entity: {
          type: Cat.name,
          id: 'a-cat-id',
          ...createCatDto,
        },
        user: {
          id: 'a-user-id',
          username: 'username',
        },
      },
      'Cat creation',
    );

    this.eventService.trackEvent('model.interaction.created', 'customer-01', {
      id: 'a-user-id',
      type: 'model.interaction.created',
      data: {
        interactionId: 'an-interaction-id',
        foo: "bar"
      },
    });

    return `This action adds a new cat ${createCatDto.name}`;
  }

  async findAll(): Promise<Cat[]> {
    //return [`This action returns all cats`];
    return this.cats;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    this.logger.logger.debug(
      {
        origin: CatsService.name,
        action: 'update',
        entity: {
          type: Cat.name,
          id: 'a-cat-id',
          ...updateCatDto,
        },
        user: {
          id: 'a-user-id',
          username: 'username',
        },
      },
      'Cat creation',
    );
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
