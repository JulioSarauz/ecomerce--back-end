import { Module } from '@nestjs/common';
import { DetalleFacturaController } from './detalle-factura.controller';
import { DetalleFacturaService } from './detalle-factura.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleFactura } from 'src/entitys/detallefactura.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DetalleFactura])],
  controllers: [DetalleFacturaController],
  providers: [DetalleFacturaService]
})
export class DetalleFacturaModule {}
 