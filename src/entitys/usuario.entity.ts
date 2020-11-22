// id numerotarjeta fecha fecha cvv
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Cliente } from './cliente.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;
  @Column()
  user: string;
  @Column()
  pass: number;


  @OneToOne(type => Cliente, cliente => cliente.fk_usuario)
  fk_cliente:Cliente;

}