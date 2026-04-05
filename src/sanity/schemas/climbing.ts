import { defineField, defineType } from "sanity";

export default defineType({
  name: "climbing",
  title: "Climbing",
  type: "document",
  fields: [
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "tags",
      title: "Tags / Grades",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              description: 'e.g. "抱石 V4", "📍 LA 某岩馆"',
            }),
            defineField({
              name: "isPrimary",
              title: "Primary Tag?",
              type: "boolean",
              description: "Primary tags get the accent color background",
              initialValue: false,
            }),
          ],
          preview: {
            select: { title: "label" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Climbing Section" };
    },
  },
});
