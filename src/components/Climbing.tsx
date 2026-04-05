import { ClimbingData } from "@/lib/types";
import SectionHeading from "./SectionHeading";

interface ClimbingProps {
  data: ClimbingData | null;
  heading: string;
}

export default function Climbing({ data, heading }: ClimbingProps) {
  if (!data) return null;

  return (
    <section id="climbing" className="max-w-3xl mx-auto px-6 py-12">
      <SectionHeading>{heading}</SectionHeading>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-[#D4D4CE]/30">
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {data.description}
        </p>
        {data.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag) => (
              <span
                key={tag._key}
                className={`px-3 py-1 text-xs rounded-full ${
                  tag.isPrimary
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
