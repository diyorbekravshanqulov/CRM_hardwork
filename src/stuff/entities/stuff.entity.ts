import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../../role/entities/role.entity';

@Entity()
export class Stuff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fist_name: string;

  @Column()
  last_name: string;

  @Column()
  phone_number: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column()
  is_active: boolean;

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];
}
