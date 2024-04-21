import { Injectable } from '@nestjs/common';
import { CreateStuffDto } from './dto/create-stuff.dto';
import { UpdateStuffDto } from './dto/update-stuff.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Stuff } from './entities/stuff.entity';
import { Repository } from 'typeorm';
import { RoleService } from '../role/role.service';

@Injectable()
export class StuffService {
  constructor(
    @InjectRepository(Stuff) private readonly stuffRepo: Repository<Stuff>,
    private readonly roleService: RoleService,
  ) {}

  async create(createStuffDto: CreateStuffDto) {
    const newStuff = await this.stuffRepo.save(createStuffDto);
    const role = await this.roleService.getRoleByName('USER');
    
  }

  async findAll() {
    return this.stuffRepo.find({ relations: { roles: true } });
  }

  async findOne(id: number) {
    return this.stuffRepo.findOneBy({ id });
  }

  async update(id: number, updateStuffDto: UpdateStuffDto) {
    await this.stuffRepo.update({ id }, updateStuffDto);
    return await this.findOne(id);
  }

  async remove(id: number) {
    await this.stuffRepo.delete({ id });
    return {
      message: 'successfully removed',
    };
  }
}
