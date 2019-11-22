import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Battlemech } from './battlemech/battlemech.entity';
import { BattlemechController } from './battlemech/battlemech.controller';
import { BattlemechType } from './battlemechType/battlemechType.entity';
import { WeaponHardpoint } from './weaponHardpoint/weaponHardpoint.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nestjs-battletech',
      entities: [Battlemech, BattlemechType, WeaponHardpoint],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Battlemech, BattlemechType, WeaponHardpoint]),
  ],
  controllers: [AppController, BattlemechController],
  providers: [AppService],
})
export class AppModule {}
