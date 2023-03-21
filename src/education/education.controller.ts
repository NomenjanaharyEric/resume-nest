import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard';
import { CreateEducationDto, UpdateEducationDto } from './dto';
import { EducationService } from './education.service';

@Controller('education')
export class EducationController {

    constructor(private educationService: EducationService){}

    @Get('/resume/:resumeId')
    @UseGuards(JwtAuthGuard)
    findByResume(@Param('resumeId') resumeId: string)
    {
        return this.educationService.findByResume(resumeId);
    }

    @Get('/:id')
    @UseGuards(JwtAuthGuard)
    find(@Param('id') educationId: string)
    {
        return this.educationService.find(educationId);
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Body() createEducationDto: CreateEducationDto)
    {
        return this.educationService.create(createEducationDto);
    }

    @Patch('/:id')
    @UseGuards(JwtAuthGuard)
    update(@Param('id') educationId: string, @Body() updateEducationDto: UpdateEducationDto)
    {
        return this.educationService.update(educationId, updateEducationDto);
    }

    @Delete('/:id')
    @UseGuards(JwtAuthGuard)
    remove(@Param('id') educationId: string)
    {
        return this.educationService.remove(educationId);
    }
}
