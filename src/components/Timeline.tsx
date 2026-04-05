import { TimelineEntry } from "@/lib/types";
import SectionHeading from "./SectionHeading";

interface TimelineProps {
  entries: TimelineEntry[];
  heading: string;
}

export default function Timeline({ entries, heading }: TimelineProps) {
  if (!entries?.length) return null;

  return (
    <section id="timeline" className="max-w-3xl mx-auto px-6 py-12">
      <SectionHeading>{heading}</SectionHeading>
      <div className="relative border-l-2 border-[#D4D4CE] ml-3">
        {entries.map((entry, i) => (
          <div
            key={entry._id}
            className={`${i < entries.length - 1 ? "mb-8" : ""} ml-8 relative`}
          >
            <span
              className={`absolute -left-[37px] top-1 w-4 h-4 rounded-full ring-4 ring-[#FDFBF7] ${
                entry.isCurrent
                  ? "bg-[#6B705C]"
                  : "border-2 border-[#6B705C] bg-[#FDFBF7]"
              }`}
            />
            <h3 className="text-lg font-bold text-[#3A3A3A]">
              {entry.title}
            </h3>
            <p className="text-sm text-[#8B907D] mb-1">{entry.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
