import { Section } from "@/lib/types";
import Timeline from "./Timeline";
import BookList from "./BookList";
import Card from "./Card";
import Gallery from "./Gallery";
import DiaryScroll from "./DiaryScroll";

interface Props {
  section: Section;
}

export default function SectionRenderer({ section }: Props) {
  switch (section.type) {
    case "timeline":
      return (
        <Timeline
          id={section.id}
          heading={section.heading}
          entries={section.entries}
        />
      );
    case "books":
      return (
        <BookList
          id={section.id}
          heading={section.heading}
          entries={section.entries}
        />
      );
    case "card":
      return (
        <Card
          id={section.id}
          heading={section.heading}
          description={section.description}
          tags={section.tags}
        />
      );
    case "gallery":
      return (
        <Gallery
          id={section.id}
          heading={section.heading}
          entries={section.entries}
        />
      );
    case "diary":
      return (
        <DiaryScroll
          id={section.id}
          heading={section.heading}
          entries={section.entries}
        />
      );
    default:
      return null;
  }
}
