import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { MechEntity } from './mech.entity';
import { MechBodypart, WeaponType } from './interfaces/mechEnums';
import { MechHardpointDto } from './interfaces/mechHardpoint.dto';

@Entity('mech_hardpoint')
export class MechHardpointEntity {

  constructor(bodypart: MechBodypart, type: WeaponType) {
    this.bodypart = bodypart;
    this.type = type;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => MechEntity,
    mech => mech.hardpoints,
  )
  mech: MechEntity;

  @Column({
    type: 'enum',
    enum: MechBodypart,
    default: MechBodypart.CENTER_TORSO,
  })
  bodypart: MechBodypart;

  @Column({
    type: 'enum',
    enum: WeaponType,
    default: WeaponType.SUPPORT,
  })
  type: WeaponType;

  /**
   * Converts this entity to its DTO counterpart
   */
  toDTO(): MechHardpointDto {
    return {
      bodypart: this.bodypart,
      type: this.type,
    };
  }
}
