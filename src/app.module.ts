import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mech } from './mech/mech.entity';
import { MechController } from './mech/mech.controller';
import { MechType } from './mechType/mechType.entity';
import { MechWeaponHardpoint } from './mechWeaponHardpoint/mechWeaponHardpoint.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nestjs-battletech',
      entities: [Mech, MechType, MechWeaponHardpoint],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Mech, MechType, MechWeaponHardpoint]),
  ],
  controllers: [AppController, MechController],
  providers: [AppService],
})
export class AppModule {}
