import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "role"})
export class RoleEntity{
    @PrimaryGeneratedColumn()
    role_id: number
    
    @Column({ type: "varchar", length:20, unique: true, nullable: false})
    role: string
}