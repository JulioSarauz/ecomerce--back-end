// id id_cliente, id_pago fecha, subtotal, iva, total
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Cliente } from './cliente.entity';
import { Pago } from './pago.entity';
import { DetalleFactura } from './detallefactura.entity';

@Entity()
export class Factura {
  @PrimaryGeneratedColumn()
  id_factura: number;
  @Column()
  fecha: Date;
  @Column()
  subtotal: number;
  @Column()
  iva: number;
  @Column()
  total: number;

  @ManyToOne(type => Cliente, cliente => cliente.fk_factura)
  @JoinColumn()
  fk_cliente:Cliente[];

  @OneToOne(type => Pago, pago => pago.fk_factura)
  @JoinColumn()
  fk_pago:Pago;

  @OneToOne(type => DetalleFactura, detallefactura => detallefactura.fk_factura)
  fk_detallefactura:DetalleFactura;
  
}