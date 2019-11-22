import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { BattlemechType } from 'src/battlemechType/battlemechType.entity';

@Entity()
export class Battlemech {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => BattlemechType)
  @JoinColumn({ name: 'type_id'})
  type: number;

  @Column({ length: '50' })
  subtype: string;

  @Column({ length: '50' })
  class: string;

  @Column()
  stock_role: string;

  @Column()
  tonnage: number;

  @Column()
  cost: number;

  @Column()
  rarity: number;
}
