import type { PageLoad } from './$types';
import ProjectData from '$lib/projects.json';

export const load = (async () => {
    return { projects: ProjectData };
}) satisfies PageLoad;