import { Tag } from "@/lib/types";
import SectionHeading from "./SectionHeading";

interface Props {
  id: string;
  heading: string;
  description: string;
  tags: Tag[];
}

export default function Card({ id, heading, description, tags }: Props) {
  return (
    <section id={id} className="max-w-3xl mx-auto px-6 py-12">
      <SectionHeading>{heading}</SectionHeading>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-[#D4D4CE]/30">
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className={`px-3 py-1 text-xs rounded-full ${
                  tag.primary
                    ? "bg-[#6B705C] text-white"
                    : "bg-[#E5E5E0] text-[#4A4A4A]"
                }`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
