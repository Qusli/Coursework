import { RoleEntity } from "src/users/role/model/role.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "user"})
export class UserEntity{
    @PrimaryGeneratedColumn()
    user_id: number
    
    @Column({ type: "varchar", length: 60, unique: false, nullable: false})
    surname: string

    @Column({ type: "varchar",  length: 60, unique: false, nullable: false})
    name: string

    @Column({ type: "varchar", length: 60, unique: false, nullable: false })
    lastname: string

    @Column({ type: "varchar", length: 60, unique: true, nullable: false })
    phone: string

    @Column({ type: "varchar", length: 60, unique: true, nullable: false })
    email: string

    @OneToOne(() => RoleEntity, (id: RoleEntity) => id.role_id)
    @JoinColumn({ name:"role_id" })
    @Column({ name:"role_id", default: 2})
    role_id: RoleEntity

    @Column({ type: "varchar", length:255, unique: true, nullable: true })
    token: string

    @Column({ type: "varchar", length: 60, unique: false, nullable: false })
    password: string

    
}