import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager } from 'typeorm';
import { DetalleFactura } from '../entitys/detallefactura.entity';
import { DetalleFacturaDto } from './dto/detalle-factura.dto';

@Injectable()
export class DetalleFacturaService {
    constructor(
        @InjectRepository(DetalleFactura)
        private userRepositorio: Repository<DetalleFacturaDto>,
    ){}

    //RETORNAR TODOS LOS USUARIOS
    async verTodo(){
        return await this.userRepositorio.find();
    }

    //RETORNAR 1 USUARIO
    async buscar(id_detallefactura:number):Promise<DetalleFactura>{
        return getManager().getRepository(DetalleFactura).findOne({
            where:{
                id_detallefactura:id_detallefactura
            }
        });
    }

    //INGRESAR USUARIOS
    async crear(data:DetalleFacturaDto){
        const user = this.userRepositorio.create(data);
        await this.userRepositorio.save(data);
        return user;

    }

    //ACTUALIZAR USUARIOS
    async Actualizar(id_detallefactura:number, data:Partial<DetalleFacturaDto>){
        await this.userRepositorio.update({ id_detallefactura },data);
        return await this.userRepositorio.findOne({ id_detallefactura });
    }

    //ELIMINAR USUARIOS
    async Eliminar(id_detallefactura:number){
        await this.userRepositorio.delete({ id_detallefactura });
        return {deleted: true};
    }

}
 