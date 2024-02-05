import { Module } from '@nestjs/common';
import { DevifyController } from './devify.controller';
import { DevifyService } from './devify.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, userSchema } from './entities/user.entitie';

@Module({
  controllers: [DevifyController],
  providers: [DevifyService],
  imports: [
    MongooseModule.forFeature([
      {
        name: UserSchema.name,
        schema: userSchema,
      },
    ]),
  ],
})
export class DevifyModule {}
