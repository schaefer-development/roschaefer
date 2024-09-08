const work = [
	{
		entity: 'Hochschule für Technik und Wirtschaft Berlin',
		name: 'Systems-Development and Framework',
		roles: ['University Lecturer'],
		startDate: '2019-10-31',
		endDate: '2021-03-31',
		keywords: [
			'Git',
			'Github',
			'JavaScript',
			'Node',
			'Functional Programming',
			'Promises',
			'Software Testing',
			'CI/CD',
			'Vue',
			'JWT',
			'Apollo GraphQL',
			'Neo4J',
			'Nuxt',
			'Vuetify',
			'Tailwind'
		],
		description:
			'[Design and hold weekly lectures and seminars](https://www.youtube.com/playlist?list=PL1CiawkXA01PO_39DnKSrxWw99mU7mwWs) with about 40 participants about fullstack development. Group tasks are submitted via pull requests on Github and reviewed by other teams and teaching staff.',
		url: 'https://www.youtube.com/watch?v=-cuzwDjdowo&list=PL1CiawkXA01PO_39DnKSrxWw99mU7mwWs',
		location: 'Berlin, Germany',
		type: 'teaching'
	},
	{
		name: 'Human Connection',
		entity: 'Human Connection gGmbH',
		roles: ['Technical Lead'],
		startDate: '2018-11-30',
		endDate: '2020-04-30',
		keywords: [
			'Vue',
			'Vue Test Utils',
			'Storybook',
			'Nuxt',
			'Cypress',
			'Apollo GraphQL',
			'Node',
			'Neo4j',
			'Docker',
			'Kubernetes'
		],
		description:
			'[Donation-based, free and open-source social network](https://github.com/Human-Connection/Human-Connection/graphs/contributors) for active citizenship. Development continues as [Ocelot-Social](https://github.com/Ocelot-Social-Community/Ocelot-Social).',
		type: 'employment'
	},
	{
		name: 'Rundfunk mitbestimmen',
		roles: ['Founder'],
		startDate: '2016-08-31',
		endDate: '2019-03-31',
		keywords: ['Ember', 'Ruby on Rails', 'Ember', 'D3', 'Highcharts', 'Uberspace'],
		description:
			'Prototype a tool to encourage public participation in the expenditure German broadcasting fees.',
		type: 'volunteering'
	},
	{
		entity: 'SAP',
		roles: ['Research Intern'],
		startDate: '2013-10-31',
		endDate: '2013-11-30',
		keywords: ['Java'],
		description: 'Tool development for automated risk analysis in supply chains. Legacy code.',
		location: 'Belfast, United Kingdom',
		type: 'internship'
	},
	{
		entity: 'OXON AG',
		name: 'Clubcorner',
		roles: ['Full Stack Developer'],
		startDate: '2013-04-01',
		endDate: '2013-09-30',
		keywords: ['Ruby on Rails', 'RSpec', 'Cucumber', 'PostgreSQL'],
		description:
			'Develop a web application for officials, referees and coaches. First developer who established an automated test environment.',
		url: 'https://clubcorner.ch/',
		location: 'Bern, Switzerland',
		type: 'employment'
	},
	{
		entity: 'Hasso Plattner Institute',
		roles: ['Researcher'],
		startDate: '2012-01-31',
		endDate: '2012-08-31',
		keywords: ['SAP HANA'],
		description:
			'Implementation of a business process and web application as specified by SAP as a use case for the HANA in-memory database.',
		url: 'https://hpi.de/',
		type: 'student assistant'
	}
];

interface TimeEntry {
	startDate: string;
	endDate?: string;
	[x: string | number | symbol]: unknown;
}

