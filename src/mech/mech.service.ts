import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mech } from './mech.entity';
import { Repository, DeleteResult } from 'typeorm';
import { MechDto } from './interfaces/mech.dto';

@Injectable()
export class MechService {
  constructor(
    @InjectRepository(Mech)
    private readonly mechRepository: Repository<Mech>,
  ) {}

  async findAll(): Promise<MechDto[]> {
    let mechs = await this.mechRepository.find({ relations: ['type'] });
    return mechs.map(m => m.toDTO());
  }

  async findOne(id: number): Promise<MechDto> {
    let mech = await this.mechRepository.findOne(id, {
      relations: ['type', 'weaponHardpoints'],
    });
    return mech.toDTO();
  }

  async create(mechDto: MechDto): Promise<Mech> {
    let newMech: Mech = await this.mechRepository.save(mechDto);
    return newMech;
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.mechRepository.delete(id);
  }
}
