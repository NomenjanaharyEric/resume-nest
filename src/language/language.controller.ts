import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { CreateLanguageDto, UpdateLanguageDto } from './dto';
import { LanguageService } from './language.service';

@Controller('language')
export class LanguageController {
    constructor(private languageService: LanguageService){}

    @Get('/resume/:id')
    findByResume(@Param('id') resumeId: string){
        return this.languageService.findByResume(resumeId);
    }

    @Get('/:id')
    find(@Param('id') languageId: string ){
        return this.languageService.find(languageId);
    }

    @Post()
    create(@Body() createLanguageDto: CreateLanguageDto){
        return this.languageService.create(createLanguageDto);
    }
    
    @Patch('/:id')
    update(@Param('id') languageId: string , @Body() updateLanguageDto: UpdateLanguageDto){
        return this.languageService.update(languageId, updateLanguageDto);
    }

    @Delete('/:id')
    remove(@Param('id') languageId: string)
    {
        return this.languageService.remove(languageId);
    }
}