export const experiences = [
	{
		name: 'DreamMall',
		entity: 'IT4C',
		roles: ['Full Stack Developer'],
		startDate: '2021-06-21',
		keywords: [
			'TypeScript',
			'Node',
			'Vue',
			'Vuetify',
			'Jest',
			'Authentik',
			'Apollo GraphQL',
			'Terraform',
			'Helm',
			'Kubernetes',
			'Hetzner'
		],
		description: 'Social media app for video conferencing.',
		url: 'https://dreammall.earth/',
		type: 'freelancing'
	},
	{
		name: 'beteon',
		entity: 'auteon',
		roles: ['Full Stack Developer'],
		startDate: '2021-06-30',
		endDate: '2023-09-01',
		keywords: [
			'TypeScript',
			'Node',
			'Vue',
			'Tailwind',
			'Jest',
			'Testing-Library',
			'Auth0',
			'Apollo GraphQL',
			'Hasura',
			'Terraform',
			'Google Cloud Platform',
			'Vercel'
		],
		description: 'Meta search-engine to enable competition in the automotive aftermarket.',
		url: 'https://www.auteon.com',
		type: 'freelancing'
	},
	{
		name: '100eyes',
		entity: 'tactile.news GmbH',
		roles: ['Full Stack Developer'],
		startDate: '2020-03-30',
		keywords: ['Ruby on Rails', 'Stimulus', 'Docker', 'Ansible', 'Traefik'],
		description:
			'Crowdsourced journalism tool [100eyes](https://github.com/tactilenews/100eyes) connecting WhatsApp, Telegram, Threema, Signal and E-Mail as communication channels.',
		url: 'https://tactile.news/',
		type: 'freelancing'
	},
	{
		name: 'Rhenania Computer',
		entity: 'Johannes Schäfer',
		roles: ['Backend Developer'],
		startDate: '2021-12-09',
		endDate: '2023-06-28',
		keywords: ['Svelte', 'SvelteKit', 'HyGraph', 'Node', 'Netlify', 'Serverless'],
		description: '',
		url: 'https://rhenania-computer.de/de',
		type: 'freelancing'
	},
	{
		name: 'Ferienwohnung - Am Meer Norderneys',
		entity: 'Johannes Schäfer',
		roles: ['Backend Developer'],
		startDate: '2022-01-28',
		endDate: '2022-08-09',
		keywords: ['Svelte', 'SvelteKit', 'Tailwind', 'Google Calendar API'],
		description: '',
		url: 'https://am-meer-norderney.de/',
		type: 'freelancing'
	},
	{
		name: 'Tanzimpulse - Institut für Tanzpädagogik',
		entity: 'Johannes Schäfer',
		roles: ['Backend Developer'],
		startDate: '2021-05-12',
		endDate: '2022-12-10',
		keywords: ['Svelte', 'SvelteKit', 'Tailwind'],
		description: '',
		url: 'https://tanzimpulse.de/',
		type: 'freelancing'
	},
	{
		name: 'Werkhof Ichen',
		entity: 'Johannes Schäfer',
		roles: ['Backend Developer'],
		startDate: '2020-08-11',
		endDate: '2023-05-02',
		keywords: ['Vue', 'Nuxt', 'HyGraph'],
		description: '',
		url: 'https://werkhof-ichen.de/',
		type: 'freelancing'
	},
	{
		entity: 'tactile.news GmbH',
		name: '#bienenlive',
		roles: ['Full Stack Developer'],
		startDate: '2019-03-31',
		endDate: '2019-05-31',
		keywords: ['Ruby on Rails'],
		description:
			'Automate journalism and generate a live report of bee hives based on their sensory data.',
		type: 'freelancing'
	},
	{
		entity: 'MIZ Babelsberg',
		roles: ['Programming Mentor'],
		startDate: '2015-09-30',
		endDate: '2018-11-30',
		keywords: [],
		description: 'Coach a beginner friendly programming course to encourage diversity in tech.',
		url: 'https://www.miz-babelsberg.de/startseite.html',
		location: 'Potsdam, Brandenburg, Germany',
		type: 'freelancing'
	},
	{
		entity: 'MIZ Babelsberg',
		roles: ['Hackathon Coach'],
		startDate: '2015-08-31',
		endDate: '2016-09-30',
		keywords: [],
		highlights: [
			'An interactive, decision-based podcast.',
			'A location aware music player.',
			'#ursuppe - IoT app for automated journalism based on scientific experiments.'
		],
		description: '',
		url: 'https://www.miz-babelsberg.de/startseite.html',
		location: 'Potsdam, Brandenburg, Germany'
	},
	{
		entity: 'Solutiance AG',
		roles: ['Back End Developer'],
		startDate: '2018-04-30',
		endDate: '2018-06-30',
		keywords: ['Wordpress', 'PHP', 'Docker'],
		description: 'Custom CMS development with a focus on search engine optimization.',
		url: 'https://solutiance.com/',
		type: 'freelancing'
	},
	{
		entity: 'tactile.news GmbH',
		name: 'sMirror',
		roles: ['IoT Developer'],
		startDate: '2018-01-31',
		endDate: '2018-01-31',
		keywords: ['Arduino', 'Raspberry Pi', 'HTML', 'JavaScript', 'MQTT'],
		description: 'Rapid prototype of a smart bathroom mirror and cabinet.',
		location: 'Lunenburg, Lower Saxony, Germany',
		type: 'freelancing'
	},
	{
		entity: 'tactile.news GmbH',
		name: 'Superkühe',
		roles: ['Full Stack Developer'],
		startDate: '2016-05-31',
		endDate: '2017-10-31',
		keywords: ['Ruby on Rails'],
		description:
			'Automate journalism and generate a live report of dairy cows based on their sensory data.'
	},
	{
		entity: 'tactile.news GmbH',
		roles: ['IoT Developer'],
		startDate: '2017-06-30',
		endDate: '2017-06-30',
		keywords: ['Ember', 'Python', 'Arduino', 'Raspberry Pi'],
		description: 'Rapid prototype of a smart shopping cart.',
		type: 'freelancing'
	},
	...work
] satisfies TimeEntry[];

experiences.sort((a, b) => {
	const byEndDate =
		new Date(b.endDate ?? new Date()).getTime() - new Date(a.endDate ?? new Date()).getTime();
	if (byEndDate != 0) {
		return byEndDate;
	}
	return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
});
