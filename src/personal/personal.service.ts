import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonalEntity } from './model/personal.entity';
import { Repository } from 'typeorm';
import { PersonalDto } from './dto/personal.dto';

@Injectable()
export class PersonalService {
    constructor(
        @InjectRepository(PersonalEntity) private readonly personalRepository: Repository<PersonalEntity>
    ){}

    async GetAllPersonal(limit: number){
        return await this.personalRepository.find({take: limit})
    }

    async CreatePersonal(dto: PersonalDto){
        return await this.personalRepository.save(dto)
    }

    async UpdatePersonal(id: number, dto: PersonalDto){
        const personal = await this.personalRepository.findOneBy({personal_id: id})

        personal.surname = dto.surname
        personal.name = dto.name
        personal.lastname = dto.lastname
        personal.phone = dto.phone
        personal.experience = dto.experience

        return this.personalRepository.save(personal)
    }

    async DeletePersonal(id: number){
        const personal = await this.personalRepository.findOneBy({personal_id: id})
        return this.personalRepository.delete(personal)
    }
}
