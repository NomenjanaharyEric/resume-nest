import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateResumeDto, UpdateResumeDto } from './dto';
import { Resume, ResumeDocument } from './schema/resume.schema';

@Injectable()
export class ResumeService {

    constructor(@InjectModel(Resume.name) private resumeModel: Model<ResumeDocument>){}

    async findAll(id: string){
        try {
            const resumes = await this.resumeModel.find({ owner: id }).exec();
            return resumes;
        } catch (error) {
            throw error;
        }
    }

    async find(id: string){
        try {
            const resume = await this.resumeModel.findById(id);
            return resume;
        } catch (error) {
            throw error;
        }
    }

    async create(createResumeDto: CreateResumeDto)
    {
        try {
            const resume = await this.resumeModel.create(createResumeDto);
            return resume;
        } catch (error) {
            throw error;
        }
    }

    async update(id: string, updateResumeDto: UpdateResumeDto)
    {
        try {
            const resume = await this.resumeModel.findByIdAndUpdate(id,updateResumeDto, { new: true });
            return resume;
        } catch (error) {
            throw error;
        }
    }

    async remove(id: string)
    {
        try {
            const resume = await this.resumeModel.findByIdAndRemove(id);
            return resume;
        } catch (error) {
            throw error;
        }
    }

}
