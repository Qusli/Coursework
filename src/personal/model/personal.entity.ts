import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "personal" })
export class PersonalEntity{
    @PrimaryGeneratedColumn()
    personal_id: number

    @Column({ type: "varchar", length: 60, unique: false, nullable: false})
    surname: string

    @Column({ type: "varchar",  length: 60, unique: false, nullable: false})
    name: string

    @Column({ type: "varchar", length: 60, unique: false, nullable: false })
    lastname: string

    @Column({ type: "varchar", length: 60, unique: true, nullable: false })
    phone: string

    @Column({ type: "varchar", length: 20, unique:false, nullable: false })
    experience: string
}