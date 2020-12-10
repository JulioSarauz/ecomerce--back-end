import { Controller, Get, Post, Body, Param, Delete, Put, HttpStatus, Patch, Query} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { clienteDto } from './dto/cliente.dto';
import { Cliente } from '../entitys/cliente.entity';


@Controller('cliente')
export class ClienteController {

    constructor(private clienteservice:ClienteService){}

    @Get()
    async getUsuarios(){
        return{
            statusCode: HttpStatus.OK,
            data: await this.clienteservice.verTodosClientes(),
        }
    }

    @Get(':id')
    async buscarUsuario(@Param('id') id: number){
        let user =  this.clienteservice.buscarCliente(id);
        return user;
    }


    @Post()
    async create(
        @Body() 
        datosCliente:{
            clienteDto: Cliente;
            idUsuario:number;
        }) { 
            return {
                statusCode: HttpStatus.OK,
                message: 'Cliente Creado',
                data: await this.clienteservice.crearUsuario(datosCliente.clienteDto,datosCliente.idUsuario),
            };
    }




    @Patch(':id')
    async actualizarCliente(@Param('id') id: number, @Body() data: Partial<clienteDto>) {

        return {
            statusCode: HttpStatus.OK,
            message: 'Usuario Actualizado',
            date: await this.clienteservice.ActualizarUsuario(id,data),

        };
    }

    @Delete(':id')
    async eliminarCliente(@Param('id') id: number){
        await this.clienteservice.EliminarUsuario(id);
        return {
            statusCode: HttpStatus.OK,
            message: 'El usuario fue eliminado '
        }
    }

}
