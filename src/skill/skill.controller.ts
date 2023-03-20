import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { CreateSkillDto, UpdateSkillDto } from './dto';
import { SkillService } from './skill.service';

@Controller('skill')
export class SkillController {
    constructor(private skillService: SkillService){}

    @Get('/resume/:id')
    findByResume(@Param('id') resumeId: string)
    {
        return this.skillService.findByResume(resumeId);
    }

    @Get('/:id')
    find(@Param('id') skillId: string)
    {
        return this.skillService.find(skillId);
    }

    @Post()
    create(@Body() createSkillDto: CreateSkillDto)
    {
        return this.skillService.create(createSkillDto);
    }

    @Patch('/:id')
    update(@Param('id') skillId: string, @Body() updateSkillDto: UpdateSkillDto)
    {
        return this.skillService.update(skillId, updateSkillDto);
    }

    @Delete('/:id')
    remove(@Param('id') skillId: string)
    {
        return this.skillService.remove(skillId);
    }
}
