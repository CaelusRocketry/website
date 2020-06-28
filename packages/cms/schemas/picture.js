export default {
  title: "Image",
  name: "picture",
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
};
