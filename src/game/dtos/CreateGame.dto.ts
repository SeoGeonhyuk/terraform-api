import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateGameDto {
    @IsString()
    @IsNotEmpty()
    gameName: string;

    @IsNumber()
    @IsNotEmpty()
    starPoint: number;

    @IsNumber()
    @IsNotEmpty()
    playerNum: number;
}