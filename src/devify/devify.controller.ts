import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DevifyService } from './devify.service';
import { UserDto } from './dto/user.dto';

@Controller('api/v1/')
export class DevifyController {
  constructor(private readonly devifyService: DevifyService) {}

  @Get('search/:username')
  searchUser(@Param('username') username: string) {
    return this.devifyService.searchUserByUsername(username);
  }

  @Post()
  createUser(@Body() createUser: UserDto) {
    return this.devifyService.createUser(createUser);
  }

  @Get('users')
  getUsers() {
    return this.devifyService.getAllData();
  }
}
