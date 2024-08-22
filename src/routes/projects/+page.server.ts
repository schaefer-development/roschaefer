import type { PageServerLoad } from './$types';
import resume from '../lebenslauf/resume.json';

export const load = (() => {
	return {
		resume
	};
}) satisfies PageServerLoad;
