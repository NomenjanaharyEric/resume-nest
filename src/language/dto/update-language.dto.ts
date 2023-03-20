import { IsString, IsNotEmpty, IsBoolean } from "class-validator";

export class UpdateLanguageDto
{
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
    
}