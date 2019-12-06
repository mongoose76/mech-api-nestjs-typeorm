import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { MechEntity } from './mech.entity';
import { MechBodypart, WeaponType } from './interfaces/mechEnums';
import { MechHardpointDto } from './interfaces/mechHardpoint.dto';

@Entity()
export class MechHardpointEntity {
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
   * name
   */
  public toDTO(): MechHardpointDto {
    return {
      bodypart: this.bodypart,
      type: this.type,
    };
  }
}
