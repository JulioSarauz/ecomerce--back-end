import { Controller, Get, Post, Body, Param, Delete, Put, HttpStatus, Patch} from '@nestjs/common';
import { PagoService } from './pago.service';
import { PagoDto } from './dto/pago.dto';


@Controller('pago')
export class PagoController {
    constructor(private service:PagoService){}

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
    async create(@Body() data: PagoDto) { 
            return {
                statusCode: HttpStatus.OK,
                message: 'Creado',
                data: await this.service.crear(data),
            };
    }




    @Patch(':id')
    async actualizar(@Param('id') id: number, @Body() data: Partial<PagoDto>) {

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
 