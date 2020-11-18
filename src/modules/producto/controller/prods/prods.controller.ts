import { Body, Controller, Post,Get,Put,Delete, Param } from '@nestjs/common';
import { ProdsService } from '../../prods/prods.service';
import { ProductoModule } from '../../producto.module';

@Controller('prods')
export class ProdsController {
    constructor(private ProdsService:ProdsService){
    }
    
    @Post()
    addProduct(@Body() ProductoModule:ProductoModule):any{
        return this.ProdsService.saveProduct(ProductoModule);
    }

    @Get()
    getProduct():any{
        return this.ProdsService.findAll();
    }

    @Get(':id')
    getOneProduct(@Param() params):any{
        return this.ProdsService.findOnProduct(params.id);
    }

    @Put(':id')
    updateProduct(@Body() ProductoModule: ProductoModule, @Param() params):any{
        return this.ProdsService.updateProduct(params.id,ProductoModule)
    }

    @Delete(':id')
    deleteProduct(@Param() params):any{
        return this.ProdsService.deleteProduct(params.id);
    }
}
