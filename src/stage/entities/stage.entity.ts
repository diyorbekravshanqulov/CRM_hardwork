import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Lid } from '../../lid/entities/lid.entity';

@Entity()
export class Stage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @OneToMany(() => Lid, (lid) => lid.lid_stage_id)
  lids: Lid[];
}
