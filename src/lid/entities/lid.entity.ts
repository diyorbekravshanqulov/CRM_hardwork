import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TargetId } from '../../target_id/entities/target_id.entity';
import { Stage } from '../../stage/entities/stage.entity';
import { LidStatus } from '../../lid_status/entities/lid_status.entity';
import { ReasonLid } from '../../reason_lid/entities/reason_lid.entity';

@Entity()
export class Lid {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone_number: string;

  @OneToOne(() => TargetId)
  @JoinColumn()
  target_id: TargetId;

  @OneToOne(() => Stage)
  @JoinColumn()
  lid_stage_id: Stage;

  @Column()
  test_date: Date;

  @Column()
  trial_lesson_: Date;

  @Column()
  trial_lesson_date: number;

  @Column()
  trial_lesson_time: string;

  @Column()
  trial_lesson_group_id: number;

  @OneToOne(() => LidStatus)
  @JoinColumn()
  lid_status_id: LidStatus;

  @OneToOne(() => ReasonLid)
  @JoinColumn()
  cancel_reason_id: ReasonLid;
}
