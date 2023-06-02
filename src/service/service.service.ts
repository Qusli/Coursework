import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceEntity } from './model/service.entity';
import { ServiceDto } from './dto/service.dto';

@Injectable()
export class ServiceService {
    constructor(
        @InjectRepository(ServiceEntity) private readonly serviceRepository: Repository<ServiceEntity>
    ){}

    async GetAllService(limit: number){
        return await this.serviceRepository.find({take: limit})
    }

    async CreateService(dto: ServiceDto){
        return await this.serviceRepository.save(dto)
    }

    async UpdateService(id: number, dto: ServiceDto){
        const service = await this.serviceRepository.findOneBy({service_id: id})

        service.service = dto.service
        service.price = dto.price

        return this.serviceRepository.save(service)
    }

    async DeleteService(id: number){
        const personal = await this.serviceRepository.findOneBy({service_id: id})
        return await this.serviceRepository.delete(personal)
    }
}
