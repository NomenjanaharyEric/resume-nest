import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Resume } from "src/resume/schema/resume.schema";

export type EducationDocument = mongoose.HydratedDocument<Education>

@Schema()
export class Education{
    @Prop()
    title: string;

    @Prop()
    location: string;

    @Prop()
    startDate: string;

    @Prop()
    endDate: string;

    @Prop()
    actual: boolean;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Resume" })
    resume: Resume
}

export const EducationSchema = SchemaFactory.createForClass(Education);