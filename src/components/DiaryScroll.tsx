"use client";

import { DiaryEntry } from "@/lib/types";
import SectionHeading from "./SectionHeading";

interface DiaryScrollProps {
  entries: DiaryEntry[];
  heading: string;
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  return dateStr.replace(/-/g, ".");
}

export default function DiaryScroll({ entries, heading }: DiaryScrollProps) {
  if (!entries?.length) return null;

  return (
    <section id="diary" className="max-w-3xl mx-auto px-6 py-12 mb-10">
      <SectionHeading>{heading}</SectionHeading>
      <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar">
        {entries.map((entry) => (
          <div
            key={entry._id}
            className={`min-w-[260px] p-5 rounded-lg shadow-sm ${
              entry.bgColor || "bg-[#F4F1E1]"
            }`}
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs text-[#8B907D] font-mono">
                {formatDate(entry.date)}
              </span>
              <span className="text-xs text-[#8B907D]">{entry.mood}</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed font-serif">
              {entry.content}
            </p>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 text-center mt-4">
        左右滑动查看更多
      </p>
    </section>
  );
}
