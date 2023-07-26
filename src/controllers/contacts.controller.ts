import { Request, Response } from "express";
import { createContactService } from "../services/contacts/createContact.service";
import { listContactsOfUserService } from "../services/contacts/listContacts.service";
import { updateContactService } from "../services/contacts/updateContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";



const createContactController = async (req: Request, res: Response) =>{
    const userId = res.locals.userId
    const newContact = await createContactService(req.body, userId)
    return res.status(201).json(newContact)
}
const listContactController = async (req: Request, res: Response) =>{
    const userId = res.locals.userId
    const contacts = await listContactsOfUserService(userId)
    return res.json(contacts)
}

const updateContactController = async (req: Request, res: Response) =>{
    const updateContact = await updateContactService(req.body, req.params.id)
    return res.status(200).json(updateContact)
}

const deleteContactController = async (req: Request, res: Response) =>{
    await deleteContactService(req.params.id)
    return res.status(204).send()
}

export {
    createContactController,
    listContactController,
    updateContactController,
    deleteContactController,
}