import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class productEntity{
    @PrimaryGeneratedColumn()
    id : number

    @CreateDateColumn()
    date :Date
    
    @Column()
    name : string

    @Column()
    brand: string

    @Column()
    price: number

}