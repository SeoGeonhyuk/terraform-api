import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dtos/CreateGame.dto';
import { UpdateGameDto } from './dtos/UpdateGame.dto';
import { throwErrorHttp } from 'src/utils/http.error';
import { AuthGuard } from 'src/auth/auth.guard';
import { Request } from 'express';

@Controller('game')
export class GameController {
    constructor(private readonly gameService: GameService){}

    @HttpCode(201)
    @Post()
    @UseGuards(AuthGuard)
    async createGame(@Body() createGameDto: CreateGameDto, @Req() req: Request){
        try{
            return await this.gameService.createGameInfo(createGameDto);
        }
        catch(error){
            throwErrorHttp(error);
        }
    }

    @UseGuards(AuthGuard)
    @Get('/:gameName')
    async getGame(@Param('gameName') gameName: string, @Req() req: Request){
        try{

            return await this.gameService.getGameInfo(gameName);
        }
        catch(error){
            throwErrorHttp(error);
        }
    }

    @UseGuards(AuthGuard)
    @Patch()
    async updateGame(@Body() updateGameDto: UpdateGameDto, @Req() req: Request){
        try{
            return await this.gameService.updateGameInfo(updateGameDto);
        }
        catch(error){
            throwErrorHttp(error);
        }
    }

    @UseGuards(AuthGuard)
    @Delete('/:gameName')
    async deleteGame(@Param('gameName') gameName: string, @Req() req: Request){
        try{
            return await this.gameService.removeGameInfo(gameName);
        }
        catch(error){
            throwErrorHttp(error);
        }
    }
}


// {
//     "gameName": "metal",
//     "starPoint": "4.5",
//     "playerNum": "3"
// }