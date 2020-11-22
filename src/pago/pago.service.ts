import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager } from 'typeorm';
import { PagoDto } from './dto/pago.dto';
import { Pago } from '../entitys/pago.entity';

@Injectable()
export class PagoService {
    constructor(
        @InjectRepository(Pago)
        private userRepositorio: Repository<PagoDto>,
    ){}

    //RETORNAR TODOS LOS USUARIOS
    async verTodo(){
        return await this.userRepositorio.find();
    }

    //RETORNAR 1 USUARIO
    async buscar(id_pago:number):Promise<Pago>{
        return getManager().getRepository(Pago).findOne({
            where:{
                id_pago:id_pago
            }
        });
    }

    //INGRESAR USUARIOS
    async crear(data:PagoDto){
        const user = this.userRepositorio.create(data);
        await this.userRepositorio.save(data);
        return user;

    }

    //ACTUALIZAR USUARIOS
    async Actualizar(id_pago:number, data:Partial<PagoDto>){
        await this.userRepositorio.update({ id_pago },data);
        return await this.userRepositorio.findOne({ id_pago });
    }

    //ELIMINAR USUARIOS
    async Eliminar(id_pago:number){
        await this.userRepositorio.delete({ id_pago });
        return {deleted: true};
    }

}
 