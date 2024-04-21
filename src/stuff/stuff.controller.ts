import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { CreateStuffDto } from './dto/create-stuff.dto';
import { UpdateStuffDto } from './dto/update-stuff.dto';

@Controller('stuff')
export class StuffController {
  constructor(private readonly stuffService: StuffService) {}

  @Post()
  async create(@Body() createStuffDto: CreateStuffDto) {
    return this.stuffService.create(createStuffDto);
  }

  @Get()
  async findAll() {
    return this.stuffService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.stuffService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateStuffDto: UpdateStuffDto) {
    return this.stuffService.update(+id, updateStuffDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.stuffService.remove(+id);
  }
}
