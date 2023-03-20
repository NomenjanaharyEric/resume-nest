import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Resume } from "src/resume/schema/resume.schema";

export type SkillDocument = mongoose.HydratedDocument<Skill>

@Schema()
export class Skill
{
    @Prop({ required: true, })
    title: string;

    @Prop({ required: true, })
    level: number;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref:'Resume' })
    resume: Resume;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);