import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BreakfastModule } from './breakfast/breakfast.module';
import { MattressModule } from './mattress/mattress.module';
import { BlanketModule } from './blanket/blanket.module';

@Module({
  imports: [BreakfastModule, MattressModule, BlanketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
