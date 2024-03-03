import { UserDto } from '../user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    createUser(user: any): any{
        user.createAt = new Date();
        user.id = 1;
        user.updatedAt = new Date();
        console.log('user',user);
        return UserDto.plainToClass(user);
    }
}