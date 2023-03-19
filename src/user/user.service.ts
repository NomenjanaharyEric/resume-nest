import { Model } from "mongoose";
import { ForbiddenException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import * as argon from "argon2";
import { User, UserDocument } from "./schema/user.schema";
import { CreateUserDto } from "./dto";

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

    async create(createUserDto: CreateUserDto): Promise<User>
    {
        try {
            // verifier si l'email est deja utilisé par un autre utilisateur
            const existingEmail = await this.findOne(createUserDto.email);
            
            if(existingEmail){
                throw new ForbiddenException('Email Already In Use');
            }
            // Hasher le mot de passe de l'utilisateur
            const passwordHash = await argon.hash(createUserDto.password);

            // Enregistrer l'utilisateur en base de donnée
            const user = await this.userModel.create({
                username: createUserDto.username,
                email: createUserDto.email,
                password: passwordHash
            });

            return user;
        
        } catch (error) {
            throw error;
        }

    }

    async findOne(email: string): Promise<User>
    {
        const user = await this.userModel.findOne({ email });
        return user;
    }

}

