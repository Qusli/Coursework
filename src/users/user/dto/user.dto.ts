import { RoleEntity } from "src/users/role/model/role.entity"

export class UserDto{
    id: number
    surname: string
    name: string
    lastname: string
    phone: string
    email: string
    role_id: RoleEntity
    token: string
    password: string
}