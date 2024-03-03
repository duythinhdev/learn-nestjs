import { Module } from '@nestjs/common';
import { UserController } from 'src/users/users.controller';
import { UserService } from './user.service';

@Module({
    controllers: [UserController],
    // cách import provider 1
    // providers: [UserService]
    // cách import provider 2
    providers: [{
        provide: 'USER_SERVICE',
        useClass: UserService
    }]
})

export class UsersModule {}