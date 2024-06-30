import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { AuthDto } from './dtos/Auth.dto';
import { PrismaClient } from '@prisma/client';
import { Request } from 'express';

@Injectable()
export class AuthService {
    constructor(private readonly prismaClient: PrismaClient){}
    async createUser(authDto: AuthDto) {
        const userId = await this.prismaClient.user.findUnique({
            select: {
                userId: true
            },
            where: {
                userId: authDto.userId
            },
        });
        if(userId !== null){
            throw new ConflictException()
        }
        else{
            try{
                const user = await this.prismaClient.user.create({
                    data: {
                        userId: authDto.userId,
                        password: authDto.password
                    }
                });
                return user;
            }
            catch{
                throw new InternalServerErrorException();
            }

        }
    }

    async login(authDto: AuthDto) {
        try{
            const user = await this.prismaClient.user.findUnique({
                select: {
                    userId: true,
                    password: false,
                },
                where: {
                    userId: authDto.userId,
                    password: authDto.password
                },
            });
            if(user === null){
                return false;
            }
            else{
                return true;
            }
        }
        catch{
            throw new InternalServerErrorException();
        }
    }
}
