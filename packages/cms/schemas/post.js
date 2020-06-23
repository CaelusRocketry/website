export default {
  title: "Post",
  name: "post",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Image",
      name: "image",
      type: "image"
    },
    {
      title: "Date",
      name: "date",
      type: "date"
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    }
  ],
  orderings: [
    {
      title: "Date",
      name: 'dateDesc',
      by: [
        {field: "date", direction: 'desc'}
      ]
    }
  ]
};
