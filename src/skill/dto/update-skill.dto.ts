import { IsString, IsNumberString, IsNotEmpty } from "class-validator";

export class UpdateSkillDto{

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNumberString()
    @IsNotEmpty()
    level: number;
}