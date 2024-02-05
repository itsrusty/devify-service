import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserSchema } from './entities/user.entitie';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';

@Injectable()
export class DevifyService {
    // private readonly httpService: HttpService
  constructor(
    @InjectModel(UserSchema.name)
    private readonly dataModel: Model<UserSchema>,
  ) {}

  searchUserByUsername(username: string) {
    const searchUser = `https://api.github.com/users/${username}`;

    return searchUser;
  }

  async createUser(userDto: any) {
    const submit = await this.dataModel.create(userDto);

    return submit;
  }

  async getAllData() {
    const getData = await this.dataModel.find();

    return getData;
  }
}
