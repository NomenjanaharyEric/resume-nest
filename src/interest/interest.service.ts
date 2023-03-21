import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Resume, ResumeDocument } from 'src/resume/schema/resume.schema';
import { CreateInterestDto, UpdateInterestDto } from './dto';
import { Interest, InterestDocument } from './schema/interest.schema';

@Injectable()
export class InterestService {
    constructor(
        @InjectModel(Interest.name) private interestModel: Model<InterestDocument>,
        @InjectModel(Resume.name) private resumeModel: Model<ResumeDocument>,
    ){}

    async findByResume(resumeId: string){
        try {
            const interests = await this.interestModel.find({ resume: resumeId }).exec();
            return interests;
        } catch (error) {
            throw error;
        }
    }

    async find(interestId: string){
        try {
            return this.interestModel.findById(interestId);
        } catch (error) {
            throw error;
        }
    }

    async create(createInterestDto: CreateInterestDto){
        try {
            const interest = await this.interestModel.create(createInterestDto);

            await this.resumeModel.findByIdAndUpdate(interest.resume, {
                $push: {
                    interests: interest.id
                }
            }, { new: true });

            return interest;
        } catch (error) {
            throw error;
        }
    }

    async update(interestId: string, updateInterestDto: UpdateInterestDto){
        try {
            const interest = await this.interestModel.findByIdAndUpdate(interestId, updateInterestDto, { new: true });
            return interest;
        } catch (error) {
            throw error;
        }
    }

    async remove(interestId: string){
        try {
            const interest = await this.interestModel.findByIdAndDelete(interestId);

            await this.resumeModel.findByIdAndUpdate(interest.resume, {
                $pull: {
                    interests: interest.id
                }
            }, { new: true });
            
            return interest;
        } catch (error) {
            throw error;
        }
    }
}
