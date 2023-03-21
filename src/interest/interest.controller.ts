import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard';
import { CreateInterestDto, UpdateInterestDto } from './dto';
import { InterestService } from './interest.service';

@Controller('interest')
export class InterestController {
    constructor(private interestService: InterestService){}

    @Get('/resume/:id')
    @UseGuards(JwtAuthGuard)
    findByResume(@Param('id') resumeId: string)
    {
        return this.interestService.findByResume(resumeId);
    }

    @Get('/:id')
    @UseGuards(JwtAuthGuard)
    find(@Param('id') interestId: string)
    {
        return this.interestService.findByResume(interestId);
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Body() createInterestDto: CreateInterestDto)
    {
        return this.interestService.create(createInterestDto);
    }

    @Patch('/:id')
    @UseGuards(JwtAuthGuard)
    update(@Param('id') interestId: string , @Body() updateInterestDto: UpdateInterestDto)
    {
        return this.interestService.update(interestId ,updateInterestDto);
    }

    @Delete('/:id')
    @UseGuards(JwtAuthGuard)
    remove(@Param('id') interestId: string)
    {
        return this.interestService.remove(interestId);
    }
}
