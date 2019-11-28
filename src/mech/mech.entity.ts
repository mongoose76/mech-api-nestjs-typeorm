import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { MechType } from '../mechType/mechType.entity';
import { MechWeaponHardpoint } from './mechWeaponHardpoint.entity';
import { MechClass } from './interfaces/mechEnums';
import { IsInt, Max } from 'class-validator';

@Entity()
export class Mech {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => MechType)
  type: MechType;

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
  @IsInt()
  @Max(10)
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
