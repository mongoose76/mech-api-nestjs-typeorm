import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Index,
} from 'typeorm';
import { MechType } from '../mechType/mechType.entity';
import { MechWeaponHardpoint } from './mechWeaponHardpoint.entity';
import { MechClass } from './interfaces/mechEnums';

@Entity()
export class Mech {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => MechType)
  type: MechType;

  @Index('mech_subtype_idx', { unique: true,  })
  @Column({ length: '50' })
  subtype: string;

  @Column({
    type: 'enum',
    enum: MechClass,
    default: MechClass.LIGHT,
  })
  class: MechClass;

  @Column({ length: '100' })
  stockRole: string;

  @Column()
  tonnageTotal: number;

  @Column()
  tonnageFree: number;

  @Column()
  damageMelee: number;

  @Column()
  damageDFA: number;

  @Column()
  walkDistance: number;

  @Column()
  jumpJets: number;

  @Column()
  cost: number;

  @Column()
  rarity: number;

  @OneToMany(
    type => MechWeaponHardpoint,
    mechToHardpoint => mechToHardpoint.mech,
    {
      cascade: true,
    },
  )
  weaponHardpoints: MechWeaponHardpoint[];
}
