import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [PrismaClient],
  providers: [GameService],
  controllers: [GameController]
})
export class GameModule {}
