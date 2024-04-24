import { HttpCode, HttpStatus } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { CreateStuffDto } from './dto/create-stuff.dto';
import { UpdateStuffDto } from './dto/update-stuff.dto';
import { Roles } from '../decorators/roles-auth.decorator';
import { AddRoleDto } from './dto/addRole.dto';
import { ActivateStuffDto } from './dto/activate.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Stuff } from './entities/stuff.entity';

@Resolver('stuff')
export class StuffResolver {
  constructor(private readonly stuffService: StuffService) {}

  @Mutation(() => Stuff)
  async create(@Args('createStuff') createStuffDto: CreateStuffDto) {
    return this.stuffService.create(createStuffDto);
  }

  @Query(() => [Stuff])
  async findAll() {
    return this.stuffService.findAll();
  }

  @Query(() => Stuff)
  async getStuffByLogin(@Args('login') login: string) {
    return this.stuffService.getStuffByLogin(login);
  }

  @Query(() => Stuff)
  async findOne(@Args('id') id: string) {
    return this.stuffService.findOne(+id);
  }

  @Mutation(() => Stuff)
  async update(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateStuff') updateStuffDto: UpdateStuffDto,
  ) {
    return this.stuffService.update(+id, updateStuffDto);
  }

  @Mutation(() => Stuff)
  async remove(@Args('id', { type: () => ID }) id: string) {
    return this.stuffService.remove(+id);
  }

  @Roles('ADMIN', 'USER')
  @HttpCode(HttpStatus.OK)
  @Mutation(() => Stuff)
  async addRole(@Args('add_role') addRoleDto: AddRoleDto) {
    return this.stuffService.addRole(addRoleDto);
  }

  @HttpCode(HttpStatus.OK)
  @Mutation(() => Stuff)
  async removeRole(@Args('remove_role') addRoleDto: AddRoleDto) {
    return this.stuffService.removeRole(addRoleDto);
  }

  @HttpCode(HttpStatus.OK)
  @Mutation(() => Stuff)
  async avtivateUser(@Args('activate') activateStuffDto: ActivateStuffDto) {
    return this.stuffService.activateStuff(activateStuffDto);
  }
}
