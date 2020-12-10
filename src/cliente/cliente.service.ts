import { Injectable } from '@nestjs/common';
import { getManager, Repository } from 'typeorm';
import { Cliente } from '../entitys/cliente.entity';
import { clienteDto } from './dto/cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(Cliente)
        private userRepositorio: Repository<clienteDto>,
    ){}

    //RETORNAR TODOS LOS USUARIOS
    async verTodosClientes(){
        return await this.userRepositorio.find();
    }

    //RETORNAR 1 USUARIO
    async buscarCliente(id_cliente:number):Promise<Cliente>{
        return getManager().getRepository(Cliente).findOne({
            where:{
                id_cliente:id_cliente
            }
        });
    }


    //INGRESAR USUARIOS
    async crearUsuario(
       cliente:Cliente,
       idusuario:number
    ){
        cliente.fk_usuario = idusuario;
        const user = this.userRepositorio.create(cliente);
        await this.userRepositorio.save(cliente);
        return user;

    }

    //ACTUALIZAR USUARIOS
    async ActualizarUsuario(id_cliente:number, data:Partial<clienteDto>){
        await this.userRepositorio.update({ id_cliente },data);
        return await this.userRepositorio.findOne({ id_cliente });
    }

    //ELIMINAR USUARIOS
    async EliminarUsuario(id_cliente:number){
        await this.userRepositorio.delete({ id_cliente });
        return {deleted: true};
    }


}
