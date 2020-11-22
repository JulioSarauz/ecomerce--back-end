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
    async verTodo(){
        return await this.userRepositorio.find();
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
    async crear(data:TarjetaDto){
        const user = this.userRepositorio.create(data);
        await this.userRepositorio.save(data);
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
 