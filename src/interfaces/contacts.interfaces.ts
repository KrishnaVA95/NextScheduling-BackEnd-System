import { z } from "zod"
import { 
    contactSchema, 
    contactSchemaRequest, 
    listConstcSchemaResponse, 
    contactSchemaUpdate 
} from "../schemas/contacts.schema"
import { DeepPartial } from "typeorm"


type TContact = z.infer<typeof contactSchema>
type TContactRequest = z.infer<typeof contactSchemaRequest>
type TContactResponse = z.infer<typeof contactSchema>
type TListContactsResponse = z.infer<typeof listConstcSchemaResponse>
type TContactUpdate = DeepPartial<TContactRequest>


export { 
    TContact, 
    TContactRequest, 
    TContactResponse, 
    TListContactsResponse, 
    TContactUpdate
}