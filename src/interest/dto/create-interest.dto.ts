import { IsNotEmpty, IsString } from "class-validator";

export class CreateInterestDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    resume: string;
}