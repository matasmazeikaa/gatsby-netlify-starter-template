export const seo = {
	label: 'SEO Settings',
	name: 'pageMetadata',
	widget: 'object',
	collapsed: true,
	fields: [
		{
			label: 'Title',
			name: 'title',
			widget: 'string',
			required: false,
		},
		{
			label: 'Meta Description',
			name: 'description',
			widget: 'text',
			required: false,
		},
		{
			label: 'Image',
			name: 'image',
			widget: 'image',
			required: true,
			default: '/img/shareable-default.jpg',
		},
	],
};
