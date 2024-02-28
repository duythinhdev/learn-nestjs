import { Module } from '@nestjs/common';
import { UserController } from 'src/users/users.controller';

@Module({controllers: [UserController]},)

export class UsersModule {}