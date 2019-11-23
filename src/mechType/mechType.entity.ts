import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class MechType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: '200' })
  name: string;
}
