import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { productEntity } from 'src/Entity/product.entity';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
          useFactory: (configService: ConfigService) => ({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'crud',
            entities: [productEntity],
            synchronize: true,
          }),
          
         inject: [ConfigService]
        }),
      ]
})
export class DatabaseModule {}
