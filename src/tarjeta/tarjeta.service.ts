import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tarjeta } from 'src/entitys/tarjeta.entity';
import { Repository, getManager } from 'typeorm';
import { TarjetaDto } from './dto/tarjeta.dto';

@Injectable()
export class TarjetaService {
    constructor(
        @InjectRepository(Tarjeta)
        private userRepositorio: Repository<TarjetaDto>,
    ){}

    //RETORNAR TODOS LOS USUARIOS
    async verTodo(idUsuario:number){
        return await this.userRepositorio.find({where:{fk_cliente:idUsuario}});
    }

    //RETORNAR 1 USUARIO
    async buscar(id_tarjeta:number):Promise<Tarjeta>{
        return getManager().getRepository(Tarjeta).findOne({
            where:{
                id_tarjeta:id_tarjeta
            }
        });
    }

    //INGRESAR USUARIOS
    async crear(
            tarjeta:Tarjeta,
            idUsuario:number
        ){
        tarjeta.fk_cliente = idUsuario;
        const user = this.userRepositorio.create(tarjeta);
        await this.userRepositorio.save(tarjeta);
        return user;

    }

    //ACTUALIZAR USUARIOS
    async Actualizar(id_tarjeta:number, data:Partial<TarjetaDto>){
        await this.userRepositorio.update({ id_tarjeta },data);
        return await this.userRepositorio.findOne({ id_tarjeta });
    }

    //ELIMINAR USUARIOS
    async Eliminar(id_tarjeta:number){
        await this.userRepositorio.delete({ id_tarjeta });
        return {deleted: true};
    }

}
 