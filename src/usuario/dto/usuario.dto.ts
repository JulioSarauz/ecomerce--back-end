import { IsNotEmpty } from "class-validator";

export class UserDto {
    
    @IsNotEmpty()
    id_usuario: number;
    @IsNotEmpty()
    user: string;
    @IsNotEmpty()
    pass: string;
  
  }
  