import { dropJob, insertJob, selectJobs, selectSpecificJobs, updateJob } from "../repositories/jobs.repository.js";
import { JobSchema } from "../schemas/job.schema.js";
import { Request, Response } from "express";
import { Job } from "../protocols/job.js";
import { Query } from "../protocols/job.js";

export async function postJob(req: Request, res: Response) {
    const {body}: {body: Job} = req;

    const validation = JobSchema.validate(body);

    if ('error' in validation) {
        res.status(422).send(validation.error.details);
        return;
    }

    try {
        await insertJob(body);
        res.sendStatus(200);
    } catch {
        res.sendStatus(500);
    }
}

export async function getJobs({}, res: Response) {
    try {
        const {rows}: {rows: Job[]} = await selectJobs();

        res.send(rows);
    } catch {
        res.sendStatus(500);
    }
}

export async function getJobsByMatch(req: Request, res: Response) {
    const {query}: {query: Query} = req;
    
    if ('letters' in req.query === false) {
        res.sendStatus(400);
        return;
    }

    const {letters}: {letters?: string} = query;

    if (letters === '') {
        res.sendStatus(400);
        return;
    }

    try {
        const {rows}: {rows: Job[]} = await selectSpecificJobs(query.letters);

        res.send(rows);
    } catch {
        res.sendStatus(500);
    }
}

export async function patchJob(req: Request, res: Response) {
    try {
        const {rowCount}: {rowCount: number} = await updateJob(req.params.id);

        if (rowCount === 0) {
            res.sendStatus(404);
            return;
        }

        res.sendStatus(200);
    } catch {
        res.sendStatus(500);
    }
}

export async function deleteJob(req: Request, res: Response) {
    try {
        const {rowCount}: {rowCount: number} = await dropJob(req.params.id);

        if (rowCount === 0) {
            res.sendStatus(404);
            return;
        }

        res.sendStatus(200);
    } catch {
        res.sendStatus(500);
    }
}