import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PaginationDto } from 'src/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  //@Post() //insertar en la base de datos sqlite    //       API  REST FULL
  @MessagePattern({ cmd: 'create_product' })
  //create(@Body() createProductDto: CreateProductDto) {
  create(@Payload() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  //@Get()
  @MessagePattern({ cmd: 'find_all' })
  findAll(@Payload() paginationDto: PaginationDto) {
    return this.productsService.findAll(paginationDto);
  }

  //@Get(':id')
  @MessagePattern({ cmd: 'find_one' })
  findOne(@Payload('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(+id);
  }

  //@Patch(':id')
  @MessagePattern({ cmd: 'update_product' })
  update(
    //@Param('id') id: string,
    //@Body() updateProductDto: UpdateProductDto
    @Payload() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(updateProductDto.id, updateProductDto);
  }

  //@Delete(':id')
  @MessagePattern({ cmd: 'delete_product' })
  remove(@Payload('id', ParseIntPipe) id: string) {
    return this.productsService.remove(+id);
  }
}

/**
 * 1.- Venta del Sistema (codigo fuente - modificacion de codigo - venta del sistema)
 * 2.- Venta del Sistema (codigo fuente - modificacion de codigo - no para venta)
 * 3.- Venta del Sistema (codigo fuente - no modificacion de codigo)
 * 4.- Venta del Sistema
 * 5.- Venta del Sistema (ciertas necesidades de la empresa)
 * 6.- API REST FULL (visita - tiempo de trabajo del server)
 */
