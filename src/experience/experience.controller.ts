import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard';
import { CreateExperienceDto, UpdateExperienceDto } from './dto';
import { ExperienceService } from './experience.service';

@Controller('experience')
export class ExperienceController {

    constructor(private experienceService: ExperienceService){}

    @Get('/resume/:id')
    @UseGuards(JwtAuthGuard)
    findAll(@Param('id') id: string)
    {
        return this.experienceService.findByResume(id);
    }

    @Get('/:id')
    @UseGuards(JwtAuthGuard)
    find(@Param('id') id: string)
    {
        return this.experienceService.find(id);
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Body() createExperienceDto: CreateExperienceDto)
    {
        return this.experienceService.create(createExperienceDto);
    }

    @Patch('/:id')
    @UseGuards(JwtAuthGuard)
    update(@Param('id') id: string, @Body() updateExperienceDto: UpdateExperienceDto)
    {
        return this.experienceService.update(id, updateExperienceDto);
    }

    @Delete('/:id')
    @UseGuards(JwtAuthGuard)
    remove(@Param('id') id: string)
    {
        return this.experienceService.remove(id);
    }    

}
