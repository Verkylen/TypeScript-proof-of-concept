import express, { Express } from 'express';
import { postJob, getJobs, getJobsByMatch, patchJob, deleteJob } from './controllers/jobs.controller.js';
import { idValidation } from './middlewares/idValidation.middleware.js';

const server: Express = express();
server.use(express.json());

server.post('/job', postJob);

server.get('/jobs', getJobs);

server.get('/match', getJobsByMatch);

server.patch('/summoned/:id', idValidation, patchJob);

server.delete('/erase/:id', idValidation, deleteJob);

const port: number = 4000;
server.listen(port, () => console.log('App listening on localhost:' + port));