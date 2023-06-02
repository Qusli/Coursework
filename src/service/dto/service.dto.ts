import { PersonalEntity } from "src/personal/model/personal.entity"

export class ServiceDto{
    service_id: number
    personal_id: PersonalEntity
    service: string
    price: number
}