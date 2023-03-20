import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Resume, ResumeDocument } from 'src/resume/schema/resume.schema';
import { CreateLanguageDto, UpdateLanguageDto } from './dto';
import { Language, LanguageDocument } from './schema/language.schema';

@Injectable()
export class LanguageService {
    
    constructor(
        @InjectModel(Language.name) private languageModel: Model<LanguageDocument>,
        @InjectModel(Resume.name) private resumeModel: Model<ResumeDocument>
    ){}

    async findByResume(resumeId: string){
        try {
            const languages = await this.languageModel.find({ resume: resumeId }).exec();
            return languages;
        } catch (error) {
            throw error;
        }
    }

    async find(languageId: string): Promise<Language>{
        try {
            return this.languageModel.findById(languageId);
        } catch (error) {
            throw error;
        }
    }

    async create(createLanguageDto: CreateLanguageDto): Promise<Language>{
        try {
            const language = await this.languageModel.create(createLanguageDto);

            await this.resumeModel.findByIdAndUpdate(language.resume,{
                $push: {
                    languages: language.id
                }
            }, { new: true });

            return language;
        } catch (error) {
            throw error;
        }
    }

    async update(languageId: string, updateLanguageDto: UpdateLanguageDto){
        try {
            const language = await this.languageModel.findByIdAndUpdate(languageId, updateLanguageDto, { new: true });
            return language;
        } catch (error) {
            throw error;
        }
    }

    async remove(languageId: string){
        try {
            const language = await this.languageModel.findByIdAndDelete(languageId);

            await this.resumeModel.findByIdAndUpdate(language.resume, {
                $pull: {
                    languages: language.id
                }
            });

            return language;
        } catch (error) {
            throw error;
        }
    }
}
