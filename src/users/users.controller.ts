import { Body, Controller, Get, Inject, Param, Post} from '@nestjs/common';
import { UserDto } from '../user.dto';
// import { ModuleRef } from '@nestjs/core';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    // cách 1 moi từ container ra
    // constructor(private moduleRef: ModuleRef) {
        // this.userService = new UserService();
    // }
    // cách 2 moi từ container ra
    // constructor(private readonly userService: UserService) {
    // }
    // cách 3
    constructor(@Inject('USER_SERVICE') private readonly userService: UserService) {
    }
    @Post()
    createUser(@Body() user: UserDto): UserDto {
        // cách import từ provider
        // return this.moduleRef.get('USER_SERVICE').createUser(user);
        return this.userService.createUser(user);
    }
    @Get(':id')
    getUserById(@Param('id') id: number){
        console.log(id)
        return 'test';
    }

}
