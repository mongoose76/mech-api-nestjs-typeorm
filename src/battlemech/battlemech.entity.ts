import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BattleMech {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}