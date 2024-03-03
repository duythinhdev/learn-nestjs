import { IsNotEmpty, Length } from 'class-validator';
import { Expose, Transform} from 'class-transformer';
import { BaseDto } from './common/base.dto';

export class UserDto extends BaseDto {
    @IsNotEmpty()
    @Expose()
    username: string;

    firstName: string;

    lastName: string;

    @Transform(({obj}) => obj?.firstName + ' ' + obj?.lastName)

    @Expose()
    fullName: string;

    @IsNotEmpty()
    @Expose()
    @Length(10,20)
    password: string;
}