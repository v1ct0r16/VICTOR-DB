import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ProductDto } from 'src/dto/product.dto';


@Controller('victor')
export class VictorController {
  VictorService: any;

  @Post('add')
  async createProduct(@Body() payload: ProductDto) {
    return await this.VictorService.addProduct(payload)
  }
  @Get(':id')
  async findOneById(@Param('id') id:string) {return await this.VictorService.findOneByName(name)
  }
  
  @Get()
  async findAllProduct(){
    return await this.VictorService.findAll()
  }
}



