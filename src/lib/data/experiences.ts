const work = [
	{
		entity: 'Hochschule für Technik und Wirtschaft Berlin',
		name: 'Systems-Development and Framework',
		roles: ['University Lecturer'],
		startDate: '2019-10-31',
		endDate: '2021-03-31',
		keywords: [
			'JavaScript',
			'Node.js',
			'Vue',
			'Apollo GraphQL',
			'Neo4J',
			'Nuxt',
			'Vuetify',
			'Tailwind'
		],
		description:
			'Complete responsibility including grading for a lecture on full stack development in the Master of Applied Computer Science with 40 students. Topics cover e.g. functional programming, advanced git and test-driven development. Team submissions were [submitted on Github](https://github.com/systems-development-and-frameworks) and evaluated via code reviews. All lectures are [published on YouTube](https://www.youtube.com/playlist?list=PL1CiawkXA01PO_39DnKSrxWw99mU7mwWs).',
		url: 'https://www.youtube.com/watch?v=-cuzwDjdowo&list=PL1CiawkXA01PO_39DnKSrxWw99mU7mwWs',
		location: 'Berlin, Germany',
		type: 'teaching'
	},
	{
		name: 'Ocelot.social',
		entity: 'busfaktor e.V.',
		roles: ['Technical Lead'],
		startDate: '2018-11-30',
		endDate: '2020-04-30',
		keywords: [
			'JavaScript',
			'Jest',
			'Vue',
			'Nuxt',
			'Node.js',
			'Storybook',
			'Cypress',
			'Apollo GraphQL',
			'Neo4J',
			'Docker',
			'Digital Ocean',
			'Kubernetes'
		],
		url: 'https://github.com/Ocelot-Social-Community/Ocelot-Social',
		description:
			'Ocelot.social, formerly known as Human Connection, is a donation-based, free and open-source social network focused on active citizenship. We use the Neo4J graph database in production to model user accounts and social connections. Data is served via GraphQL and deployed on a managed Kubernetes cluster on Digital Ocean. As an open-source project, we engage with online learning communities to attract contributors and help people learn programming. The software can be self-hosted and individually branded, a [staging environment is available online](https://stage.ocelot.social).',
		type: 'employment'
	},
	{
		name: 'Rundfunk mitbestimmen',
		roles: ['Founder'],
		startDate: '2016-08-31',
		endDate: '2019-03-31',
		keywords: ['Ember', 'Ruby on Rails', 'Auth0', 'D3', 'Highcharts', 'Uberspace', 'PostgreSQL'],
		description:
			'"Rundfunk mitbestimmen" is a tool to encourage public participation in the expenditure of German broadcasting fees. Fee payers can symbolically allocate their monies to specific programs. The project was covered by [Zeit Online](https://www.zeit.de/campus/2017-09/z2x-festival-zehn-beste-projekte/seite-2), [Netzpolitik.org](https://netzpolitik.org/2017/neues-aus-dem-fernsehrat-6-ein-gespraech-ueber-rundfunk-mitbestimmen-de/), [Deutschlandfunk](https://www.deutschlandfunk.de/oeffentlich-rechtlicher-rundfunk-mehr-direkte-demokratie-100.html) and [RBB](https://www.wwwagner.tv/?p=36200).',
		type: 'volunteering'
	},
	// {
	//   name: 'Automated risk analysis in supply chains.',
	// 	entity: 'SAP Research',
	// 	roles: ['Research Intern'],
	// 	startDate: '2013-10-31',
	// 	endDate: '2013-11-30',
	// 	keywords: ['Java'],
	// 	description: 'Legacy code.',
	// 	location: 'Belfast, United Kingdom',
	// 	type: 'internship'
	// },
	{
		entity: 'OXON AG',
		name: 'Clubcorner',
		roles: ['Full Stack Developer'],
		startDate: '2013-04-01',
		endDate: '2013-09-30',
		keywords: ['Ruby', 'Ruby on Rails', 'RSpec', 'Cucumber', 'PostgreSQL'],
		description:
			'Develop a web application for officials, referees and coaches. First developer who established an automated test environment.',
		url: 'https://clubcorner.ch/',
		location: 'Bern, Switzerland',
		type: 'employment'
	},
	{
		name: 'Enterprise programming models for in-memory databases',
		entity: 'Hasso Plattner Institute',
		roles: ['Researcher'],
		startDate: '2012-01-31',
		endDate: '2012-08-31',
		keywords: ['Java'],
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
		startDate: '2024-06-21',
		keywords: [
			'TypeScript',
			'Docker',
			'Node.js',
			'Vue',
			'Vike',
			'Jest',
			'Vuetify',
			'Jest',
			'Authentik',
			'Apollo GraphQL',
			'Terraform',
			'Helm',
			'Kubernetes',
			'Hetzner',
			'PostgreSQL'
		],
		description:
			'DreamMall is a free and open-source social media app for entrepreneurs. Our team is fully remote and includes members of all skill levels. We self-host a K3S Kubernetes cluster on Hetzner using Terraform, allowing each team member to deploy their git branches in a separate environment.',
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
			'Docker',
			'Node.js',
			'Vue',
			'Tailwind',
			'Jest',
			'Testing-Library',
			'Auth0',
			'Apollo GraphQL',
			'Hasura',
			'Google Cloud',
			'Vercel'
		],
		description:
			'Auteon GmbH is an investor-funded startup that creates software for the automotive aftermarket, allowing auto repair shops to compare prices across various wholesalers. We transitioned from a desktop application based on Electron to a cloud-based solution on the Google Cloud Platform, Auth0 and Hasura. This significantly improved software quality and increased the number of connected wholesalers from three to 240. Vue, Tailwind and Node.js as techologies were retained.',
		url: 'https://www.auteon.com',
		type: 'freelancing'
	},
	{
		name: '100eyes',
		entity: 'tactile.news GmbH',
		roles: ['Full Stack Developer'],
		startDate: '2020-03-30',
		keywords: [
			'Ruby',
			'TypeScript',
			'Ruby on Rails',
			'RSpec',
			'Stimulus',
			'Docker',
			'Ansible',
			'Digital Ocean',
			'Sentry',
			'Postmark'
		],
		description:
			'[100eyes](https://github.com/tactilenews/100eyes) is a dialogue software that allows journalists to interact with their readers. Feedback from readers can be incorporated into the reporting process. The software uses APIs from the messaging apps Telegram, Signal, Threema and WhatsApp, as well as Postmark for emails.',
		url: 'https://tactile.news/',
		type: 'freelancing'
	},
	{
		name: 'Rhenania Computer',
		entity: 'Johannes Schäfer',
		roles: ['Backend Developer'],
		startDate: '2021-12-09',
		endDate: '2023-06-28',
		keywords: ['TypeScript', 'Svelte', 'SvelteKit', 'HyGraph', 'Node.js', 'Netlify', 'Serverless'],
		description:
			'Rhenania Computer GmbH has been developing logistics software for over 30 years. We rebuilt their website using SvelteKit and deployed it statically on Netlify. Server-side code runs in Serverless Functions and data is fetched via GraphQL from the Headless CMS called HyGraph. This allowed us to improve performance, SEO and user experience.',
		url: 'https://rhenania-computer.de/de',
		type: 'freelancing'
	},
	{
		name: 'Ferienwohnung - Am Meer Norderneys',
		entity: 'Johannes Schäfer',
		roles: ['Backend Developer'],
		startDate: '2022-01-28',
		endDate: '2022-08-09',
		keywords: ['TypeScript', 'Netlify', 'Svelte', 'SvelteKit', 'Tailwind'],
		description:
			'A website for booking a holiday apartment on Norderney. Availability for each day is managed through a Google Calendar and the data is updated via Google APIs on the website.',
		url: 'https://am-meer-norderney.de/',
		type: 'freelancing'
	},
	{
		name: 'Tanzimpulse - Institut für Tanzpädagogik',
		entity: 'Johannes Schäfer',
		roles: ['Backend Developer'],
		startDate: '2021-05-12',
		endDate: '2022-12-10',
		keywords: ['TypeScript', 'Netlify', 'Svelte', 'SvelteKit', 'Tailwind'],
		description:
			'The Tanzimpulse Institute in Cologne offers part-time continuing education options aimed at a wide range of professional groups. We built a custom booking system for their website with email confirmation and a waiting list. The technical implementation was done using SvelteKit with HyGraph as the headless CMS.',
		url: 'https://tanzimpulse.de/',
		type: 'freelancing'
	},
	{
		name: 'Werkhof Ichen',
		entity: 'Johannes Schäfer',
		roles: ['Backend Developer'],
		startDate: '2020-08-11',
		endDate: '2023-05-02',
		keywords: ['TypeScript', 'Netlify', 'Node.js', 'Vue', 'Nuxt', 'HyGraph'],
		description:
			'At Werkhof Ichen, Irmina Schmitz creates tailor-made clothing. We developed a custom booking system for the website, where sewing classes for adults, teens, and children are offered. Interested individuals can sign up for courses or join a waiting list.',
		url: 'https://werkhof-ichen.de/',
		type: 'freelancing'
	},
	{
		entity: 'tactile.news GmbH',
		name: '#bienenlive',
		roles: ['Full Stack Developer'],
		startDate: '2019-03-31',
		endDate: '2019-05-31',
		keywords: ['Ruby', 'Ruby on Rails', 'RSpec', 'Cucumber'],
		description:
			'Building on the success of the "Superkühe" project, we reused the software for new content. This time, the focus was on insect decline, and reports were automatically generated based on sensor data from three beehives. With this project, we were nominated for the Grimme Online Award and won the German Reporter Award.',
		url: 'https://tactile.news/startseite/journalismus-der-dinge/bienenlive/',
		type: 'freelancing'
	},
	{
		name: 'Rubies in the woods',
		entity: 'MIZ Babelsberg',
		roles: ['Programming Mentor'],
		startDate: '2015-09-30',
		endDate: '2018-11-30',
		keywords: ['Ruby'],
		description:
			'Help a beginner friendly group to learn programming. Encourage diversity. Meetings every week.',
		url: 'https://www.facebook.com/watch?v=1342132595875337',
		location: 'Potsdam, Brandenburg, Germany',
		type: 'freelancing'
	},
	{
		name: 'Protothon',
		entity: 'MIZ Babelsberg',
		roles: ['Hackathon Coach'],
		startDate: '2015-08-31',
		endDate: '2016-09-30',
		keywords: ['Node.js', 'JavaScript'],
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
		name: 'solutiance.com',
		entity: 'Solutiance AG',
		roles: ['Back End Developer'],
		startDate: '2018-04-30',
		endDate: '2018-06-30',
		keywords: ['Node.js', 'Wordpress', 'PHP', 'Docker'],
		description: 'Custom CMS development with a focus on search engine optimization.',
		url: 'https://solutiance.com/',
		type: 'freelancing'
	},
	{
		name: 'sMirror',
		entity: 'tactile.news GmbH',
		roles: ['IoT Developer'],
		startDate: '2018-01-01',
		endDate: '2018-01-31',
		keywords: ['Python', 'JavaScript', 'MQTT'],
		description:
			'Rapid prototype of a smart bathroom mirror and cabinet using Raspberry PIs and Arduinos.',
		location: 'Lunenburg, Lower Saxony, Germany',
		type: 'freelancing'
	},
	{
		name: 'Superkühe',
		entity: 'tactile.news GmbH',
		roles: ['Full Stack Developer'],
		startDate: '2016-05-31',
		endDate: '2017-10-31',
		keywords: ['Ruby on Rails', 'Ruby', 'RSpec', 'Cucumber'],
		description:
			'We developed an innovative media format for [WDR](https://www1.wdr.de/unternehmen/der-wdr/unternehmen/superkuehe-114.html) and [Spiegel Online](https://www.spiegel.de/netzwelt/web/superkuehe-sensorjournalismus-mit-milchkuehen-a-1165241.html). A software was created to automatically generate a report based on sensory data from three dairy cows. This project received significant media attention with over [63 reports and features](https://superkuehe.wdr.de/zum-projekt/meinung/).',
		url: 'https://superkuehe.wdr.de/'
	},
	{
		name: 'Story trolley',
		entity: 'tactile.news GmbH',
		roles: ['IoT Developer'],
		startDate: '2017-06-01',
		endDate: '2017-06-30',
		keywords: ['Node.js', 'Ember', 'Python'],
		description: 'Rapid prototype of a smart shopping cart.',
		url: 'https://www.facebook.com/watch?v=746195418906331',
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
