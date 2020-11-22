// id numerotarjeta fecha fecha cvv
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Cliente } from './cliente.entity';

@Entity()
export class Tarjeta {
  @PrimaryGeneratedColumn()
  id_tarjeta: number;
  @Column()
  codigo: string;
  @Column()
  fecha: number;
  @Column()
  cvv: number;

  @ManyToOne(type=> Cliente, cliente => cliente.fk_tarjeta)
  @JoinColumn()
  fk_cliente:Cliente[];

  
}