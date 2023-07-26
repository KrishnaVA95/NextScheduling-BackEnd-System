import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entitie"
import { TListUsersResponse } from "../../interfaces/users.interfaces"
import { listUsersSchemaResponse } from "../../schemas/users.schema"


const listUsersService = async (): Promise<TListUsersResponse> => {
    const userRepository = AppDataSource.getRepository(User)

    const users: User[] = await userRepository.find()
    const returnUsers: TListUsersResponse = listUsersSchemaResponse.parse(users)

    return returnUsers
}

export default listUsersService