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

@Module({
  imports: [/*TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'root',
    database:'test',
    entities:[Producto,Cliente,DetalleFactura,Factura,Pago,Tarjeta],
    synchronize:true,
  }),*/ProductsModule, ClienteModule, DetalleFacturaModule, FacturaModule, PagoModule, TarjetaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
