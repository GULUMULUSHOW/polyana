import { Module } from '@nestjs/common';
import { BreakfastService } from './breakfast.service';
import { BreakfastController } from './breakfast.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [BreakfastService, PrismaService],
  controllers: [BreakfastController]
})
export class BreakfastModule {}
