import { IsString, IsNumberString, IsNotEmpty } from "class-validator";

export class CreateSkillDto{

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNumberString()
    @IsNotEmpty()
    level: number;

    @IsString()
    @IsNotEmpty()
    resume: string;
}