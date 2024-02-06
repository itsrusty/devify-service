import {
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
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

  async searchUserByUsername(username: UserDto) {
    try {
      const searchUser = await fetch(
        `https://api.github.com/users/${username}`,
      );

      const response = await searchUser.json();

      let { message } = response;

      if (message == 'Not Found') {
        return {
          errorResponse: 'user is not found',
          statusCode: 404,
        };
      }

      return response;
    } catch (error) {
      throw new InternalServerErrorException('error internal');
    }
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
