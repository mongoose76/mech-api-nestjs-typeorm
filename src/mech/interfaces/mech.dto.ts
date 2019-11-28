import { MechHardpointDto } from './mechHardpoint.dto';
import { MechClass } from './mechEnums';

export class MechDto {
  readonly typeId: number;
  readonly subtype: string;
  readonly class: MechClass;
  readonly stockRole: string;
  readonly tonnageTotal: number;
  readonly tonnageFree: number;
  readonly damageMelee: number;
  readonly damageDFA: number;
  readonly walkDistance: number;
  readonly jumpJets: number;
  readonly cost: number;
  readonly rarity: number;
  readonly hardpoints: MechHardpointDto[];
}
