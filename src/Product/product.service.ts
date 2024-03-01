import { InjectRepository } from "@nestjs/typeorm";
import { Injectable, HttpException } from "@nestjs/common";
import { Repository } from "typeorm";
import { productEntity } from "src/Entity/product.entity";


@Injectable()
export class ProductService {
    [x: string]: any;
    // [x: string]: any;
    constructor(
        @InjectRepository(productEntity)
        private ProductRepository: Repository<productEntity>,
    ){}

    //Add product
    async addProduct(payload){
        const add = this.ProductRepository.create(payload);
        return this.ProductRepository.save(add);
    }

    //get product by name
    async getOneByName(name :string): Promise<productEntity> {
        const find = await this.ProductRepository.findOne({ where: {name: name},});

    //error handling
    if (!find) {
        //this Error will be thrown if no such product name is not found in our database
        throw new HttpException('Product not found', 404); // it will be a  404 eroor, meaning not found
    }
    return find;
    }

    // get one product by ID
    async getOneById(id :number): Promise<productEntity> {
        const find = await this.ProductRepository.findOne({ where: { id },});
    //error handling
    if (!find) {
        //this Error will be thrown if no such product id is not found in our database
        throw new HttpException('Product not found', 404); // it will be a  404 eroor, meaning not found
    }
    return find;
}

//Delete by id
async deleteById(id: number) {
    const find = await this.ProductRepository.findOne({ where: { id },});
//error handling
if(!find) {
    //this Error will be thrown if no such product id is not found in our database
    throw new HttpException('Product not found', 404); // it will be a  404 eroor, meaning not found
}
await this.ProductRepository.delete(id);
return {
    statusCode: 200,
    message: 'Product deleted successfully',
};
}

//Delete Product by name
async deleteProductByName(name :string) :Promise<void> {
    const find = await this.ProductRepository.delete({ name });
    // if (result.affected === 0) {
    //     throw new HttpException('Product not found', 404); // it will be a  404 eroor, meaning not found
    // }
}

// find all products 
async findAll() {
    return await this.ProductRepository.find()
}

//Update product by name
async updateProductByName(
    name: string,
    payload: Partial<productEntity>,
): Promise<productEntity> {
    const product = await this.ProductRepository.findOne({ where: { name } });
    if (!product) {
        throw new HttpException('Product not found', 404); // it will be a  404 eroor, meaning not found
    }
//Merge the payload into the existing product entity
Object.assign(product, payload);
return this.ProductRepository.save(productEntity);
}

async updateProduct(id, Payload) {
    const update = this.ProductRepository.findOne({where: { id }});
    if (!update) {
        throw new  HttpException('Product not found', 404);
    }

    const updateProduct = await this.ProductRepository.update(id, Payload);
    return{
        statusCode:201,
        message: 'Product update succesfully',
        data: updateProduct,
    }
    }
}

