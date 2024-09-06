import type { PageServerLoad } from './$types';
import resume from '../../../static/resume.json';

const { projects } = resume;

export const load = (() => {
	return {
		projects
	};
}) satisfies PageServerLoad;
