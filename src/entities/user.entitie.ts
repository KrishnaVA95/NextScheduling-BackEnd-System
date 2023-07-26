import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    CreateDateColumn,  
    OneToMany
} from "typeorm"
import { Contact } from "./contact.entitie";


@Entity("users")
class User {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;
    
    @Column()
    phone: string;

    @OneToMany(() => Contact, contact => contact.user)
    contacts: Contact[];
    
}

export { User }