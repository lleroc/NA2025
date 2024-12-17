import {
  Injectable,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaClient } from '@prisma/client';
import { PaginationDto } from 'src/common';
@Injectable()
export class ProductsService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('ProductsService');

  async onModuleInit() {
    await this.$connect();
    this.logger.log('Database Conect');
  }
  create(createProductDto: CreateProductDto) {
    return this.product.create({
      data: createProductDto,
    });
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;

    const totalpages = await this.product.count({
      where: { disponible: true },
    });
    const lastpage = Math.ceil(totalpages / limit);
    return {
      data: await this.product.findMany({
        skip: (page - 1) * limit,
        take: limit,
        where: {
          disponible: true,
        },
      }),
      meta: {
        total: totalpages,
        page: page,
        lastpage: lastpage,
      },
    };
  }

  async findOne(id: number) {
    const product = await this.product.findFirst({
      where: { id, disponible: true },
    });

    if (!product) {
      throw new NotFoundException(
        `No se encontro el producto con el ID #${id}`,
      );
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.findOne(id);
    return this.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    /* return this.product.delete({
      where: { id },
    });
  }*/

    const product = await this.product.update({
      where: { id },
      data: {
        disponible: false,
      },
    });

    return product;
  }
}
