import type { PageLoad } from './$types';

export const load = (async (params) => {
    return { params: params.params };
}) satisfies PageLoad; 