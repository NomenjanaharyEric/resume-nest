import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Resume, ResumeDocument } from 'src/resume/schema/resume.schema';
import { CreateEducationDto, UpdateEducationDto } from './dto';
import { Education, EducationDocument } from './schema/education.schema';

@Injectable()
export class EducationService {

    constructor(
        @InjectModel(Education.name) private educationModel: Model<EducationDocument>,
        @InjectModel(Resume.name) private resumeModel: Model<ResumeDocument>,
    ){}

    async findByResume(resumeId: string){
        try {
            const educations = await this.educationModel.find({ resume: resumeId }).exec();
            return educations;
        } catch (error) {
            throw error;
        }
    }

    async find(educationId: string): Promise<Education>{
        try {
            const education = await this.educationModel.findById(educationId);
            return education;
        } catch (error) {
            throw error;
        }
    }

    async create(createEducationDto: CreateEducationDto): Promise<Education>{
        try {
            const education = await this.educationModel.create(createEducationDto);

            await this.resumeModel.findByIdAndUpdate(education.resume, {
                $push: {
                    educations: education
                }
            }, { new: true });
            

            return education;
        } catch (error) {
            throw error;
        }
    }

    async update(educationId: string, updateEducationDto: UpdateEducationDto){
        try {
            const education = await this.educationModel.findByIdAndUpdate(educationId, updateEducationDto, { new: true });
            return education;
        } catch (error) {
            throw error;
        }
    }

    async remove(educationId: string){
        try {
            const education = await this.educationModel.findByIdAndDelete(educationId);

            await this.resumeModel.findByIdAndUpdate(education.resume, {
                $pull: {
                    educations: education
                }
            }, { new: true });

            return education;
        } catch (error) {
            throw error;
        }
    }

}
