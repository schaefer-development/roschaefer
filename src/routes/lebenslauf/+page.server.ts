import type { PageServerLoad } from './$types';
import resume from './resume.json'

export const load = (() => {
	return {
    resume
	};
}) satisfies PageServerLoad;

