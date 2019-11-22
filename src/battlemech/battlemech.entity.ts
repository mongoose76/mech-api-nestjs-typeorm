import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Battlemech {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: "200"})
  type: string;

  @Column({length: "50"})
  subtype: string;

  @Column({length: "50"})
  weightClass: string;

  @Column()
  weight: number;
}
