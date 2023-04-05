import { Body, Controller, Get, Param, Patch, Post, Req, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/guard";
import {  CreateUserDto, UpdateUserDto } from "./dto";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {

    constructor(private userService: UserService){}

    @Post()
    create(@Body() createUserDto: CreateUserDto){
        return this.userService.create(createUserDto);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    findAll()
    {
        return this.userService.findAll();
    }

    @Get("/one")
    @UseGuards(JwtAuthGuard)
    findById(@Req() req:any)
    {
        return this.userService.findById(req.user.userId);
    }

    @Patch('/:id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto)
    {
        return this.userService.update(id, updateUserDto);
    }

}