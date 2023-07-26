import { z } from "zod"
import { listUsersSchemaResponse, userSchema, userSchemaRequest, userSchemaResponse } from "../schemas/users.schema"
import { DeepPartial } from "typeorm"


type TUser = z.infer<typeof userSchema>
type TUserRequest = z.infer<typeof userSchemaRequest>
type TUserResponse = z.infer<typeof userSchemaResponse>
type TListUsersResponse = z.infer<typeof listUsersSchemaResponse>
type TUserUpdateRequest = DeepPartial<TUserRequest>

export { 
    TUser, 
    TUserRequest, 
    TUserResponse, 
    TListUsersResponse,
    TUserUpdateRequest 
}