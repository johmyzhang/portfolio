import { defineField, defineType } from "sanity";

export default defineType({
  name: "travelPhoto",
  title: "Travel Photo",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      description: 'e.g. "纽约 · 2023"',
    }),
    defineField({
      name: "rotation",
      title: "Rotation Style",
      type: "string",
      options: {
        list: [
          { title: "Slight right", value: "rotate-1" },
          { title: "Slight left", value: "-rotate-1" },
          { title: "More right", value: "rotate-2" },
          { title: "More left", value: "-rotate-2" },
          { title: "None", value: "rotate-0" },
        ],
      },
      initialValue: "rotate-1",
    }),
    defineField({
      name: "order",
      title: "Sort Order",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Sort Order",
      name: "sortOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "caption", media: "image" },
  },
});
