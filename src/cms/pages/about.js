import { seo } from '../partials/seo';

const page = {
	file: 'content/pages/about.md',
	label: 'About',
	name: 'About',
	fields: [
		{
			label: 'Layout',
			name: 'layout',
			widget: 'hidden',
			default: 'contact',
		},
		{
			label: 'Type',
			name: 'type',
			widget: 'hidden',
			default: 'page',
		},
		{
			label: 'Title',
			name: 'title',
			widget: 'string',
			default: '',
			required: false,
		},
		seo,
	],
};

export default page;
