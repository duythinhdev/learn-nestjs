import { IsNotEmpty, Length } from "class-validator";

export class UserDto {
    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    @Length(10,20)
    password: string
}