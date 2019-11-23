import { MigrationInterface, QueryRunner } from "typeorm";
import { MechsSeed } from '../seed/mechs.seed';
import { MechTypesSeed } from '../seed/mechTypes.seed';
import { MechWeaponHardpoint } from "../src/mechWeaponHardpoint/mechWeaponHardpoint.entity";

export class SeedData1574419296985 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const mechTypes: any = MechTypesSeed;        
        await queryRunner.manager.getRepository('mech_type').save(mechTypes);
        
        const mechs: any = MechsSeed;
        for (let mech of mechs) {
            let mechType:any = await queryRunner.manager.getRepository('mech_type').findOne({ name: mech.type });
            mech.type = mechType.id;
            mech.weaponHardpoints = [];
            for (let h of mech.hardpoints) {
                let hardpoint = new MechWeaponHardpoint();
                hardpoint.mech = mech;
                hardpoint.bodypart = h.bodypart;
                hardpoint.type = h.type;
                mech.weaponHardpoints.push(hardpoint);
            }
            await queryRunner.manager.getRepository('mech').save(mech);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("TRUNCATE TABLE mech, mech_weapon_hardpoint, mech_type");
    }

}