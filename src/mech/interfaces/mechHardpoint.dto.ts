import { WeaponType, MechBodypart } from './mechEnums';
import { ApiProperty } from '@nestjs/swagger';

export class MechHardpointDto {
  @ApiProperty()
  readonly type: WeaponType;

  @ApiProperty()
  readonly bodypart: MechBodypart;
}
