import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager } from 'typeorm';
import { Factura } from '../entitys/factura.entity';
import { FacturaDto } from './dto/factura.dto';

@Injectable()
export class FacturaService {

    constructor(
        @InjectRepository(Factura)
        private userRepositorio: Repository<FacturaDto>,
    ){}

    //RETORNAR TODOS LOS USUARIOS
    async verTodo(){
        return await this.userRepositorio.find();
    }

    //RETORNAR 1 USUARIO
    async buscar(id_factura:number):Promise<Factura>{
        return getManager().getRepository(Factura).findOne({
            where:{
                id_factura:id_factura
            }
        });
    }

    //INGRESAR USUARIOS
    async crear(data:FacturaDto){
        const user = this.userRepositorio.create(data);
        await this.userRepositorio.save(data);
        return user;

    }

    //ACTUALIZAR USUARIOS
    async Actualizar(id_factura:number, data:Partial<FacturaDto>){
        await this.userRepositorio.update({ id_factura },data);
        return await this.userRepositorio.findOne({ id_factura });
    }

    //ELIMINAR USUARIOS
    async Eliminar(id_factura:number){
        await this.userRepositorio.delete({ id_factura });
        return {deleted: true};
    }
}
 