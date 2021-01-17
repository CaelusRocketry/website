export default {
  title: "Settings",
  name: "settings",
  type: "document",
  fieldsets: [{ name: "documentation", title: "Documentation" }],
  fields: [
    {
      title: "Goal",
      name: "goal",
      type: "array",
      of: [{ type: "block" }],
    },
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
    {
      title: "Open-Source Mission",
      name: "openSourceMission",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Open-Source Documents",
      name: "openSourceDocuments",
      type: "array",
      of: [
        {
          type: "file",
          options: {
            accept: ".pdf",
          },
        },
      ],
    },
  ],
};
