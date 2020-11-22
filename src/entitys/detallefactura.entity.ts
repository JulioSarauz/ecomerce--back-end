//id idfactura idcliente idpago cantidad totalpago
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn } from 'typeorm';
import { Factura } from './factura.entity';
import { Producto } from './products.entity';

@Entity()
export class DetalleFactura {
  @PrimaryGeneratedColumn()
  id_detallefactura: number;
  @Column()
  cantidad: number;
  @Column()
  totalpago: number;


  @OneToOne(type => Factura, factura => factura.fk_detallefactura )
  @JoinColumn()
  fk_factura:Factura;



  @ManyToOne(type => Producto, producto => producto.fk_detallefactura)
  @JoinColumn()
  fk_producto:Producto[];

}