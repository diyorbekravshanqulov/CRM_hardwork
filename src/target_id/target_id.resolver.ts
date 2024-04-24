import { TargetService } from './target_id.service';
import { CreateTargetDto } from './dto/create-target_id.dto';
import { UpdateTargetDto } from './dto/update-target_id.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Target } from './entities/target_id.entity';

@Resolver('target')
export class TargetResolver {
  constructor(private readonly targetIdService: TargetService) {}

  @Mutation(() => Target)
  create(@Args('createTarget') createTargetDto: CreateTargetDto) {
    return this.targetIdService.create(createTargetDto);
  }

  @Query(() => [Target])
  findAll() {
    return this.targetIdService.findAll();
  }

  @Query(() => Target)
  findOne(@Args('id') id: string) {
    return this.targetIdService.findOne(+id);
  }

  @Mutation(() => Target)
  update(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateTarget') updateTargetDto: UpdateTargetDto,
  ) {
    return this.targetIdService.update(+id, updateTargetDto);
  }

  @Mutation(() => ID)
  remove(@Args('id', { type: () => ID }) id: string) {
    return this.targetIdService.remove(+id);
  }
}
