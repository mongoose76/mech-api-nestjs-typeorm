import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Mech } from '../mech/mech.entity';

export enum MechBodypart {
  HEAD = 'head',
  LEFT_ARM = 'left arm',
  LEFT_TORSO = 'left torso',  
  RIGHT_ARM = 'right arm',
  RIGHT_TORSO = 'right torso',
  CENTER_TORSO = 'center torso',
  LEFT_LEG = 'left leg',
  RIGHT_LEG = 'right leg'
}

export enum WeaponType {
  ENERGY = 'energy',
  SUPPORT = 'support',
  MISSILE = 'mssile',  
  BALISSTIC = 'ballistic',
}

@Entity()
export class MechWeaponHardpoint {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Mech, mech => mech.weaponHardpoints)
  mech: Mech;

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
