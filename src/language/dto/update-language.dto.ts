import { IsString, IsNotEmpty, IsBoolean } from "class-validator";

export class UpdateLanguageDto
{
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsBoolean()
    @IsNotEmpty()
    native: boolean;

    @IsBoolean()
    @IsNotEmpty()
    read: boolean;

    @IsBoolean()
    @IsNotEmpty()
    write: boolean;

    @IsBoolean()
    @IsNotEmpty()
    speak: boolean;
    
}