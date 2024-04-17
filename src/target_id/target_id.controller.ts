import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TargetIdService } from './target_id.service';
import { CreateTargetIdDto } from './dto/create-target_id.dto';
import { UpdateTargetIdDto } from './dto/update-target_id.dto';

@Controller('target-id')
export class TargetIdController {
  constructor(private readonly targetIdService: TargetIdService) {}

  @Post()
  create(@Body() createTargetIdDto: CreateTargetIdDto) {
    return this.targetIdService.create(createTargetIdDto);
  }

  @Get()
  findAll() {
    return this.targetIdService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.targetIdService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTargetIdDto: UpdateTargetIdDto) {
    return this.targetIdService.update(+id, updateTargetIdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.targetIdService.remove(+id);
  }
}
