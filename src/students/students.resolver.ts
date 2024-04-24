import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Student } from './entities/student.entity';

@Resolver('students')
export class StudentsResolver {
  constructor(private readonly studentsService: StudentsService) {}

  @Mutation(() => Student)
  createStudent(@Args('createStudent') createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Query(() => [Student])
  findAllStudent() {
    return this.studentsService.findAll();
  }

  @Query(() => Student)
  findStudentById(@Args('id') id: string) {
    return this.studentsService.findOne(+id);
  }

  @Mutation(() => Student)
  updateStudent(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateStudent') updateStudentDto: UpdateStudentDto,
  ) {
    return this.studentsService.update(+id, updateStudentDto);
  }

  @Mutation(() => Student)
  removeStudent(@Args('id', { type: () => ID }) id: string) {
    return this.studentsService.remove(+id);
  }
}
