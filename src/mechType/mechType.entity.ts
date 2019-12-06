import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('mech_type')
export class MechTypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: '200' })
  name: string;
}
