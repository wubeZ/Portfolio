import { defineField } from "sanity";

const progLanguages = {
  name: "progLanguages",
  title: "Programming Languages and Technologies",
  type: "document",
  fields: [
    defineField({
      name: "programmingLanguages",
      title: "Programming Languages",
      type: "array",
      description: "Add a list of Programming Languages you use",
      of: [{ type: "string" }],
    }),
    {
      name: "frontend",
      title: "Frontend Technologies",
      type: "array",
      description: "Add a list of Frontend Technologies you use",
      of: [{ type: "string" }],
    },
    {
      name: "backend",
      title: "Backend Technologies",
      type: "array",
      description: "Add a list of Backend Technologies you use",
      of: [{ type: "string" }],
    },
    {
      name: "database",
      title: "Databases",
      type: "array",
      description: "Add a list of Databases you use",
      of: [{ type: "string" }],
    },
  ],
};

export default progLanguages;
