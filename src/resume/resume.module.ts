import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResumeSchema, Resume } from './schema/resume.schema';
import { ResumeService } from './resume.service';
import { ResumeController } from './resume.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: Resume.name, schema: ResumeSchema }])],
    providers: [ResumeService],
    controllers: [ResumeController],
    exports:[MongooseModule]
})
export class ResumeModule {}
