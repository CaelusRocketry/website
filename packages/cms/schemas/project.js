export const statistic = {
  title: "Statistic",
  name: "statistic",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Value",
      name: "value",
      type: "string",
    },
  ],
};

export default {
  title: "Project",
  name: "project",
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
      title: "Summary",
      name: "summary",
      type: "text",
    },
    {
      title: "Key",
      name: "key",
      type: "number",
    },
    {
      title: "Description",
      name: "description",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
    {
      title: "Status",
      name: "status",
      type: "string",
      options: {
        list: [
          { title: "Completed", value: "completed" },
          { title: "In-Progress", value: "current" },
          { title: "Planned", value: "planned" },
        ],
        layout: "dropdown",
      },
    },
    {
      title: "Completion Date",
      name: "completionDate",
      type: "datetime",
    },
    {
      title: "Statistics",
      name: "statistics",
      type: "array",
      of: [{ type: "statistic" }],
    },
  ],
};
