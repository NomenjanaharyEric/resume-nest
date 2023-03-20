import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Resume } from "src/resume/schema/resume.schema";

export type UserDocument = mongoose.HydratedDocument<User>;

@Schema()
export class User {

    @Prop({required: true })
    username: string;

    @Prop({required: true, unique: true})
    email: string;

    @Prop({required: true})
    password: string;

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: "Resume" })
    resumes: Resume[];
}

export const UserSchema = SchemaFactory.createForClass(User);