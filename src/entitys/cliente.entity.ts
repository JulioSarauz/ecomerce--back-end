//id nombres cedula correo telefono direccion
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

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
  
}