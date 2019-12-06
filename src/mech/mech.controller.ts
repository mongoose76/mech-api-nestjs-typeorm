import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { MechEntity } from './mech.entity';
import { DeleteResult } from 'typeorm';
import { MechDto } from './interfaces/mech.dto';
import { ApiTags, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import { MechService } from './mech.service';

@ApiTags('mech')
@Controller('mech')
export class MechController {
  constructor(private readonly mechService: MechService) {}

  @ApiResponse({
    type: MechEntity,
  })
  @Get()
  findAll(): Promise<MechDto[]> {
    return this.mechService.findAll();
  }

  @ApiResponse({
    type: MechEntity,
  })
  @Get(':id')
  findOne(@Param('id') id: number): Promise<MechDto> {
    return this.mechService.findOne(id);
  }

  @ApiCreatedResponse({
    description: 'New mech has been successfully created.',
    type: MechEntity,
  })
  @Post()
  create(@Body() mechDto: MechDto): Promise<MechDto> {
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
