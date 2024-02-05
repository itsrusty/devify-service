import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DevifyService } from './devify.service';
import { UserDto } from './dto/user.dto';

@Controller('api/v1/')
export class DevifyController {
  constructor(private readonly devifyService: DevifyService) {}

  @Post()
  getUsers(@Body() createUser: UserDto) {
    return this.devifyService.searchUser(createUser);
  }

  @Get('users')
  get() {
    return this.devifyService.getData();
  }
}
