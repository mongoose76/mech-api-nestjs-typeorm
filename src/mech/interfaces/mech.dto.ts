import { MechHardpointDto } from './mechHardpoint.dto';

export class MechDto {
  readonly type: string;
  readonly subtype: string;
  readonly class: string;
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
