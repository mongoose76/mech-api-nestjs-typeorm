import { MechHardpointDto } from './mechHardpoint.dto';
import { MechClass } from './mechEnums';
import { IsInt, IsString, IsEnum, IsArray, Max, Min } from 'class-validator';

export class MechDto {
  @IsInt()
  readonly typeId: number;

  @IsString()
  readonly subtype: string;

  @IsEnum(MechClass)
  readonly class: MechClass;

  @IsString()
  readonly stockRole: string;

  @IsInt()
  @Max(100)
  @Min(5)
  readonly tonnageTotal: number;

  @IsInt()
  @Max(100)
  @Min(5)
  readonly tonnageFree: number;

  @IsInt()
  @Max(100)
  @Min(1)
  readonly damageMelee: number;

  @IsInt()
  @Max(200)
  @Min(1)
  readonly damageDFA: number;

  @IsInt()
  @Max(300)
  @Min(1)
  readonly walkDistance: number;

  @IsInt()
  @Max(10)
  @Min(1)
  readonly jumpJets: number;

  @IsInt()
  @Max(50000000)
  @Min(0)
  readonly cost: number;

  @IsInt()
  @Max(10)
  @Min(0)
  readonly rarity: number;

  @IsArray()
  readonly hardpoints: MechHardpointDto[];
}
