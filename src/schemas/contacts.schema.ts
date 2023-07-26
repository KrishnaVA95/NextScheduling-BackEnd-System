import { z } from "zod"


const contactSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    email: z.string().email(),
    created_at: z.date(),
    phone: z.string()
})
// phone: z.array(z.string())

const contactSchemaRequest = contactSchema.omit({
    id: true,
    created_at: true
})

const contactSchemaUpdate = contactSchema.omit({
    id: true,
    created_at: true
}).partial()

const listConstcSchemaResponse = z.array(contactSchema)


export { contactSchema, contactSchemaRequest, contactSchemaUpdate, listConstcSchemaResponse }