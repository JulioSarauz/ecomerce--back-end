import { Controller, Get, Post, Body, Param, Delete, Put, HttpStatus, Patch} from '@nestjs/common';
import { validate } from 'class-validator';
import { ProdDto } from './dto/products.dto'
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private prodservice:ProductsService){}

    @Get()
    async getProducts(){
        return {
            statusCode: HttpStatus.OK,
            data: await this.prodservice.verTodosProductos(),
        };
    }



    @Post()
    async create(@Body() prodDto: ProdDto) { 
        const prod = new ProdDto();
        prod.nombre=prodDto.nombre;
        prod.descripcion=prodDto.descripcion;
        const errores = await validate(prod);
        if(errores.length === 0){
            return {
                statusCode: HttpStatus.OK,
                message: 'Producto Creado',
                data: await this.prodservice.crearProducto(prodDto),
            };
        }else{
            return {error:'No se pudo guardar'};
        }
           
        
        
    }




    @Patch(':id')
    async actualizarProducto(@Param('id') id: number, @Body() data: Partial<ProdDto>) {

        return {
            statusCode: HttpStatus.OK,
            message: 'Producto Actualizado',
            date: await this.prodservice.ActualizarProducto(id,data),

        };
    }

    @Delete(':id')
    async eliminarProducto(@Param('id') id: number){
        await this.prodservice.EliminarProducto(id);
        return {
            statusCode: HttpStatus.OK,
            message: 'El producto fue eliminado '
        }
    }
}
