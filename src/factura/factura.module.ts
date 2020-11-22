import { Module } from '@nestjs/common';
import { FacturaController } from './factura.controller';
import { FacturaService } from './factura.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Factura } from 'src/entitys/factura.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Factura])],
  controllers: [FacturaController],
  providers: [FacturaService]
})
export class FacturaModule {}
 