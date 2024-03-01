import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { productEntity } from 'src/Entity/product.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '',
          database: 'victor',
          entities: [productEntity],
          synchronize: true,
        }),
      ]
})
export class DatabaseModule {}
