export const image = (imageName) => ({
	label: imageName || 'Image',
	name: 'imageContainer',
	widget: 'object',
	collapsed: true,
	fields: [
		{
			label: 'Image',
			name: 'image',
			widget: 'image',
			allow_multiple: false,
		},
		{ label: 'Alt text', name: 'altText', widget: 'string' },
	],
});
