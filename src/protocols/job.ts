export type JobEntity = {
    id: number,
    position: string,
    company: string,
    salary: number,
    summoned: boolean
};

export type Job = Omit<JobEntity, 'id' | 'summoned'>;

export type Query = {letters?: string};