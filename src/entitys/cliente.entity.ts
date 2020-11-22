//id nombres cedula correo telefono direccion
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Factura } from './factura.entity';
import { Tarjeta } from './tarjeta.entity';


@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id_cliente: number;

  @Column()
  nombres: string;

  @Column()
  cedula: string;

  @Column()
  correo: string;

  @Column()
  telefono: string;

  @Column()
  direccion: string;

  @OneToOne(type => Usuario, usuario => usuario.fk_cliente)
  @JoinColumn()
  fk_usuario:Usuario;

  @OneToMany(type => Factura, factura => factura.fk_cliente)
  fk_factura:Factura;

  @OneToMany(type => Tarjeta, tarjeta => tarjeta.fk_cliente)
  fk_tarjeta:Tarjeta;
  
}