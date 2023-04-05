import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Education } from "src/education/schema/education.schema";
import { Experience } from "src/experience/schema/experience.schema";
import { Interest } from "src/interest/schema/interest.schema";
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
    email: string;

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

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: "Interest"})
    interests: Interest[]

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: "Education"})
    educations: Education[]
    
}

export const ResumeSchema = SchemaFactory.createForClass(Resume);