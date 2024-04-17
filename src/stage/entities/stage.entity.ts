import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Stage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;
}
