import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { product } from 'src/Entity/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository} from 'typeorm';


@Injectable()
export class VictorService {
    constructor(@InjectRepository(product)private productRepository: Repository<product>){}

    async addProduct(payload) {
        const addProduct = await this.productRepository.create(payload)
        return this.productRepository.save(addProduct)
    }

    async findOneById(id: number) {
        const find = await this.productRepository.findOne({where: {id: id}})

        if(!find){
            throw new Error('Sorry, no product found')
        }

        return find

    }
}
