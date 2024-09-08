import { json } from '@sveltejs/kit';

import { basics } from '$lib/data/basics';
import { experiences } from '$lib/data/experiences';
import { talks } from '$lib/data/talks';
import { interests } from '$lib/data/interests';
import { education } from '$lib/data/education';

import { skills } from './skills';

const work: never[] = [];
const volunteer: never[] = [];
const certificates: never[] = [];
const references: never[] = [];

const toProject = (talk: (typeof talks)[number]) => {
	const { name, date, summary, url } = talk;
	return {
		name,
		description: summary,
		startDate: date,
		endDate: date,
		roles: ['Speaker'],
		url,
		type: 'talk'
	};
};

const keywords = new Set();
for (const experience of experiences) {
	for (const keyword of experience.keywords) {
		keywords.add(keyword);
	}
}

const projects = [...experiences, ...talks.map(toProject)];

const resume = {
	skills,
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
