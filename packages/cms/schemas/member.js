export default {
  title: "Member",
  name: "member",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
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
      name: "position",
      type: "string",
    },
    {
      title: "Team",
      name: "team",
      type: "string",
      options: {
        list: [
          { title: "Propulsion", value: "propulsion" },
          { title: "Programming", value: "programming" },
          { title: "Outreach", value: "outreach" },
        ], // <-- predefined values
        layout: "radio", // <-- defaults to 'dropdown'
      },
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
