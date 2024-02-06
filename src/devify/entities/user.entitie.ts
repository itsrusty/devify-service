import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserSchema extends Document {
  @Prop({
    unique: false,
    index: true,
  })
  username: string;

  @Prop({
    unique: true,
    index: true,
  })
  userID: string;
}

export const userSchema = SchemaFactory.createForClass(UserSchema);
