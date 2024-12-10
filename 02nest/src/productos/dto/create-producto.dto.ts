import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductoDto {
  nombre: string;

  descripcion?: string;

  precio: number;
}
