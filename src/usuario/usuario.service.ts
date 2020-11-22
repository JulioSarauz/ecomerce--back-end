import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { Usuario } from '../entitys/usuario.entity';
import { UserDto } from './dto/usuario.dto';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private userRepositorio: Repository<UserDto>,
    ){}

    //RETORNAR TODOS LOS USUARIOS
    async verTodosUsuarios(){
        return await this.userRepositorio.find();
    }

    //RETORNAR 1 USUARIO
    async buscarUsuario(id_usuario:number):Promise<Usuario>{
        return getManager().getRepository(Usuario).findOne({
            where:{
                id_usuario:id_usuario
            }
        });
    }

    //INGRESAR USUARIOS
    async crearUsuario(data:UserDto){
        const user = this.userRepositorio.create(data);
        await this.userRepositorio.save(data);
        return user;

    }

    //ACTUALIZAR USUARIOS
    async ActualizarUsuario(id_usuario:number, data:Partial<UserDto>){
        await this.userRepositorio.update({ id_usuario },data);
        return await this.userRepositorio.findOne({ id_usuario });
    }

    //ELIMINAR USUARIOS
    async EliminarUsuario(id_usuario:number){
        await this.userRepositorio.delete({ id_usuario });
        return {deleted: true};
    }


}








    

