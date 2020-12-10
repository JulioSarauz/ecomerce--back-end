import { Controller, Get, Post, Body, Param, Delete, Put, HttpStatus, Patch, Query} from '@nestjs/common';
import { TarjetaService } from './tarjeta.service';
import { TarjetaDto } from './dto/tarjeta.dto';
import { Tarjeta } from '../entitys/tarjeta.entity';

@Controller('tarjeta')
export class TarjetaController {
    constructor(private service:TarjetaService){}

    @Get()
    async getTodo(
        @Query('id')id:number
    ){
        console.log(id);
        
        return{
            statusCode: HttpStatus.OK,
            data: await this.service.verTodo(id),
        }
    }

  

    @Post()
    async create(@Body() datosFactura:{
        datosTarjeta: Tarjeta,
        idUsuario:number
        }
        ) { 
            console.log(datosFactura);
            

            return {
                statusCode: HttpStatus.OK,
                message: 'Creado',
                data: await this.service.crear(datosFactura.datosTarjeta, datosFactura.idUsuario),
            };
    }




    @Patch(':id')
    async actualizar(@Param('id') id: number, @Body() data: Partial<TarjetaDto>) {

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
 