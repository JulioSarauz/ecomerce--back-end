import { Injectable } from '@nestjs/common';
import { ProdDto } from './dto/products.dto';
import { ProductsController } from './products.controller';

@Injectable()
export class ProductsService {
    productos: ProdDto[]=[];

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
    }

}
