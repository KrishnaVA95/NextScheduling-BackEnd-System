import { z } from "zod"


const userSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    created_at: z.date(),
    phone: z.string()

})

const userSchemaRequest = userSchema.omit({
    id: true,
    created_at: true
})

const userSchemaResponse = userSchema.omit({
    password: true
})

const listUsersSchemaResponse = z.array(userSchemaResponse)


const userSchemaUpdate = userSchemaRequest.partial()


export { userSchema, userSchemaRequest, userSchemaResponse, listUsersSchemaResponse, userSchemaUpdate }