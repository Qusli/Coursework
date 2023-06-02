import { UserEntity } from "src/users/user/model/user.entity"

export class PetDto{
    pet_id: number
    animal: string
    species: string
    moniker: string
    sex: string
    user_id: UserEntity
}