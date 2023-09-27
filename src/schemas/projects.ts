import { defineField } from "sanity";

const projects = {
  name: "projects",
  title: "projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule: any) => Rule.required().min(40),
    }),
    {
      name: "githubLink",
      title: "Github URL",
      type: "url",
    },
    {
      name: "siteLink",
      title: "Site URL",
      type: "url",
    },
    {
      name: "techUsed",
      title: "Tech Used",
      type: "array",
      description: "Add a list of Technologies Used for the Project",
      of: [{ type: "string" }],
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description: "Upload a background picture for the project",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
};

export default projects;
