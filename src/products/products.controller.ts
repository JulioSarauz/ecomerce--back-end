import { Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import { validate } from 'class-validator';
import { ProdDto } from './dto/products.dto'
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private prodservice:ProductsService){}

    @Get()
    getProducts(){
        return this.prodservice.getProductos();
    }
    @Post()
    async create(@Body() prodDto: ProdDto) { 
        const prod = new ProdDto();
        prod.nombre=prodDto.nombre;
        prod.descripcion=prodDto.descripcion;
        const errores = await validate(prod);
        if(errores.length === 0)
         this.prodservice.guardarProducto(prodDto);


        return prodDto;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `we get the dog with the id ${id}`;
    }

    @Put(':id')
    update(@Param('id') id: string) {
        return `we update the dog with the id ${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `we delete the dog with the id ${id}`;
    }
}
