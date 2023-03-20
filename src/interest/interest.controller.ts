import { Controller, Get, Post, Patch, Delete, Param, Body} from '@nestjs/common';
import { CreateInterestDto, UpdateInterestDto } from './dto';
import { InterestService } from './interest.service';

@Controller('interest')
export class InterestController {
    constructor(private interestService: InterestService){}

    @Get('/resume/:id')
    findByResume(@Param('id') resumeId: string)
    {
        return this.interestService.findByResume(resumeId);
    }

    @Get('/:id')
    find(@Param('id') interestId: string)
    {
        return this.interestService.findByResume(interestId);
    }

    @Post()
    create(@Body() createInterestDto: CreateInterestDto)
    {
        return this.interestService.create(createInterestDto);
    }

    @Patch('/:id')
    update(@Param('id') interestId: string , @Body() updateInterestDto: UpdateInterestDto)
    {
        return this.interestService.update(interestId ,updateInterestDto);
    }

    @Delete('/:id')
    remove(@Param('id') interestId: string)
    {
        return this.interestService.remove(interestId);
    }
}
