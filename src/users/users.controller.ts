import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from '../user.dto';

@Controller('users')
export class UserController {
    constructor() {}

    @Post()
    createUser(@Body() user: UserDto): UserDto {
        return { username: 'test', password: 'test'};
    }
    @Get(':id')
    getUserById(@Param('id') id: number){
        console.log(id)
        return 'test';
    }

}
