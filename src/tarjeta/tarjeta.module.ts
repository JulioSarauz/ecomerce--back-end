import { Module } from '@nestjs/common';
import { TarjetaController } from './tarjeta.controller';
import { TarjetaService } from './tarjeta.service';

@Module({
  controllers: [TarjetaController],
  providers: [TarjetaService]
})
export class TarjetaModule {}
