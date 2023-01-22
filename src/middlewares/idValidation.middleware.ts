import { Request, Response, NextFunction } from "express";
import { idSchema } from "../schemas/job.schema.js";

export async function idValidation(req: Request, res: Response, next: NextFunction) {
    const {id}: {id?: string} = req.params;

    const validation = idSchema.validate(id);

    if ('error' in validation) {
        res.sendStatus(400);
        return;
    }

    next();
}