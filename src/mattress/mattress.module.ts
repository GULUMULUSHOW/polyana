import { Module } from '@nestjs/common';
import { MattressService } from './mattress.service';
import { MattressController } from './mattress.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [MattressService, PrismaService],
  controllers: [MattressController]
})
export class MattressModule {}
