import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import { AppError } from "../../errors/AppError";
import { TContactResponse, TContactUpdate } from "../../interfaces/contacts.interfaces";
import { contactSchema } from "../../schemas/contacts.schema";



const updateContactService = async (data: TContactUpdate, contactId: string): Promise<TContactResponse> => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const oldContact = await contactRepository.findOneBy({ id: contactId })

    if (!oldContact) {
        throw new AppError("Contact not found", 404)
    }

    const newContactData = contactRepository.create({
        ...oldContact,
        ...data
    })

    await contactRepository.save(newContactData)


    return contactSchema.parse(newContactData)

}

export { updateContactService }