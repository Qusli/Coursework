import { UserEntity } from "src/users/user/model/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "pet" })
export class PetEntity{
    @PrimaryGeneratedColumn()
    pet_id: number

    @Column({ type:"varchar", length: 60, unique:false, nullable: false })
    animal: string

    @Column({ type:"varchar", length: 60, unique:false, nullable: false })
    species: string

    @Column({ type:"varchar", length: 60, unique:false, nullable: false })
    moniker: string

    @Column({ type:"varchar", length: 1, unique:false, nullable: false })
    sex: string

    @ManyToOne(() => UserEntity, (id: UserEntity) => id.user_id)
    @JoinColumn({ name: "user_id" })
    @Column({ name:"user_id" })
    user_id: UserEntity
}