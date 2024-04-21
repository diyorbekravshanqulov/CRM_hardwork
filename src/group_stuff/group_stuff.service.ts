import { Injectable } from '@nestjs/common';
import { CreateGroupStuffDto } from './dto/create-group_stuff.dto';
import { UpdateGroupStuffDto } from './dto/update-group_stuff.dto';

@Injectable()
export class GroupStuffService {
  create(createGroupStuffDto: CreateGroupStuffDto) {
    return 'This action adds a new groupStuff';
  }

  findAll() {
    return `This action returns all groupStuff`;
  }

  findOne(id: number) {
    return `This action returns a #${id} groupStuff`;
  }

  update(id: number, updateGroupStuffDto: UpdateGroupStuffDto) {
    return `This action updates a #${id} groupStuff`;
  }

  remove(id: number) {
    return `This action removes a #${id} groupStuff`;
  }
}
