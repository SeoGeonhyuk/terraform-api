import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [PrismaClient],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
