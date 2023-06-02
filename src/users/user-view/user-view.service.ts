import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntityView } from './model/user-view.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserServiceView {
    constructor(@InjectRepository(UserEntityView) private readonly userRepositoryView: Repository<UserEntityView>){}

    async GetAllUsers(limit: number, id: number){
        return await this.userRepositoryView.find({take: limit, where: {user_id: id}});
    }

    async GetAllAdmins(limit: number, id: number){
        return await this.userRepositoryView.find({where: {role: "admin", user_id: id}, take:limit})
    }

    async GetUserByToken(token: string){
        return await this.userRepositoryView.findOneBy({token: token})
    }
}
