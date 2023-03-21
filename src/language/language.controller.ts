import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard';
import { CreateLanguageDto, UpdateLanguageDto } from './dto';
import { LanguageService } from './language.service';

@Controller('language')
export class LanguageController {
    constructor(private languageService: LanguageService){}

    @Get('/resume/:id')
    @UseGuards(JwtAuthGuard)
    findByResume(@Param('id') resumeId: string){
        return this.languageService.findByResume(resumeId);
    }

    @Get('/:id')
    @UseGuards(JwtAuthGuard)
    find(@Param('id') languageId: string ){
        return this.languageService.find(languageId);
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Body() createLanguageDto: CreateLanguageDto){
        return this.languageService.create(createLanguageDto);
    }
    
    @Patch('/:id')
    @UseGuards(JwtAuthGuard)
    update(@Param('id') languageId: string , @Body() updateLanguageDto: UpdateLanguageDto){
        return this.languageService.update(languageId, updateLanguageDto);
    }

    @Delete('/:id')
    @UseGuards(JwtAuthGuard)
    remove(@Param('id') languageId: string)
    {
        return this.languageService.remove(languageId);
    }
}
