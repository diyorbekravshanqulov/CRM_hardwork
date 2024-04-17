import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StageModule } from './stage/stage.module';
import { Stage } from './stage/entities/stage.entity';
import { LidStatusModule } from './lid_status/lid_status.module';
import { TargetIdModule } from './target_id/target_id.module';
import { LidModule } from './lid/lid.module';
import { ReasonLidModule } from './reason_lid/reason_lid.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'hardwork',
      entities: [Stage],
      synchronize: true,
    }),
    StageModule,
    LidStatusModule,
    TargetIdModule,
    LidModule,
    ReasonLidModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
