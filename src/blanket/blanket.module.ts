import { Module } from '@nestjs/common';
import { BlanketService } from './blanket.service';
import { BlanketController } from './blanket.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [BlanketService, PrismaService],
  controllers: [BlanketController]
})
export class BlanketModule {}
