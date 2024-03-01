import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { productEntity } from './Entity/product.entity';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './Product/product.module';
// import {}


@Module({
  imports: [DatabaseModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

