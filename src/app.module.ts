import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { GameModule } from './game/game.module';
import { PrismaClient } from '@prisma/client';

@Global()
@Module({
  imports: [AuthModule, GameModule],
  controllers: [AppController],
  providers: [AppService, PrismaClient],
  exports: [PrismaClient],
})
export class AppModule {}
