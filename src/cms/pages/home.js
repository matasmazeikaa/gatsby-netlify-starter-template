import { seo } from '@/cms/partials/seo';

const page = {
	file: 'content/pages/home.md',
	label: 'Home',
	name: 'home',
	fields: [
		{
			label: 'Hero section',
			name: 'heroSection',
			widget: 'object',
			collapsed: true,
			fields: [
				{ label: 'Title', name: 'title', widget: 'string' },
				{ label: 'Description', name: 'description', widget: 'string' },
			],
		},
		seo,
	],
};

export default page;
