import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      initialValue: "进化日记.",
    }),
    defineField({
      name: "ownerName",
      title: "Owner Name",
      type: "string",
    }),
    defineField({
      name: "heroQuote",
      title: "Hero Quote",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "heroBio",
      title: "Hero Bio (supports line breaks)",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "navLinks",
      title: "Navigation Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({
              name: "sectionId",
              title: "Section ID",
              type: "string",
              description: "e.g. timeline, reading, climbing, travel, diary",
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "sectionId" },
          },
        },
      ],
    }),
    defineField({
      name: "timelineHeading",
      title: "Timeline Section Heading",
      type: "string",
      initialValue: "我的轨迹",
    }),
    defineField({
      name: "readingHeading",
      title: "Reading Section Heading",
      type: "string",
      initialValue: "书页间的避难所",
    }),
    defineField({
      name: "climbingHeading",
      title: "Climbing Section Heading",
      type: "string",
      initialValue: "向上生长的本能",
    }),
    defineField({
      name: "travelHeading",
      title: "Travel Section Heading",
      type: "string",
      initialValue: "步履不停",
    }),
    defineField({
      name: "diaryHeading",
      title: "Diary Section Heading",
      type: "string",
      initialValue: "碎碎念与小情绪",
    }),
    defineField({
      name: "footerText",
      title: "Footer Text",
      type: "string",
      initialValue: "Evolving Every Day.",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
