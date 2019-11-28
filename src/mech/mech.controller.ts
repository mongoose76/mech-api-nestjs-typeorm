import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mech } from './mech.entity';
import { Repository } from 'typeorm';
import { MechDto } from './interfaces/mech.dto';

@Controller('mech')
export class MechController {
  constructor(
    @InjectRepository(Mech)
    private readonly mechRepository: Repository<Mech>,
  ) {}

  @Get()
  findAll(): Promise<Mech[]> {
    return this.mechRepository.find({ relations: ['type'] });
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Mech> {
    return this.mechRepository.findOne(id, {
      relations: ['type', 'weaponHardpoints'],
    });
  }

  @Post()
  create(@Body() mechDto: MechDto) {
    return this.mechRepository.save(mechDto);
  }
}
