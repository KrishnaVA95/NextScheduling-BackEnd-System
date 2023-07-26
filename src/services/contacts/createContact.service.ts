import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import { TContactRequest, TContactResponse } from "../../interfaces/contacts.interfaces";
import { contactSchema } from "../../schemas/contacts.schema";



const createContactService = async (data: TContactRequest, userId: string): Promise<TContactResponse> => {
    const userRepository = AppDataSource.getRepository(User)
    const contactRepository = AppDataSource.getRepository(Contact)

    const user = await userRepository.findOne({
        where: {
            id: userId
        }
    })

    if (!user) {
        throw new AppError("User not found", 404)
    }

    const contact = contactRepository.create({
        ...data,
        user
    })

    await contactRepository.save(contact)
    
    return contactSchema.parse(contact)
}

export { createContactService }