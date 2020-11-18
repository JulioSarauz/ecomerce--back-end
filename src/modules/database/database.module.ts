import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Prods } from '../producto/entity/prods';

@Module({
    imports:[
        TypeOrmModule.forRoot({
            type:'mysql',
            host:'192.168.100.118',
            port:3306,
            username:'root',
            password:'Julyok64*',
            database:'ecomerce',
            entities:[
                    Prods
            ],
            synchronize:true
        })
    ]
})
export class DatabaseModule {
    constructor( private readonly connection:Connection){

    }
}
