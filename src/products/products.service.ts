import { Injectable } from '@nestjs/common';
import { Producto } from 'src/entitys/products.entity';
import { ProdDto } from './dto/products.dto';
import { ProductsController } from './products.controller';



@Injectable()
export class ProductsService {
    /*productos: ProdDto[]=[];

    getProductos():ProdDto[]{
        return this.productos;
    }

    guardarProducto(prod:ProdDto):ProdDto{
        let newProd = {
            id:prod.id,
            nombre: prod.nombre,
            descripcion: prod.descripcion,
            precio: prod.precio
        };
        this.productos.push(newProd);
        return newProd;
    }*/

    constructor(
        @Injectable(Producto)
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
    async ActualizarProducto(id:number, data:Partial<ProdDto>){
        await this.prodRepositorio.update({ id },data);
        return await this.prodRepositorio.findOne({ id });
    }

    //ELIMINAR PRODUCTO
    async EliminarProducto(id:number){
        await this.prodRepositorio.delete({ id });
        return {deleted: true};
    }

}
