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
      type: "image",
      fields: [
        {
          title: "Caption",
          name: "caption",
          type: "string",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      title: "Gallery Images",
      name: "gallery",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
            },
            {
              title: "Caption",
              name: "caption",
              type: "string",
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
  ],
};
