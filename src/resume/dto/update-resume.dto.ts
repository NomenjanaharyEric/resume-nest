import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UpdateResumeDto {

    @IsString()
    @IsNotEmpty()
    firstname: string;

    @IsString()
    lastname: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    dateofbirth: string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsString()
    @IsNotEmpty()
    adress: string;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    profile: string;

    @IsString()
    @IsNotEmpty()
    owner: string;

}