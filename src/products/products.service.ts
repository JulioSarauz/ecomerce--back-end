import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from 'src/entitys/products.entity';
import { Repository } from 'typeorm';
import { ProdDto } from './dto/products.dto';
import { ProductsController } from './products.controller';



@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Producto)
        private prodRepositorio: Repository<Producto>,
    ){}

    //RETORNAR TODOS LOS PRODUCTOS
    async verTodosProductos(){
        return await this.prodRepositorio.find();
    }

    //INGRESAR PRODUCTO
    async crearProducto(data:ProdDto){
        const user = this.prodRepositorio.create(data);
        await this.prodRepositorio.save(data);
        return user;
    }

    //ACTUALIZAR PRODUCTO
    async ActualizarProducto(id_producto:number, data:Partial<ProdDto>){
        await this.prodRepositorio.update({ id_producto },data);
        return await this.prodRepositorio.findOne({ id_producto });
    }

    //ELIMINAR PRODUCTO
    async EliminarProducto(id_producto:number){
        await this.prodRepositorio.delete({ id_producto });
        return {deleted: true};
    }

}
