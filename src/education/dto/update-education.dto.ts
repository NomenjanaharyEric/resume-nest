import { IsString, IsNotEmpty, IsBoolean } from "class-validator";

export class UpdateEducationDto{

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

}