import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Resume, ResumeDocument } from 'src/resume/schema/resume.schema';
import { CreateSkillDto, UpdateSkillDto } from './dto';
import { Skill, SkillDocument } from './schema/skill.schema';

@Injectable()
export class SkillService {
    constructor(
        @InjectModel(Skill.name) private skillModel: Model<SkillDocument>,
        @InjectModel(Resume.name) private resumeModel: Model<ResumeDocument>,
    ){}

    async findByResume(resumeId: string)
    {
        try {
            const skills = await this.skillModel.find({ resume: resumeId }).exec();
            return skills;
        } catch (error) {
            throw error
        }
    }

    async find(skillId: string): Promise<Skill> {
        try {
            return this.skillModel.findById(skillId);
        } catch (error) {
            throw error;
        }
    }

    async create(createSkillDto: CreateSkillDto): Promise<Skill>
    {
        try {
            const skill = await this.skillModel.create(createSkillDto);

            await this.resumeModel.findByIdAndUpdate(skill.resume, {
                $push: {
                    skills: skill
                }
            }, { new: true })

            return skill;
        } catch (error) {
            throw error;
        }
    }

    async update(skillId: string, updateSkillDto: UpdateSkillDto): Promise<Skill>
    {
        try {
            const skill = await this.skillModel.findByIdAndUpdate(skillId, updateSkillDto);
            await skill.save();
            return skill;
        } catch (error) {
            throw error;
        }
    }

    async remove(skillId: string): Promise<Skill>
    {
        try {
            const skill = await this.skillModel.findByIdAndDelete(skillId);
            await this.resumeModel.findByIdAndUpdate(skill.resume,{
                $pull: {
                    skills: skill.id
                }
            }, { new: true });
            return skill;
        } catch (error) {
            throw error;
        }
    }
}
