import { Module } from '@nestjs/common';
import { TarjetaController } from './tarjeta.controller';
import { TarjetaService } from './tarjeta.service';
import { Tarjeta } from 'src/entitys/tarjeta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Tarjeta])],
  controllers: [TarjetaController],
  providers: [TarjetaService]
})
export class TarjetaModule {}
 