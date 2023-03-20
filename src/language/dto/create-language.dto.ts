import { IsString, IsNotEmpty, IsBoolean } from "class-validator";

export class CreateLanguageDto{

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsBoolean()
    native: boolean;

    @IsBoolean()
    read: boolean;

    @IsBoolean()
    write: boolean;

    @IsBoolean()
    speak: boolean;
    
    @IsString()
    @IsNotEmpty()
    resume: string;

}