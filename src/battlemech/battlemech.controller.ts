import { Controller, Get, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BattleMech } from './battlemech.entity';
import { Repository } from 'typeorm';

@Controller('battlemech')
export class BattleMechController {
  constructor(
    @InjectRepository(BattleMech)
    private readonly battlemechRepository: Repository<BattleMech>,
  ) {}

  @Get()
  findAll(): Promise<BattleMech[]> {
    return this.battlemechRepository.find();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<BattleMech> {
    return this.battlemechRepository.findOne(id);
  }
}
