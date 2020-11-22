import { Controller, Get, Post, Body, Param, Delete, Put, HttpStatus, Patch} from '@nestjs/common';
import { DetalleFacturaService } from './detalle-factura.service';
import { DetalleFacturaDto } from './dto/detalle-factura.dto';

@Controller('detalle-factura')
export class DetalleFacturaController {
    constructor(private service:DetalleFacturaService){}

    @Get()
    async getTodo(){
        return{
            statusCode: HttpStatus.OK,
            data: await this.service.verTodo(),
        }
    }

    @Get(':id')
    async buscar(@Param('id') id: number){
        let user =  this.service.buscar(id);
        return user;
    }


    @Post()
    async create(@Body() detallefacturaDto: DetalleFacturaDto) { 
            return {
                statusCode: HttpStatus.OK,
                message: 'Creado',
                data: await this.service.crear(detallefacturaDto),
            };
    }




    @Patch(':id')
    async actualizar(@Param('id') id: number, @Body() data: Partial<DetalleFacturaDto>) {

        return {
            statusCode: HttpStatus.OK,
            message: 'Actualizado',
            date: await this.service.Actualizar(id,data),

        };
    }

    @Delete(':id')
    async eliminar(@Param('id') id: number){
        await this.service.Eliminar(id);
        return {
            statusCode: HttpStatus.OK,
            message: 'Eliminado '
        }
    }

}
