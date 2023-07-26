import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controllers/users.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/users.schema";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middlewares";
import { ensureUserHimselfMiddlewares } from "../middlewares/ensureUserIsHimself.middlewares";


const userRoutes = Router()


userRoutes.post("",
ensureDataIsValidMiddleware(userSchemaRequest),
createUserController)

userRoutes.get("",
listUsersController
)
userRoutes.patch("/:id",
ensureAuthMiddleware,
ensureUserHimselfMiddlewares,
ensureDataIsValidMiddleware(userSchemaUpdate),
updateUserController
)
userRoutes.delete("/:id",
ensureAuthMiddleware,
ensureUserHimselfMiddlewares,
deleteUserController
)


export { userRoutes }