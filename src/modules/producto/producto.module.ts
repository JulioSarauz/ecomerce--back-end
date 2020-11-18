import { Module } from '@nestjs/common';
import { ProdsController } from './controller/prods/prods.controller';

@Module({
  controllers: [ProdsController]
})
export class ProductoModule {}
