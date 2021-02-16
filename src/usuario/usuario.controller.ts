import { Controller, Get, Post, Body, Param, Delete, Put, HttpStatus, Patch} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../entitys/usuario.entity';
import { UserDto } from './dto/usuario.dto';

@Controller('usuario')
export class UsuarioController {
    constructor(private userservice:UsuarioService){}

    @Get()
    async getUsuarios(){
        return{
            statusCode: HttpStatus.OK,
            data: await this.userservice.verTodosUsuarios(),
        }
    }

    @Get(':usr')
    async buscarUsuario(@Param('usr') usr: string){
        let user =  this.userservice.buscarUsuario(usr);
        return user;
    }


    @Post()
    async create(@Body() userDto: UserDto) { 
            
            return {
                statusCode: HttpStatus.OK,
                message: 'Usuario Creado',
                data: await this.userservice.crearUsuario(userDto),
            };
    }




    @Patch(':id')
    async actualizarProducto(@Param('id') id: number, @Body() data: Partial<UserDto>) {

        return {
            statusCode: HttpStatus.OK,
            message: 'Usuario Actualizado',
            date: await this.userservice.ActualizarUsuario(id,data),

        };
    }

    @Delete(':id')
    async eliminarProducto(@Param('id') id: number){
        await this.userservice.EliminarUsuario(id);
        return {
            statusCode: HttpStatus.OK,
            message: 'El usuario fue eliminado '
        }
    }
}
