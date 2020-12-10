import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { Producto } from '././entitys/products.entity'
import { Cliente } from './entitys/cliente.entity';
import { DetalleFactura } from './entitys/detallefactura.entity';
import { Pago } from './entitys/pago.entity';
import { Tarjeta } from './entitys/tarjeta.entity';
import { Factura } from './entitys/factura.entity';
import { ClienteModule } from './cliente/cliente.module';
import { DetalleFacturaModule } from './detalle-factura/detalle-factura.module';
import { FacturaModule } from './factura/factura.module';
import { PagoModule } from './pago/pago.module';
import { TarjetaModule } from './tarjeta/tarjeta.module';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioModule } from './usuario/usuario.module';
import { Usuario } from './entitys/usuario.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    replication:{
      master:{
        host:'192.168.100.118',
        port:3306,
        username:'base',
        password:'Julyok64*',
        database:'db_main',
      },
      slaves:[{
        host:'192.168.100.119',
        port:3306,
        username:'esclavo',
        password:'Julyok64*',
        database:'db_main'
      }]  
      },
    entities:[Producto,Cliente,DetalleFactura,Factura,Pago,Tarjeta,Usuario],
    synchronize:true,
   // dropSchema:true
    


  }),ProductsModule, ClienteModule, DetalleFacturaModule, FacturaModule, PagoModule, TarjetaModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
