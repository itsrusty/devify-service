import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserSchema } from './entities/user.entitie';
import { Model } from 'mongoose';

@Injectable()
export class DevifyService {
  constructor(
    @InjectModel(UserSchema.name)
    private readonly dataModel: Model<UserSchema>,
  ) {}

  async searchUser(userDto: any) {
    // let api = ""
    const submit = await this.dataModel.create(userDto);

    return submit;
  }

  async getData(){
    const getData = await this.dataModel.find()

    return getData
  }
}
