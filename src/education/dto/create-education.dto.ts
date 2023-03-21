import { IsString, IsNotEmpty, IsBoolean } from "class-validator";

export class CreateEducationDto{

    @IsString()
    @IsNotEmpty()
    school: string;

    @IsString()
    @IsNotEmpty()
    sector: string;

    @IsString()
    @IsNotEmpty()
    degree: string;

    @IsString()
    @IsNotEmpty()
    location: string;

    @IsString()
    @IsNotEmpty()
    startDate: string;
    
    @IsString()
    @IsNotEmpty()
    endDate: string;

    @IsBoolean()
    actual: boolean;

    @IsString()
    @IsNotEmpty()
    resume: string;
}