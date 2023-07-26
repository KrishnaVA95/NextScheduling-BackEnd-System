import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import listUsersService from "../services/users/listUsers.service";
import { updateUsersService } from "../services/users/updateUser.service";
import { deleteUsersService } from "../services/users/deleteUser.service";


const createUserController = async (req: Request, res: Response) =>{
    const newUser = await createUserService(req.body)
    return res.status(201).json(newUser)
}

const listUsersController = async (req: Request, res: Response) =>{
    const users = await listUsersService()
    return res.json(users)
}

const updateUserController = async (req: Request, res: Response) =>{
    const updateUser = await updateUsersService(req.body, req.params.id)
    return res.status(200).json(updateUser)
}


const deleteUserController = async (req: Request, res: Response) =>{
    await deleteUsersService(req.params.id)
    return res.status(204).send()
}

export {
    createUserController,
    listUsersController,
    updateUserController,
    deleteUserController
}