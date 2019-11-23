import { MigrationInterface, QueryRunner } from "typeorm";
import { MechsSeed } from '../seed/mechs.seed';
import { MechTypesSeed } from '../seed/mechTypes.seed';

export class SeedData1574419296985 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const mechTypes: any = MechTypesSeed;        
        await queryRunner.manager.getRepository('mech_type').save(mechTypes);
        
        const mechs: any = MechsSeed;
        for (let mech of mechs) {
            let mechType:any = await queryRunner.manager.getRepository('mech_type').findOne({ name: mech.type });
            mech.type = mechType.id;
            await queryRunner.manager.getRepository('mech').save(mech);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.manager.getRepository('mech_weapon_hardpoint').clear();
        await queryRunner.manager.getRepository('mech').clear();        
        await queryRunner.manager.getRepository('mech_type').clear();
    }

}