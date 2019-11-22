import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialDB1574415484201 implements MigrationInterface {
    name = 'InitialDB1574415484201'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "battle_mech" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_cde70b46f676a9d42846eaa9716" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "battle_mech"`, undefined);
    }

}
