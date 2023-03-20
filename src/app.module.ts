import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ResumeModule } from './resume/resume.module';
import { ExperienceModule } from './experience/experience.module';
import { SkillModule } from './skill/skill.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AuthModule,
    UserModule,
    ResumeModule,
    ExperienceModule,
    SkillModule,
  ],
})
export class AppModule {}
