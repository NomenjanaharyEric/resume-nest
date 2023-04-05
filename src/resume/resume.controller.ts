import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard';
import { CreateResumeDto, UpdateResumeDto } from './dto';
import { ResumeService } from './resume.service';

@Controller('resume')
export class ResumeController {

    constructor(private resumeService: ResumeService){}

    @Get()
    @UseGuards(JwtAuthGuard)
    findAll(@Req() req: any)
    {        
        return this.resumeService.findAll(req.user.userId);
    }

    @Get('/:id')
    @UseGuards(JwtAuthGuard)
    find(@Param("id") id: string){
        return this.resumeService.find(id);
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Body() resumeDto: CreateResumeDto) {
        return this.resumeService.create(resumeDto);
    }

    @Patch('/:id')
    @UseGuards(JwtAuthGuard)
    update(@Param('id') id: string, @Body() updateResumeDto: UpdateResumeDto)
    {
        return this.resumeService.update(id, updateResumeDto);
    }

    @Delete('/:id')
    @UseGuards(JwtAuthGuard)
    remove(@Param('id') id: string )
    {
        return this.resumeService.remove(id);
    }
    
}
