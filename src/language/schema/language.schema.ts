import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Resume } from "src/resume/schema/resume.schema";

export type LanguageDocument = mongoose.HydratedDocument<Language>

@Schema()
export class Language
{
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    native: boolean;

    @Prop({ required: true })
    read: boolean;
    @Prop({ required: true })
    write: boolean;
    @Prop({ required: true })
    speak: boolean;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Resume", required: true })
    resume: Resume
}

export const LanguageSchema = SchemaFactory.createForClass(Language);