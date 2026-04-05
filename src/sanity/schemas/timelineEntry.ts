import { defineField, defineType } from "sanity";

export default defineType({
  name: "timelineEntry",
  title: "Timeline Entry",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: 'e.g. "现在 - 洛杉矶"',
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      description: 'e.g. "Community Mental Health 咨询师"',
    }),
    defineField({
      name: "isCurrent",
      title: "Is Current?",
      type: "boolean",
      description: "If true, shows as a filled dot; otherwise hollow",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Sort Order",
      type: "number",
      description: "Lower numbers appear first (1 = most recent)",
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
    select: { title: "title", subtitle: "description" },
  },
});
