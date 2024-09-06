import type { PageServerLoad } from './$types';
import resume from '../../../static/resume.json';

const { publications } = resume;

export const load = (() => {
	return {
		publications
	};
}) satisfies PageServerLoad;
