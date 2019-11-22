import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BattleMech } from './battlemech/battlemech.entity';
import { BattleMechController } from './battlemech/battlemech.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nestjs-battletech',
      entities: [BattleMech],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([BattleMech]), 
  ],  
  controllers: [AppController, BattleMechController],
  providers: [AppService],
})
export class AppModule {}
