import { Module } from '@nestjs/common';
import { DevifyModule } from './devify/devify.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [DevifyModule, MongooseModule.forRoot(process.env.URI_DB)],
  controllers: [],
  providers: [],
})
export class AppModule {}
