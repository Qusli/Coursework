import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './model/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt/dist';
import { UserDto } from './dto/user.dto';
import { createHash } from 'crypto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
        private readonly jwt: JwtService
    ){}

    async Registration(dto: UserDto){
        const phone = await this.userRepository.findOneBy({
            phone: dto.phone,
        }), email = await this.userRepository.findOneBy({
            email: dto.email
        })

        if(phone || email){
            return {message: "Пользователя не существует.", code: 404}
        }
        if(dto.password.length < 8){
            return {message: "Пароль должен быть не короче 8 символов.", code: 411}
        }

        dto.password = createHash("md5").update(dto.password).digest('hex')


        return await this.userRepository.save(dto)
    }

    async Login(dto: UserDto){
        const user = await this.userRepository.findOneBy({
            email: dto.email,
            password: createHash("md5").update(dto.password).digest('hex')
        })

        if(!user){
            return {message: "Пользователя не существует.", code: 404}
        }

        const token = this.jwt.sign(dto)

        user.token = token

        return {
            "token": (await this.userRepository.save(user)).token
        }
    }

    async LogOut(email: string){
        const user = await this.userRepository.findOneBy({email: email})

        user.token = null

        return this.userRepository.save(user)
    }

    async DeleteUserById(id: number){
        const user = await this.userRepository.findOneBy({user_id: id})

        if(!user){
            return {message: "Пользователя не существует.", code: 404}
        }
        
        return await this.userRepository.remove(user);
    }

    async UpdateRole(id: number, dto: UserDto){
        const user = await this.userRepository.findOneBy({user_id: id})

        if(!user){
            return {message: "Пользователя не существует.", code: 404}
        }

        user.role_id = dto.role_id

        return await this.userRepository.save(user)
    }

    async UpdatePassword(token: string, dto: UserDto){
        const user = await this.userRepository.findOneBy({token: token})

        if(!user){
            return {message: "Пользователя не существует.", code: 404}
        }

        if(dto.password.length < 8){
            return {message: "Пароль должен быть не короче 8 символов.", code: 411}
        }

        user.password = createHash("md5").update(dto.password).digest('hex')

        return this.userRepository.save(user)
    }

    async UpdateDataUser(token: string, dto: UserDto){
        const user = await this.userRepository.findOneBy({token: token})

        user.lastname = dto.lastname
        user.name = dto.name
        user.surname = dto.surname
        user.email = dto.email
        user.phone = dto.phone

        return this.userRepository.save(user)
    }
}
