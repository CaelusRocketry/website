export default {
  title: "Settings",
  name: "settings",
  type: "document",
  fields: [
    {
      title: "Mission",
      name: "mission",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Work",
      name: "work",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Trailer",
      name: "trailer",
      type: "url",
    },
    {
      title: "Team Image",
      name: "teamImage",
      type: "picture",
    },
    {
      title: "Gallery Images",
      name: "gallery",
      type: "array",
      of: [{ type: "picture" }],
    },
  ],
};
