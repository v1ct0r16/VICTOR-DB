import { Module } from '@nestjs/common';
import { VictorService } from './victor.service';
import { VictorController } from './victor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { product } from '../Entity/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([product])],
  providers: [VictorService],
  controllers: [VictorController]
})
export class VictorModule {}
