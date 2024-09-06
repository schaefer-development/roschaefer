import type { LayoutData } from './$types';
import resume from '../../static/resume.json';

export const load = (() => {
	return {
    resume
	};
}) satisfies LayoutData
