import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors/AppError"



const ensureUserHimselfMiddlewares = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> =>{
    const userIdToken = res.locals.userId
    const idUserToBeUpdate = req.params.id



    if(userIdToken === idUserToBeUpdate){
        return next()
    }


    throw new AppError("Insufficient permission", 403)        
}

export { ensureUserHimselfMiddlewares }