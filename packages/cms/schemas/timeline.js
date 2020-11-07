export default {
  title: "Timeline",
  name: "timeline",
  type: "document",
  fields: [
    {
      title: "Key",
      name: "key",
      type: "number",
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Finished",
      name: "finished",
      type: "boolean",
    },
    {
      title: "Date",
      name: "date",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Project",
      name: "project",
      type: "reference",
      to: [{ type: "project" }],
    },
    {
      title: "Image",
      name: "image",
      type: "image",
    },
  ],
};
