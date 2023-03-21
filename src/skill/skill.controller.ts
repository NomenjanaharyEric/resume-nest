import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard';
import { CreateSkillDto, UpdateSkillDto } from './dto';
import { SkillService } from './skill.service';

@Controller('skill')
export class SkillController {
    constructor(private skillService: SkillService){}

    @Get('/resume/:id')
    @UseGuards(JwtAuthGuard)
    findByResume(@Param('id') resumeId: string)
    {
        return this.skillService.findByResume(resumeId);
    }

    @Get('/:id')
    @UseGuards(JwtAuthGuard)
    find(@Param('id') skillId: string)
    {
        return this.skillService.find(skillId);
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Body() createSkillDto: CreateSkillDto)
    {
        return this.skillService.create(createSkillDto);
    }

    @Patch('/:id')
    @UseGuards(JwtAuthGuard)
    update(@Param('id') skillId: string, @Body() updateSkillDto: UpdateSkillDto)
    {
        return this.skillService.update(skillId, updateSkillDto);
    }

    @Delete('/:id')
    @UseGuards(JwtAuthGuard)
    remove(@Param('id') skillId: string)
    {
        return this.skillService.remove(skillId);
    }
}
