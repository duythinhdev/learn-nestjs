import { Controller, Get,Post } from '@nestjs/common';

@Controller('users')
export class UserController {
    constructor() {}

    @Get()
    getAllUsers(): Array<any> {
        return [{name: 'giang', age: 18}, {name: 'binh', age: 18}];
    }
    @Post()
    createUser() {
        return {name: 'giang', age: 18};
    }

}
