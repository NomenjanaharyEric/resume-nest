import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Resume, ResumeDocument } from 'src/resume/schema/resume.schema';
import { CreateExperienceDto } from './dto';
import { Experience, ExperienceDocument } from './schema/experience.schema';

@Injectable()
export class ExperienceService {

    constructor(
        @InjectModel(Experience.name) private experienceModel: Model<ExperienceDocument>,
        @InjectModel(Resume.name) private resumeModel: Model<ResumeDocument>
    ){}

    async findByResume(resumeId: string)
    {
        try {
            const experiences = await this.experienceModel.find({ resume: resumeId }).exec();
            return experiences;
        } catch (error) {
            throw error;
        }
    }

    async find(experienceId: string): Promise<Experience>
    {
        try {
            const experience = await this.experienceModel.findById(experienceId);
            return experience;
        } catch (error) {
            throw error;
        }
    }

    async create(createExperienceDto: CreateExperienceDto)
    {
        try {
            const resume = await this.resumeModel.findById(createExperienceDto.resume);
            const experience = await this.experienceModel.create(createExperienceDto);

            resume.experiences.push(experience);
            await resume.save();

            return experience;
        } catch (error) {
            throw error;
        }
    }

    async update(id: string, updateExperienceDto: any)
    {
        try {
            const experience = await this.experienceModel.findByIdAndUpdate(id,updateExperienceDto);
            await experience.save();
            
            return experience;
        } catch (error) {
            throw error;
        }
    }

    async remove(id: string)
    {
        try {
            const experience = await this.experienceModel.findByIdAndDelete(id);

            // Update resume experiences
            await this.resumeModel.findByIdAndUpdate(experience.resume,{
                $pull: { experiences: experience.id }
            }, { new: true });
            
            return experience;
        } catch (error) {
            throw error;
        }
    }
}
