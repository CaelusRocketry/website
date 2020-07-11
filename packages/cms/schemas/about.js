export default {
  title: "About",
  name: "about",
  type: "document",
  fields: [
    {
      title: "Team Image",
      name: "teamImage",
      type: "picture",
    },
    {
      title: "Purpose",
      name: "purpose",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Subsystem",
      name: "subsystem",
      type: "array",
      of: [{ type: "statistic" }],
    },
  ],
};
