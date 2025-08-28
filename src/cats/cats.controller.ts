import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Headers,
  // Logger,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';
import { LoggerService } from 'src/logger.service';

@Controller('cats')
export class CatsController {
  //private readonly logger = new Logger(CatsController.name);

  constructor(
    private readonly catsService: CatsService,
    private readonly logger: LoggerService,
  ) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  findAll(@Req() request: Request, @Headers() headers: any): Promise<Cat[]> {
    // console.log(request.headers);
    //this.logger.log('findAll headers', request.headers, headers);
    this.logger.logger.debug(
      {
        origin: CatsController.name,
        action: 'read',
        user: {
          id: 'a-user-id',
          username: 'username',
        },
        headers,
      },
      'received headers %o',
      // request.headers,
      headers,
    );
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
