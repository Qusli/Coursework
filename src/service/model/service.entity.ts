import { PersonalEntity } from "src/personal/model/personal.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "service" })
export class ServiceEntity{
    @PrimaryGeneratedColumn()
    service_id: number

    @ManyToOne(() => PersonalEntity, (id: PersonalEntity) => id.personal_id)
    @JoinColumn({ name:"personal_id" })
    @Column({ name: "personal_id" })
    personal_id: PersonalEntity

    @Column({ type: "varchar", length: 255, unique: false, nullable: false })
    service: string

    @Column({ type: "int8", unique: false, nullable: false })
    price: number
}