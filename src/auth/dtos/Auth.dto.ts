import { IsNotEmpty, IsString, MaxLength, MinLength, minLength } from "class-validator";

export class AuthDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(14)
    userId: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(14)
    password: string;
}