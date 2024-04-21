import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StageModule } from './stage/stage.module';
import { Stage } from './stage/entities/stage.entity';
import { LidStatusModule } from './lid_status/lid_status.module';
import { LidModule } from './lid/lid.module';
import { ReasonLidModule } from './reason_lid/reason_lid.module';
import { TargetModule } from './target_id/target_id.module';
import { Lid } from './lid/entities/lid.entity';
import { LidStatus } from './lid_status/entities/lid_status.entity';
import { Target } from './target_id/entities/target_id.entity';
import { ReasonLid } from './reason_lid/entities/reason_lid.entity';
import { AuthModule } from './auth/auth.module';
import { StuffModule } from './stuff/stuff.module';
import { RoleModule } from './role/role.module';
import { GroupModule } from './group/group.module';
import { BranchModule } from './branch/branch.module';
import { GroupStuffModule } from './group_stuff/group_stuff.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'hardwork',
      entities: [Stage, Lid, LidStatus, Target, ReasonLid],
      synchronize: true,
    }),
    AuthModule,
    StageModule,
    LidStatusModule,
    TargetModule,
    LidModule,
    ReasonLidModule,
    StuffModule,
    RoleModule,
    GroupModule,
    BranchModule,
    GroupStuffModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
