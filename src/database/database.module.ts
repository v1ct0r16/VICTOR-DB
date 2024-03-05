import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { productEntity } from 'src/Entity/product.entity';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
          useFactory: (configService: ConfigService) => ({
            type: 'mysql',
            host: configService.getOrThrow('DB_HOST'),
            port: configService.getOrThrow('DB_PORT'),
            username: configService.getOrThrow('DB_USER'),
            password: configService.getOrThrow('DB_PASSWORD'),
            database: configService.getOrThrow('DB_DATABASE'),
            entities: [productEntity],
            synchronize: configService.getOrThrow('DB_SYNC'),
          }),
         inject: [ConfigService]
        }),

        
      ]

    
})
export class DatabaseModule {}
