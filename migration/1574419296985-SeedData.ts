import { MigrationInterface, QueryRunner } from "typeorm";
import { BattlemechsSeed } from '../seed/battlemechs.seed';
import { BattlemechTypesSeed } from '../seed/battlemechTypes.seed';

export class SeedData1574419296985 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const battlemechTypes: any = BattlemechTypesSeed;        
        await queryRunner.manager.getRepository('battlemech_type').save(battlemechTypes);
        
        const battlemechs: any = BattlemechsSeed;
        for (let battlemech of battlemechs) {
            let mechType:any = await queryRunner.manager.getRepository('battlemech_type').findOne({ name: battlemech.type });
            battlemech.type = mechType.id;
            await queryRunner.manager.getRepository('battlemech').save(battlemech);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.manager.getRepository('weapon_hardpoint').clear();
        await queryRunner.manager.getRepository('battlemech').clear();        
        await queryRunner.manager.getRepository('battlemech_type').clear();
    }

}