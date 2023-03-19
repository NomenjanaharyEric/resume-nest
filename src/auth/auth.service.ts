import { Injectable } from "@nestjs/common";
import { ForbiddenException } from "@nestjs/common/exceptions";
import { JwtService } from "@nestjs/jwt";
import * as argon from "argon2";
import { UserService } from "src/user/user.service";
import { LoginDto, RegisterDto } from "./dto";

@Injectable()
export class AuthService {

    constructor(private userService: UserService, private jwtService: JwtService){}
    
    async validateUser(loginDto: LoginDto){
        const user = await this.userService.findOne(loginDto.email);
        const passwordMatches = await argon.verify(user.password, loginDto.password);   

        if(!passwordMatches){
            throw new ForbiddenException('Invalid credentials');
        }

        if(user && passwordMatches){
            const { password, ...result } = user;
            return result;
        }

        return null;
    }

    async login(user: any)
    {
        const payload = { username: user.username, sub: user._id};
        return {
            access_token: this.jwtService.sign(payload),
        }
    }

}