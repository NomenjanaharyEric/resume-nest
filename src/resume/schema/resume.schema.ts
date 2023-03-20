import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Experience } from "src/experience/schema/experience.schema";
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
    
}

export const ResumeSchema = SchemaFactory.createForClass(Resume);