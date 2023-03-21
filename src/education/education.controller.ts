import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { CreateEducationDto, UpdateEducationDto } from './dto';
import { EducationService } from './education.service';

@Controller('education')
export class EducationController {

    constructor(private educationService: EducationService){}

    @Get('/resume/:resumeId')
    findByResume(@Param('resumeId') resumeId: string)
    {
        return this.educationService.findByResume(resumeId);
    }

    @Get('/:id')
    find(@Param('id') educationId: string)
    {
        return this.educationService.find(educationId);
    }

    @Post()
    create(@Body() createEducationDto: CreateEducationDto)
    {
        return this.educationService.create(createEducationDto);
    }

    @Patch('/:id')
    update(@Param('id') educationId: string, @Body() updateEducationDto: UpdateEducationDto)
    {
        return this.educationService.update(educationId, updateEducationDto);
    }

    @Delete('/:id')
    remove(@Param('id') educationId: string)
    {
        return this.educationService.remove(educationId);
    }
}
