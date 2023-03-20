import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Resume, ResumeSchema } from 'src/resume/schema/resume.schema';
import { ExperienceController } from './experience.controller';
import { ExperienceService } from './experience.service';
import { Experience, ExperienceSchema } from './schema/experience.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Experience.name, schema: ExperienceSchema },
      { name: Resume.name, schema: ResumeSchema },
    ]),
  ],
  controllers: [ExperienceController],
  providers: [ExperienceService]
})
export class ExperienceModule {}
