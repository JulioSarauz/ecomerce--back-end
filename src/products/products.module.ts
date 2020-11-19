import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from 'src/entitys/products.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({

    imports: [TypeOrmModule.forFeature([Producto])],
    controllers: [ProductsController],
    providers: [ProductsService],//servicios,
    exports:[]

})
export class ProductsModule {
    
}
