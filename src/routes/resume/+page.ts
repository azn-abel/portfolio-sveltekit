import type { PageLoad } from './$types';
import JobData from '$lib/jobs.json';

export const load = (async () => {
    return { jobs: JobData };
}) satisfies PageLoad;