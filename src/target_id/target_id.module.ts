import { Module } from '@nestjs/common';
import { TargetService } from './target_id.service';
import { TargetController } from './target_id.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Target } from './entities/target_id.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Target])],
  controllers: [TargetController],
  providers: [TargetService],
})
export class TargetModule {}
