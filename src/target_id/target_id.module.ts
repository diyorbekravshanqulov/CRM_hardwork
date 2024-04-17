import { Module } from '@nestjs/common';
import { TargetIdService } from './target_id.service';
import { TargetIdController } from './target_id.controller';

@Module({
  controllers: [TargetIdController],
  providers: [TargetIdService],
})
export class TargetIdModule {}
