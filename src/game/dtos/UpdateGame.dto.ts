import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateGameDto {
    @IsNotEmpty()
    @IsString()
    gameName: string;
    @IsNumber()
    starPoint?: number;
    @IsNumber()
    playerNum?: number;
}