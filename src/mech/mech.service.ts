import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MechEntity } from './mech.entity';
import { Repository, DeleteResult } from 'typeorm';
import { MechDto } from './interfaces/mech.dto';

@Injectable()
export class MechService {
  constructor(
    @InjectRepository(MechEntity)
    private readonly mechRepository: Repository<MechEntity>,
  ) {}

  async findAll(): Promise<MechDto[]> {
    let mechs = await this.mechRepository.find({ relations: ['type'] });
    return mechs.map(m => m.toDTO());
  }

  async findOne(id: number): Promise<MechDto> {
    let mech = await this.mechRepository.findOne(id, {
      relations: ['type', 'hardpoints'],
    });
    return mech.toDTO();
  }

  async create(mechDto: MechDto): Promise<MechDto> {
    let mech: MechEntity = new MechEntity();
    Object.assign(mech, mechDto);
    let newMech: MechEntity = await this.mechRepository.save(mechDto);
    return newMech.toDTO();
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.mechRepository.delete(id);
  }
}
