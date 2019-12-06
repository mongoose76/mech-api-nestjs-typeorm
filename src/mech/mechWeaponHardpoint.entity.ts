import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Mech } from './mech.entity';
import { MechBodypart, WeaponType } from './interfaces/mechEnums';
import { MechHardpointDto } from './interfaces/mechHardpoint.dto';

@Entity()
export class MechWeaponHardpoint {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => Mech,
    mech => mech.weaponHardpoints,
  )
  mech: Mech;

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
