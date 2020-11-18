//id idfactura idcliente idpago cantidad totalpago
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DetalleFactura {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  id_factura: number;
  @Column()
  id_cliente: number;
  @Column()
  id_pago: number;
  @Column()
  cantidad: number;
  @Column()
  totalpago: number;


}