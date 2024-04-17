import { Injectable } from '@nestjs/common';
import { CreateTargetIdDto } from './dto/create-target_id.dto';
import { UpdateTargetIdDto } from './dto/update-target_id.dto';

@Injectable()
export class TargetIdService {
  create(createTargetIdDto: CreateTargetIdDto) {
    return 'This action adds a new targetId';
  }

  findAll() {
    return `This action returns all targetId`;
  }

  findOne(id: number) {
    return `This action returns a #${id} targetId`;
  }

  update(id: number, updateTargetIdDto: UpdateTargetIdDto) {
    return `This action updates a #${id} targetId`;
  }

  remove(id: number) {
    return `This action removes a #${id} targetId`;
  }
}
