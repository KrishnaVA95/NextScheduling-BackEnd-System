import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controllers/users.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/users.schema";


const userRoutes = Router()


userRoutes.post("",
ensureDataIsValidMiddleware(userSchemaRequest),
createUserController)

userRoutes.get("",
listUsersController
)
userRoutes.patch("/:id",
ensureDataIsValidMiddleware(userSchemaUpdate),
updateUserController
)
userRoutes.delete("/:id",
deleteUserController
)


export { userRoutes }