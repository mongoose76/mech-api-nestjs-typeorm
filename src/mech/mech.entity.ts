import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Index,
} from 'typeorm';
import { MechTypeEntity } from '../mechType/mechType.entity';
import { MechHardpointEntity as MechHardpoint } from './mechHardpoint.entity';
import { MechClass } from './interfaces/mechEnums';
import { MechDto } from './interfaces/mech.dto';

@Entity('mech')
export class MechEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  typeId: number;

  @ManyToOne(type => MechTypeEntity)
  type: MechTypeEntity;

  @Index('mech_subtype_idx', { unique: true })
  @Column({ length: '50' })
  subtype: string;

  @Column({
    type: 'enum',
    enum: MechClass,
    default: MechClass.LIGHT,
  })
  class: MechClass;

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

  @OneToMany(
    type => MechHardpoint,
    mechToHardpoint => mechToHardpoint.mech,
    {
      cascade: true,
    },
  )
  hardpoints: MechHardpoint[];

  /**
   * name
   */
  public toDTO(): MechDto {
    return {
      typeId: this.type.id,
      subtype: this.subtype,
      class: this.class,
      stockRole: this.stockRole,
      tonnageTotal: this.tonnageTotal,
      tonnageFree: this.tonnageFree,
      damageMelee: this.damageMelee,
      damageDFA: this.damageDFA,
      walkDistance: this.walkDistance,
      jumpJets: this.jumpJets,
      cost: this.cost,
      rarity: this.rarity,
      hardpoints: this.hardpoints
        ? this.hardpoints.map(hardpoint => hardpoint.toDTO())
        : [],
    };
  }
}
