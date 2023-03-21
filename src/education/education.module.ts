import { Module } from '@nestjs/common';
import { EducationService } from './education.service';
import { EducationController } from './education.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Education, EducationSchema } from './schema/education.schema';
import { Resume, ResumeSchema } from 'src/resume/schema/resume.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Education.name, schema: EducationSchema},
    { name: Resume.name, schema: ResumeSchema},
  ])],
  providers: [EducationService],
  controllers: [EducationController]
})
export class EducationModule {}
