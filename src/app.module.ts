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
import { Stuff } from './stuff/entities/stuff.entity';
import { Role } from './role/entities/role.entity';
import { Group } from './group/entities/group.entity';
import { Branch } from './branch/entities/branch.entity';
import { StuffRole } from './role/entities/stuffRole.entity';
import { GroupStuff } from './stuff/entities/groupStuff.dto';
import { PaymentModule } from './payment/payment.module';
import { StudentsModule } from './students/students.module';
import { LessonModule } from './lesson/lesson.module';
import { StudentLessonModule } from './student_lesson/student_lesson.module';
import { Payment } from './payment/entities/payment.entity';
import { Student } from './students/entities/student.entity';
import { Lesson } from './lesson/entities/lesson.entity';
import { StudentLesson } from './student_lesson/entities/student_lesson.entity';
import { StudentGroup } from './students/entities/studentGroup.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', 
      password: 'root',
      database: 'hardwork',
      entities: [
        Stage,
        Lid,
        LidStatus,
        Target,
        ReasonLid,
        Stuff,
        Role,
        Group,
        Branch,
        StuffRole,
        GroupStuff,
        Payment,
        Student,
        Lesson,
        StudentLesson,
        StudentGroup,
      ],
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
    PaymentModule,
    StudentsModule,
    LessonModule,
    StudentLessonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
