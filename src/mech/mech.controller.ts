import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mech } from './mech.entity';
import { Repository, DeepPartial } from 'typeorm';
import { MechDto } from './interfaces/mech.dto';
import { validate } from 'class-validator';

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
  async create(@Body() mechDto: MechDto) {

    let mech: DeepPartial<Mech> = new Mech();
    mech.tonnageTotal = mechDto.tonnageTotal;
    console.log(mech);

    let errors = await validate(mech);    
    if (errors.length > 0) {
      throw 400;
    }

    return await this.mechRepository.save(mech);
  }
}
