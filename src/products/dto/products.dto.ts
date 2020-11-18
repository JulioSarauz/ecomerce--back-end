import { IsNotEmpty } from "class-validator";

export class ProdDto {
    
    @IsNotEmpty()
    id: number;
    @IsNotEmpty()
    nombre: string;
    @IsNotEmpty()
    descripcion: string;
    @IsNotEmpty()
    precio:string;


}