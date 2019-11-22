import {MigrationInterface, QueryRunner} from "typeorm";
import { BattlemechsSeed } from '../seed/battlemechs.seed';

export class SeedData1574419296985 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const battlemechs: any = BattlemechsSeed;
        await queryRunner.manager.getRepository('battlemech').save(battlemechs);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.manager.getRepository('battlemech').clear();
    }

}
