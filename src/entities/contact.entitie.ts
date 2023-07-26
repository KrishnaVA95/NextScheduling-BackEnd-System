import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    CreateDateColumn,  
    ManyToOne
} from "typeorm"
import { User } from "./user.entitie";


@Entity("contacts")
class Contact {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @CreateDateColumn()
    created_at: Date;
    
    @Column()
    phone: string;

    @ManyToOne(() => User)
    user: User
}

export { Contact }


// @Column("simple-array")
// phone: string[];