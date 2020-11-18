import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prods } from 'src/modules/producto/entity/prods';
import { Repository } from 'typeorm';

@Injectable()
export class ProdsService {
    constructor(
        @InjectRepository(Prods)
        private readonly productRP: Repository<Prods>){

        }
        async saveProduct(product:any){
            await this.productRP.insert(product);
            return product;
        }
        async updateProduct(id:number,product:any){
            await this.productRP.update(id,product);
            return product;
        }
        async findAll(){
            await this.productRP.find();
        }
        async findOnProduct(id:number){
            await this.productRP.findOne(id);
        }
        async deleteProduct(id:number){
            await this.productRP.delete(id);
        }
  
}

