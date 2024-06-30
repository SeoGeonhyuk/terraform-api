import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { UpdateGameDto } from './dtos/UpdateGame.dto';
import { CreateGameDto } from './dtos/CreateGame.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class GameService {
    constructor(private readonly prismaClient: PrismaClient) { }
    async removeGameInfo(gameName: string) {
        let game = null;
        try {
            game = await this.prismaClient.game.delete({
                where: {
                    gameName: gameName
                }
            });
        }
        catch {
            throw new InternalServerErrorException();
        }
        if (game === null) {
            throw new NotFoundException();
        }
        else {
            return game;
        }
    }

    async createGameInfo(createGameDto: CreateGameDto) {
        let game = null;
        try {
            game = await this.prismaClient.game.findUnique({
                where: {
                    gameName: createGameDto.gameName
                }
            });
        }
        catch {
            throw new InternalServerErrorException();
        }
        if (game !== null) {
            throw new ConflictException();
        }
        else {
            try {
                game = await this.prismaClient.game.create({
                    data: {
                        gameName: createGameDto.gameName,
                        starPoint: createGameDto.starPoint,
                        playerNum: createGameDto.playerNum
                    }
                });

                return game;
            }
            catch {
                throw new InternalServerErrorException();
            }
        }
    }



    async getGameInfo(gameName: string) {
        let game = null;
        try {
            game = await this.prismaClient.game.findUnique({
                where: {
                    gameName: gameName
                }
            });
        }
        catch {
            throw new InternalServerErrorException();
        }
        if (game !== null) {
            return game;
        }
        else {
            throw new NotFoundException();
        }
    }

    async updateGameInfo(updateGameDto: UpdateGameDto) {
        let game = null;
        try {
            game = await this.prismaClient.game.update({
                data: {
                    starPoint: updateGameDto.starPoint,
                    playerNum: updateGameDto.playerNum,
                },
                where: {
                    gameName: updateGameDto.gameName
                }
            });
        }
        catch {
            throw new InternalServerErrorException();
        }
        if (game !== null) {
            return game;
        }
        else {
            throw new NotFoundException();
        }
    }
}
