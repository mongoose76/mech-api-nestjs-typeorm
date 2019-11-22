import { Controller, Get, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Battlemech } from './battlemech.entity';
import { Repository } from 'typeorm';

@Controller('battlemech')
export class BattlemechController {
  constructor(
    @InjectRepository(Battlemech)
    private readonly battlemechRepository: Repository<Battlemech>,
  ) {}

  @Get()
  findAll(): Promise<Battlemech[]> {
    return this.battlemechRepository.find({relations: ['type']});
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Battlemech> {
    return this.battlemechRepository.findOne(id, {relations: ['type', 'weaponHardpoints']});
  }
}
