import { connection } from "../database/database.js";
import { QueryResult } from "pg";
import { Job } from "../protocols/job.js";

export function insertJob({position, company, salary}: Job): Promise<QueryResult> {
    return connection.query(`
        INSERT INTO jobs
        (position, company, salary)
        VALUES ($1, $2, $3);
    `, [position, company, salary]);
}

export function selectJobs(): Promise<QueryResult<Job>> {
    return connection.query('SELECT * FROM jobs;');
}

export function selectSpecificJobs(letters: string): Promise<QueryResult<Job>> {
    return connection.query(`
        SELECT * FROM jobs
        WHERE position iLIKE '%${letters}%';
    `);
}

export function updateJob(id: string): Promise<QueryResult<Job>> {
    return connection.query(`
        UPDATE jobs
        SET summoned = TRUE
        WHERE id = $1
        RETURNING *;
    `, [id]);
}

export function dropJob(id: string): Promise<QueryResult<Job>> {
    return connection.query(`
        DELETE FROM jobs
        WHERE id = $1
        RETURNING *;
    `, [id]);
}