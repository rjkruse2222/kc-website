import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    articles: collection({
      label: 'Blog Articles',
      slugField: 'title',
      path: 'content/articles/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Tax Strategy', value: 'Tax Strategy' },
            { label: 'Tax Planning', value: 'Tax Planning' },
            { label: 'Accounting', value: 'Accounting' },
            { label: 'Business Advisory', value: 'Business Advisory' },
            { label: 'Industry News', value: 'Industry News' },
          ],
          defaultValue: 'Tax Strategy',
        }),
        date: fields.date({
          label: 'Publish Date',
          defaultValue: { kind: 'today' },
        }),
        readTime: fields.text({
          label: 'Read Time',
          defaultValue: '5 min read',
        }),
        excerpt: fields.text({
          label: 'Excerpt',
          description: 'Brief description for article cards (1-2 sentences)',
          multiline: true,
        }),
        image: fields.image({
          label: 'Featured Image',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
        }),
        color: fields.select({
          label: 'Hero Gradient Color',
          options: [
            { label: 'Purple (Tax Strategy)', value: 'from-violet-500 to-purple-600' },
            { label: 'Blue (Professional)', value: 'from-blue-500 to-blue-600' },
            { label: 'Green (Accounting)', value: 'from-emerald-500 to-teal-600' },
            { label: 'Orange (Eye-catching)', value: 'from-amber-500 to-orange-600' },
            { label: 'Pink (Stands out)', value: 'from-rose-500 to-pink-600' },
            { label: 'Cyan (Modern)', value: 'from-cyan-500 to-blue-600' },
            { label: 'Indigo (Advisory)', value: 'from-indigo-500 to-violet-600' },
            { label: 'Yellow (Attention)', value: 'from-amber-500 to-yellow-600' },
          ],
          defaultValue: 'from-blue-500 to-blue-600',
        }),
        youtubeId: fields.text({
          label: 'YouTube Video ID (optional)',
          description: 'Just the video ID from the URL (e.g., dQw4w9WgXcQ)',
        }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            heading: [2, 3],
            divider: true,
            link: true,
            bold: true,
            italic: true,
            strikethrough: true,
            code: true,
            blockquote: true,
            orderedList: true,
            unorderedList: true,
          },
        }),
      },
    }),
  },
});
