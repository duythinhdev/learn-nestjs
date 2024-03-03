import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from '../user.dto';

@Controller('users')
export class UserController {
    constructor() {}

    @Post()
    createUser(@Body() user: UserDto): UserDto {
        user.createAt = new Date();
        user.id = 1;
        user.updatedAt = new Date();
        console.log('user',user);
        return UserDto.plainToClass(user);
    }
    @Get(':id')
    getUserById(@Param('id') id: number){
        console.log(id)
        return 'test';
    }

}
