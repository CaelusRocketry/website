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
      title: "Team Picture",
      name: "teamPicture",
      type: "image",
    },
    {
      title: "About",
      name: "about",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
