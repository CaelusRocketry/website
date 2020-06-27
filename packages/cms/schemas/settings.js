export const galleryImage = {
  title: "Gallery Image",
  name: "galleryImage",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
  ],
};

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
      name: "teamPicture",
      type: "image",
    },
    {
      title: "About",
      name: "about",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Gallery Images",
      name: "gallery",
      type: "array",
      of: [{ type: "galleryImage" }],
    },
  ],
};
