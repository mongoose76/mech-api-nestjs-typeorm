import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MechEntity } from './mech/mech.entity';
import { MechController } from './mech/mech.controller';
import { MechTypeEntity } from './mechType/mechType.entity';
import { MechHardpointEntity } from './mech/mechHardpoint.entity';
import { MechService } from './mech/mech.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nestjs-battletech',
      entities: [MechEntity, MechTypeEntity, MechHardpointEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([MechEntity, MechTypeEntity, MechHardpointEntity]),
  ],
  controllers: [AppController, MechController],
  providers: [AppService, MechService],
})
export class AppModule {}
