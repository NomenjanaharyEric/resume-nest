import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "src/user/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy, LocalStrategy } from "./strategy";

@Module({
    imports: [
        UserModule, 
        PassportModule,
        JwtModule.register({
            secret: "My_JWT_SECRET_IS_INCREDIBLE",
            signOptions: { expiresIn: '60d'}
        })
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService]
})
export class AuthModule {}