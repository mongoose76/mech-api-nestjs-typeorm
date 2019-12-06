import { MechHardpointDto } from './mechHardpoint.dto';
import { MechClass } from './mechEnums';
import { IsInt, IsString, IsEnum, IsArray, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MechDto {
  @ApiProperty()
  @IsInt()
  readonly typeId: number;

  @ApiProperty()
  @IsString()
  readonly subtype: string;

  @ApiProperty({ enum: MechClass })
  @IsEnum(MechClass)
  readonly class: MechClass;

  @ApiProperty()
  @IsString()
  readonly stockRole: string;

  @ApiProperty()
  @IsInt()
  @Max(100)
  @Min(5)
  readonly tonnageTotal: number;

  @ApiProperty()
  @IsInt()
  @Max(100)
  @Min(5)
  readonly tonnageFree: number;

  @ApiProperty()
  @IsInt()
  @Max(100)
  @Min(1)
  readonly damageMelee: number;

  @ApiProperty()
  @IsInt()
  @Max(200)
  @Min(1)
  readonly damageDFA: number;

  @ApiProperty()
  @IsInt()
  @Max(300)
  @Min(1)
  readonly walkDistance: number;

  @ApiProperty()
  @IsInt()
  @Max(10)
  @Min(1)
  readonly jumpJets: number;

  @ApiProperty()
  @IsInt()
  @Max(50000000)
  @Min(0)
  readonly cost: number;

  @ApiProperty()
  @IsInt()
  @Max(10)
  @Min(0)
  readonly rarity: number;

  @ApiProperty({ type: [MechHardpointDto] })
  @IsArray()
  readonly hardpoints: MechHardpointDto[];
}
