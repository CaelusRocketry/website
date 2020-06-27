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
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      title: "Date",
      name: "date",
      type: "datetime",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Main Image",
      name: "image",
      type: "image",
    },
    {
      title: "Body",
      name: "body",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
};
