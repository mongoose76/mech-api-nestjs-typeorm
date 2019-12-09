import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MechEntity } from './mech.entity';
import { Repository, DeleteResult } from 'typeorm';
import { MechDto } from './interfaces/mech.dto';
import { MechTypeEntity } from 'src/mechType/mechType.entity';
import { MechHardpointEntity } from './mechHardpoint.entity';

@Injectable()
export class MechService {
  constructor(
    @InjectRepository(MechEntity)
    private readonly mechRepository: Repository<MechEntity>,
    @InjectRepository(MechTypeEntity)
    private readonly mechTypeRepository: Repository<MechTypeEntity>,
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
    mech.type = await this.mechTypeRepository.findOne(mechDto.typeId);
    mech.hardpoints = mechDto.hardpoints.map(h => new MechHardpointEntity(h.bodypart, h.type));
    await this.mechRepository.save(mech);
    return mech.toDTO();
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.mechRepository.delete(id);
  }
}
