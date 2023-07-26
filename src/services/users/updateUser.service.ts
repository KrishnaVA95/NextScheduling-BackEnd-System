import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entitie'
import { TUserResponse, TUserUpdateRequest } from '../../interfaces/users.interfaces'
import { userSchemaResponse } from '../../schemas/users.schema'
import { AppError } from "../../errors/AppError";

const updateUsersService = async (
    userData: TUserUpdateRequest,
    userId: string
): Promise<TUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const oldUserData: User | null = await userRepository.findOneBy({
        id: userId,
    })

    if (!oldUserData) {
        throw new AppError("User not found", 404)
    }

    const newUserData: User = userRepository.create({
        ...oldUserData,
        ...userData,
    })
    
    await userRepository.save(newUserData)

    const returnUser: TUserResponse = userSchemaResponse.parse(newUserData)

    return returnUser
}

export { updateUsersService } 