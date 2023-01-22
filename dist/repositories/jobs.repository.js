import { connection } from "../database/database.js";
export function insertJob(_a) {
    var position = _a.position, company = _a.company, salary = _a.salary;
    return connection.query("\n        INSERT INTO jobs\n        (position, company, salary)\n        VALUES ($1, $2, $3);\n    ", [position, company, salary]);
}
export function selectJobs() {
    return connection.query('SELECT * FROM jobs;');
}
export function selectSpecificJobs(letters) {
    return connection.query("\n        SELECT * FROM jobs\n        WHERE position iLIKE '%".concat(letters, "%';\n    "));
}
export function updateJob(id) {
    return connection.query("\n        UPDATE jobs\n        SET summoned = TRUE\n        WHERE id = $1\n        RETURNING *;\n    ", [id]);
}
export function dropJob(id) {
    return connection.query("\n        DELETE FROM jobs\n        WHERE id = $1\n        RETURNING *;\n    ", [id]);
}
