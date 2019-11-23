import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { BattlemechType } from '../battlemechType/battlemechType.entity';
import { WeaponHardpoint, WeaponType } from '../weaponHardpoint/weaponHardpoint.entity';

export enum BattlemechClass {
  LIGHT = "light",
  MEDIUM = "medium",
  HEAVY = "heavy",
  ASSAULT = "assault"
}

@Entity()
export class Battlemech {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => BattlemechType)
  type: BattlemechType;

  @Column({ length: '50' })
  subtype: string;

  @Column({
    type: "enum",
    enum: BattlemechClass,
    default: BattlemechClass.LIGHT
  })
  class: BattlemechClass

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

  @OneToMany(type => WeaponHardpoint, mechToHardpoint => mechToHardpoint.battlemech)
  weaponHardpoints: WeaponHardpoint[];
}
