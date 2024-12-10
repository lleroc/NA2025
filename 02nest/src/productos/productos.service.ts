import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class ProductosService {
  private productos: Producto[] = [];

  create(createProductoDto: CreateProductoDto) {
    const { nombre, descripcion, precio } = createProductoDto;

    const nuevoproducto = new Producto(uuidv4(), nombre, descripcion, precio);

    this.productos.push(nuevoproducto);
    return this.productos;
  }

  findAll() {
    return `This action returns all productos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
