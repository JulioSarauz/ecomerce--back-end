import { Module } from '@nestjs/common';
import { FacturaController } from './factura.controller';
import { FacturaService } from './factura.service';

@Module({
  controllers: [FacturaController],
  providers: [FacturaService]
})
export class FacturaModule {}
