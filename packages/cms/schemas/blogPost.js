export default {
  title: "Blog Post",
  name: "blogPost",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Datetime",
      name: "datetime",
      type: "datetime",
    },
    {
      title: "Overview",
      name: "overview",
      type: "text",
    },
    {
      title: "Title Image",
      name: "titleImage",
      type: "image",
    },
    {
      title: "Body",
      name: "body",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
  ],
  orderings: [
    {
      title: "Date",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
};
