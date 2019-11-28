import { IsInt, Min, Max, MinLength } from 'class-validator';

export class Test {

   @MinLength(3)
   subtype: string;
   
   @IsInt()
   @Min(0)
   @Max(10)
   tonnageFree: string;
}
