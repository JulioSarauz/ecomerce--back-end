// id numerotarjeta fecha fecha cvv
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tarjeta {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  codigo: string;
  @Column()
  fecha: number;
  @Column()
  cvv: number;

}