export default {
  title: "Event",
  name: "event",
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
      title: "Main Image",
      name: "image",
      type: "image",
    },
    {
      title: "Description",
      name: "description",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
    {
      title: "Date",
      name: "date",
      type: "datetime",
    },
    {
      title: "Location",
      name: "location",
      type: "string",
    },
  ],
};
