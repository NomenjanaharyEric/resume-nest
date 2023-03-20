import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Resume } from "src/resume/schema/resume.schema";

export type ExperienceDocument = mongoose.HydratedDocument<Experience>;

@Schema()
export class Experience
{

    @Prop({ required: true })
    enterprise: string;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    startDate: string;

    @Prop({ required: true })
    endDate: string;

    @Prop({ required: true })
    location: string;

    @Prop({ required: true })
    description: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref:"Resume"})
    resume: Resume

}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
