import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Battlemech } from 'src/battlemech/battlemech.entity';

export enum MechBodypart {
  HEAD = 'head',
  LEFT_ARM = 'l. arm',
  LEFT_TORSO = 'l. torso',  
  RIGHT_ARM = 'r. arm',
  RIGHT_TORSO = 'r. torso',
  CENTER_TORSO = 'c. torso',
  LEFT_LEG = 'l. leg',
  RIGHT_LEG = 'r. leg'
}

export enum WeaponType {
  ENERGY = 'energy',
  SUPPORT = 'support',
  MISSILE = 'mssile',  
  BALISSTIC = 'balisstic',
}

@Entity()
export class WeaponHardpoint {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Battlemech, mech => mech.weaponHardpoints)
  battlemech: Battlemech;

  @Column({
    type: "enum",
    enum: MechBodypart,
    default: MechBodypart.CENTER_TORSO
  })
  bodypart: MechBodypart;

  @Column({
    type: "enum",
    enum: WeaponType,
    default: WeaponType.SUPPORT
  })
  type: WeaponType;
}
