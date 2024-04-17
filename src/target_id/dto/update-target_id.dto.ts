import { PartialType } from '@nestjs/mapped-types';
import { CreateTargetIdDto } from './create-target_id.dto';

export class UpdateTargetIdDto extends PartialType(CreateTargetIdDto) {}
