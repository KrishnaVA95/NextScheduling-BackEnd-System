import { Repository } from 'typeorm'
import { User } from '../../entities/user.entitie'
import { AppDataSource } from '../../data-source'
import { AppError } from '../../errors/AppError'

const deleteUsersService = async (userId: string): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOneBy({
        id: userId,
    })

    if (!user) {
        throw new AppError("User not found", 404)
    }

    // await userRepository.softRemove(user!)
    await userRepository.remove(user)
}

export { deleteUsersService } 