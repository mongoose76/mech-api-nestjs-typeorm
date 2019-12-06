import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mech } from './mech.entity';
import { Repository, DeleteResult } from 'typeorm';
import { MechDto } from './interfaces/mech.dto';
import { ApiTags, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';

@ApiTags('mech')
@Controller('mech')
export class MechController {
  constructor(
    @InjectRepository(Mech)
    private readonly mechRepository: Repository<Mech>,
  ) {}

  @ApiResponse({
    type: Mech,
  })
  @Get()
  findAll(): Promise<Mech[]> {
    return this.mechRepository.find({ relations: ['type'] });
  }

  @ApiResponse({
    type: Mech,
  })
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Mech> {
    return this.mechRepository.findOne(id, {
      relations: ['type', 'weaponHardpoints'],
    });
  }

  @ApiCreatedResponse({
    description: 'New mech has been successfully created.',
    type: Mech,
  })
  @Post()
  create(@Body() mechDto: MechDto): Promise<Mech> {
    return this.mechRepository.save(mechDto);
  }

  @ApiResponse({
    type: DeleteResult,
  })
  @Delete(':id')
  delete(@Param('id') id: number): Promise<DeleteResult> {
    return this.mechRepository.delete(id);
  }
}
