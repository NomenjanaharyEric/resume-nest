import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Resume, ResumeSchema } from 'src/resume/schema/resume.schema';
import { LanguageController } from './language.controller';
import { LanguageService } from './language.service';
import { Language, LanguageSchema } from './schema/language.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Language.name, schema: LanguageSchema },
    { name: Resume.name, schema: ResumeSchema },
  ])],
  controllers: [LanguageController],
  providers: [LanguageService]
})
export class LanguageModule {}
