import { WeaponType, MechBodypart } from './mechEnums';

export class MechHardpointDto {
  readonly type: WeaponType;
  readonly bodypart: MechBodypart;
}
