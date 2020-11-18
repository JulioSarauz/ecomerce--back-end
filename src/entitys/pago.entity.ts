//id tipo_pago
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pago {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo: string;

}