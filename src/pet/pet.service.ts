import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PetEntity } from './model/pet.entity';
import { PetDto } from './dto/pet.dto';

@Injectable()
export class PetService {
    constructor(
        @InjectRepository(PetEntity) private petRepository: Repository<PetEntity>,
    ){}

    async GetAllPet(limit: number, id: number){
        return await this.petRepository.find({where: {pet_id: id}, take: limit})
    }

    async GetPetByUserId(id: any){
        return await this.petRepository.find({where: {user_id: id}})
    }

    async CreatePet(dto: PetDto, req: any){
        dto.user_id = req.user.user_id

        return await this.petRepository.save(dto)
    }

    async DeletePetByUserId(user_id: any, pet_id: number){
        const pet = await this.petRepository.find({where: {user_id: user_id, pet_id: pet_id}})

        return await this.petRepository.remove(pet)
    }

    async UpdateData(id: number, dto: PetDto){
        const pet = await this.petRepository.findOneBy({pet_id: id})

        pet.animal = dto.animal
        pet.species = dto.species
        pet.moniker = dto.moniker
        pet.sex = dto.sex

        return await this.petRepository.save(pet)
    }
}