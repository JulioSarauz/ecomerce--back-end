import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({

    imports: [TypeOrmModule.forFeature([],'default')],
    controllers: [ProductsController],
    providers: [ProductsService],//servicios,
    exports:[]

})
export class ProductsModule {
    
}
