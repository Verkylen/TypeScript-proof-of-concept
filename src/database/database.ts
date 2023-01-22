import pg from "pg";

export const connection = new pg.Pool({
    user: 'postgres',
    password: 'YOUR_PASSWORD',
    host: 'localhost',
    port: 5432,
    database: 'YOUR_DUMPED_DATABASE'
});