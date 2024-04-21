import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Stuff } from '../../stuff/entities/stuff.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  group_name: string;

  @Column()
  lesson_start_time: string;

  @Column()
  lesson_continous: string;

  @Column()
  lesson_week_day: string;

  @Column()
  group_stage_id: number;

  @Column()
  room_number: string;

  @Column()
  room_floor: number;

  @Column()
  branch_id: number;

  @Column()
  lessons_quant: number;

  @Column()
  is_active: boolean;

  @ManyToMany(() => Stuff)
  @JoinTable()
  stuffs: Stuff[];
}
