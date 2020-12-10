import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { DetalleFactura } from './detallefactura.entity';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id_producto: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  precio: string;

  @Column()
  estado:number;

  @OneToMany(type => DetalleFactura, detallefactura => detallefactura.fk_producto )
  fk_detallefactura:Producto;

}