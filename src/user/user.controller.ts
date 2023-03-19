import { Body, Controller, Get, Param, Patch, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/guard";
import {  UpdateUserDto } from "./dto";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {

    constructor(private userService: UserService){}

    @Get()
    findAll()
    {
        return this.userService.findAll();
    }

    @Get('/:id')
    @UseGuards(JwtAuthGuard)
    findById(@Param('id') id: string)
    {
        return this.userService.findById(id);
    }

    @Patch('/:id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto)
    {
        return this.userService.update(id, updateUserDto);
    }

}