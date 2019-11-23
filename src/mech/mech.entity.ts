import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { MechType } from '../mechType/mechType.entity';
import { MechWeaponHardpoint, WeaponType } from '../mechWeaponHardpoint/mechWeaponHardpoint.entity';

export enum MechClass {
  LIGHT = "light",
  MEDIUM = "medium",
  HEAVY = "heavy",
  ASSAULT = "assault"
}

@Entity()
export class Mech {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => MechType)
  type: MechType;

  @Column({ length: '50' })
  subtype: string;

  @Column({
    type: "enum",
    enum: MechClass,
    default: MechClass.LIGHT
  })
  class: MechClass

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

  @OneToMany(type => MechWeaponHardpoint, mechToHardpoint => mechToHardpoint.mech, 
    {
      cascade: true
    })
  weaponHardpoints: MechWeaponHardpoint[];
}
