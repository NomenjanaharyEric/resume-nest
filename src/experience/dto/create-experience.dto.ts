import { IsString, IsNotEmpty } from "class-validator";

export class CreateExperienceDto
{
    @IsString()
    @IsNotEmpty()
    enterprise: string;
    @IsString()
    @IsNotEmpty()
    title: string;
    @IsString()
    @IsNotEmpty()
    startDate: string;
    @IsString()
    @IsNotEmpty()
    endDate: string;
    @IsString()
    @IsNotEmpty()
    location: string;
    @IsString()
    @IsNotEmpty()
    description: string;
    @IsString()
    @IsNotEmpty()
    resume: string;
}