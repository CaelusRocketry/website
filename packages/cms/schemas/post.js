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
