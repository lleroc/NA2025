import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PaginationDto } from 'src/common';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<{
        name: string;
        price: number;
        disponible: boolean;
        createAt: Date;
        updateAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            name: string;
            price: number;
            disponible: boolean;
            createAt: Date;
            updateAt: Date;
            id: number;
        }[];
        meta: {
            total: number;
            page: number;
            lastpage: number;
        };
    }>;
    findOne(id: number): Promise<{
        name: string;
        price: number;
        disponible: boolean;
        createAt: Date;
        updateAt: Date;
        id: number;
    }>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
        name: string;
        price: number;
        disponible: boolean;
        createAt: Date;
        updateAt: Date;
        id: number;
    }>;
    remove(id: string): Promise<{
        name: string;
        price: number;
        disponible: boolean;
        createAt: Date;
        updateAt: Date;
        id: number;
    }>;
}
