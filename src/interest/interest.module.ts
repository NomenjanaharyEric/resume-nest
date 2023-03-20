import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Resume, ResumeSchema } from 'src/resume/schema/resume.schema';
import { InterestController } from './interest.controller';
import { InterestService } from './interest.service';
import { Interest, InterestSchema } from './schema/interest.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Interest.name, schema: InterestSchema },
    { name: Resume.name, schema: ResumeSchema },
  ])],
  controllers: [InterestController],
  providers: [InterestService]
})
export class InterestModule {}
