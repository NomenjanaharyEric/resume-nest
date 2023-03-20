import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Resume, ResumeSchema } from 'src/resume/schema/resume.schema';
import { Skill, SkillSchema } from './schema/skill.schema';
import { SkillController } from './skill.controller';
import { SkillService } from './skill.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Skill.name, schema: SkillSchema},
      { name: Resume.name, schema: ResumeSchema},
    ])
  ],
  controllers: [SkillController],
  providers: [SkillService]
})
export class SkillModule {}
