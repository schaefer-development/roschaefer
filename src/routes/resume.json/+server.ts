import { json } from '@sveltejs/kit';

import { basics } from '$lib/data/basics';
import { experiences } from '$lib/data/experiences';
import { talks } from '$lib/data/talks';
import { interests } from '$lib/data/interests';
import { education } from '$lib/data/education';

const work: never[] = [];
const volunteer: never[] = [];
const certificates: never[] = [];
const references: never[] = [];

const talkToProject = (talk: (typeof talks)[number]) => {
	const { name, date, summary, url } = talk;
	return {
		name,
		description: summary,
		startDate: date,
		endDate: date,
		roles: [],
		url,
		type: 'talk'
	};
};

const projects = [...experiences, ...talks.map(talkToProject)];

const resume = {
	work,
	volunteer,
	certificates,
	references,
	basics,
	education,
	interests,
	projects
};

export function GET() {
	return json({
		$schema: 'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.2.0/schema.json',
		...resume
	});
}
