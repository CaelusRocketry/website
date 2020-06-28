export default {
  title: "Member",
  name: "member",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "Name",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      title: "Leadership",
      name: "leadership",
      type: "boolean",
    },
    {
      title: "Position",
      name: "Position",
      type: "string",
    },
    {
      title: "Portrait",
      name: "portrait",
      type: "image",
    },
    {
      title: "Bio",
      name: "bio",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
};
