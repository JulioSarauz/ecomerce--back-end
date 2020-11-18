import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('prods')
export class Prods {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre:string;

    @Column()
    descripcion:string;

    @Column()
    precio:string;
}
