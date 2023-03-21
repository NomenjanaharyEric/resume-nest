import { IsString, IsNotEmpty, IsBoolean } from "class-validator";

export class CreateEducationDto{

    @IsString()
    @IsNotEmpty()
    title: string;

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