export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A short 200-character summary for preview cards.',
      validation: (Rule: any) => Rule.max(200),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Select existing categories or add your own.',
      options: {
        list: [
          {title: 'Diplomacy', value: 'Diplomacy'},
          {title: 'Environment', value: 'Environment'},
          {title: 'Economy', value: 'Economy'},
          {title: 'Human Rights', value: 'Human Rights'},
          {title: 'Technology', value: 'Technology'},
        ],
      },
    },
    {
      name: 'mainImage',
      title: 'Main Image (Required)',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'imageDescription',
          type: 'text',
          title: 'Image Description / Paragraph',
          description: 'This text will appear as a paragraph inside the image card.',
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'secImage',
      title: 'Second Image (Optional)',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'imageDescription',
          type: 'text',
          title: 'Image Description / Paragraph',
          description: 'This text will appear as a paragraph inside the image card.',
        },
      ],
      description: 'Max 3 images total. This is image #2.',
    },
    {
      name: 'thirdImage',
      title: 'Third Image (Optional)',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'imageDescription',
          type: 'text',
          title: 'Image Description / Paragraph',
          description: 'This text will appear as a paragraph inside the image card.',
        },
      ],
      description: 'Max 3 images total. This is image #3.',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'bodySections',
      title: 'Body Sections',
      type: 'array',
      of: [{type: 'blockContent'}],
      description: 'Add up to 3 blocks of sections (e.g. paragraphs followed by a gallery image)',
      validation: (Rule: any) => Rule.max(3),
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection: any) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
