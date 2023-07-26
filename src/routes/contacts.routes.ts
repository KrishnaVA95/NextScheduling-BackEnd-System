import { Router } from "express";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middlewares";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { contactSchemaRequest, contactSchemaUpdate } from "../schemas/contacts.schema";
import { createContactController, deleteContactController, listContactController, updateContactController } from "../controllers/contacts.controller";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middlewares";


const contactsRoutes = Router()

contactsRoutes.post("", 
ensureAuthMiddleware,
ensureDataIsValidMiddleware(contactSchemaRequest), 
createContactController
)
contactsRoutes.get("", 
ensureAuthMiddleware,
listContactController
)

contactsRoutes.patch("/:id", 
ensureAuthMiddleware,
ensureIsOwnerMiddleware,
ensureDataIsValidMiddleware(contactSchemaUpdate), 
updateContactController
)

contactsRoutes.delete("/:id", 
ensureAuthMiddleware,
ensureIsOwnerMiddleware,
deleteContactController
)

export { contactsRoutes }