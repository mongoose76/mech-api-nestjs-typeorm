import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { Mech } from './mech.entity';
import { DeleteResult } from 'typeorm';
import { MechDto } from './interfaces/mech.dto';
import { ApiTags, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import { MechService } from './mech.service';

@ApiTags('mech')
@Controller('mech')
export class MechController {
  constructor(private readonly mechService: MechService) {}

  @ApiResponse({
    type: Mech,
  })
  @Get()
  findAll(): Promise<MechDto[]> {
    return this.mechService.findAll();
  }

  @ApiResponse({
    type: Mech,
  })
  @Get(':id')
  findOne(@Param('id') id: number): Promise<MechDto> {
    return this.mechService.findOne(id);
  }

  @ApiCreatedResponse({
    description: 'New mech has been successfully created.',
    type: Mech,
  })
  @Post()
  create(@Body() mechDto: MechDto): Promise<Mech> {
    return this.mechService.create(mechDto);
  }

  @ApiResponse({
    type: DeleteResult,
  })
  @Delete(':id')
  delete(@Param('id') id: number): Promise<DeleteResult> {
    return this.mechService.delete(id);
  }
}
