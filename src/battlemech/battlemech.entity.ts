import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { BattlemechType } from '../battlemechType/battlemechType.entity';

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
  @JoinColumn({ name: 'type_id'})
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
  stock_role: string;

  @Column()
  tonnage: number;

  @Column()
  cost: number;

  @Column()
  rarity: number;
}
