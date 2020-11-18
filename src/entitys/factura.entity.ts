// id id_cliente, id_pago fecha, subtotal, iva, total
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Factura {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  id_pago: number;
  @Column()
  fecha: Date;
  @Column()
  subtotal: number;
  @Column()
  iva: number;
  @Column()
  total: number;


}