import { json } from '@sveltejs/kit';

import { basics } from '$lib/data/basics';
import { awards } from '$lib/data/awards';
import { experiences } from '$lib/data/experiences';
import { talks } from '$lib/data/talks';
import { interests } from '$lib/data/interests';
import { education } from '$lib/data/education';
import { languages } from '$lib/data/languages';

import { createSkills } from '$lib/utils/createSkills';

const work: never[] = [];
const volunteer: never[] = [];
const certificates: never[] = [];
const references: never[] = [];

const toProject = (talk: (typeof talks)[number]) => {
	const { name, description, date, entity, url } = talk;
	return {
		name,
		description,
		entity,
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
const skills = createSkills(experiences);

const resume = {
	basics,
	work,
	volunteer,
	awards,
	skills,
	languages,
	certificates,
	references,
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
