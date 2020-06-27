export default {
  title: "Sponsor",
  name: "sponsor",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
    },
    {
      title: "Level",
      name: "level",
      type: "string",
      options: {
        list: [
          { title: "Platinum", value: "platinum" },
          { title: "Gold", value: "gold" },
          { title: "Silver", value: "silver" },
        ],
        layout: "dropdown",
      },
    },
  ],
};
