//id tipo_pago
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Factura } from './factura.entity';

@Entity()
export class Pago {
  @PrimaryGeneratedColumn()
  id_pago: number;

  @Column()
  tipo: string;

  @OneToOne(type => Factura, factura => factura.fk_pago)
  fk_factura:Factura;

}