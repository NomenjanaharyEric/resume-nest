import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Resume } from "src/resume/schema/resume.schema";

export type InterestDocument = mongoose.HydratedDocument<Interest>;

@Schema()
export class Interest{
    @Prop({required: true})
    name: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Resume", required: true })
    resume: Resume;
}

export const InterestSchema = SchemaFactory.createForClass(Interest);