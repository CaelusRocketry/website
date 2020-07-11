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
      title: "Team",
      name: "team",
      type: "string",
      options: {
        list: [
          { title: "Propulsion", value: "propulsion" },
          { title: "Programming", value: "programming" },
          { title: "Outreach", value: "outreach" },
          { title: "Founder", value: "founder" },
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
