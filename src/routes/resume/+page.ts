import type { PageLoad } from './$types';
import JobData from '$lib/experience/jobs.json';

export const load = (async () => {
    return { jobs: JobData };
}) satisfies PageLoad;