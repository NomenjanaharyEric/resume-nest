import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Experience } from "src/experience/schema/experience.schema";
import { Language } from "src/language/schema/language.schema";
import { Skill } from "src/skill/schema/skill.schema";
import { User } from "src/user/schema/user.schema";

export type ResumeDocument = mongoose.HydratedDocument<Resume>;

@Schema()
export class Resume {
    @Prop()
    firstname: string;

    @Prop()
    lastname: string;

    @Prop()
    dateofbirth: string;

    @Prop()
    phone: string;

    @Prop()
    adress: string;

    @Prop()
    title: string;

    @Prop()
    profile: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref:"User" })
    owner: User;

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: "Experience"})
    experiences: Experience[]

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: "Skill"})
    skills: Skill[]

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: "Language"})
    languages: Language[]
    
}

export const ResumeSchema = SchemaFactory.createForClass(Resume);