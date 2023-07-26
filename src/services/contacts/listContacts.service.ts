import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entitie"
import { User } from "../../entities/user.entitie"
import { AppError } from "../../errors/AppError"
import { TListContactsResponse } from "../../interfaces/contacts.interfaces"
import { listConstcSchemaResponse } from "../../schemas/contacts.schema"


const listContactsOfUserService = async (userId: string): Promise<TListContactsResponse> => {
    const userRepository = AppDataSource.getRepository(User)
    const contactRepository = AppDataSource.getRepository(Contact)

    const user = await userRepository.findOne({
        where: {
            id: userId
        },
        relations:{
            contacts: true
        }
        
    })

    if (!user) {
        throw new AppError("User not found", 404)
    }


    return listConstcSchemaResponse.parse(user.contacts)
}

export { listContactsOfUserService }

