import { defineField, defineType } from "sanity";

export default defineType({
  name: "diaryEntry",
  title: "Diary Entry",
  type: "document",
  fields: [
    defineField({
      name: "date",
      title: "Date",
      type: "date",
    }),
    defineField({
      name: "mood",
      title: "Mood Emoji",
      type: "string",
      description: 'e.g. "🌤️", "☕️", "🌙"',
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "bgColor",
      title: "Background Color",
      type: "string",
      options: {
        list: [
          { title: "Warm Cream", value: "bg-[#F4F1E1]" },
          { title: "Cool Grey", value: "bg-[#E8EAE6]" },
          { title: "Soft Green", value: "bg-[#E6EAE0]" },
          { title: "Light Lavender", value: "bg-[#EAE6F0]" },
        ],
      },
      initialValue: "bg-[#F4F1E1]",
    }),
  ],
  orderings: [
    {
      title: "Date (newest first)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "date", subtitle: "mood" },
    prepare({ title, subtitle }) {
      return {
        title: title || "No date",
        subtitle: subtitle || "",
      };
    },
  },
});
