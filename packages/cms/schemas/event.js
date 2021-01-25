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
      title: "Summary",
      name: "summary",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
    {
      title: "Description",
      name: "Description",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
    {
      title: "Status",
      name: "status",
      type: "string",
      options: {
        list: [
          { title: "Past", value: "completed" },
          { title: "On-Going", value: "current" },
          { title: "Future", value: "planned" },
        ],
        layout: "dropdown",
      },
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
    {
      title: "Event Gallery Description",
      name: "gallery",
      type: "array",
      of: [{ type: "picture" }],
    },
    {
      title: "Event Gallery Images",
      name: "gallery",
      type: "array",
      of: [{ type: "picture" }],
    },
  ],
};
