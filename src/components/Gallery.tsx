import { TravelEntry } from "@/lib/types";
import SectionHeading from "./SectionHeading";

interface Props {
  id: string;
  heading: string;
  entries: TravelEntry[];
}

export default function Gallery({ id, heading, entries }: Props) {
  return (
    <section id={id} className="max-w-3xl mx-auto px-6 py-12">
      <SectionHeading>{heading}</SectionHeading>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {entries.map((photo, i) => (
          <div
            key={i}
            className={`bg-white p-2 pb-6 rounded shadow-sm border border-[#D4D4CE]/30 transform ${
              photo.rotation || "rotate-1"
            } hover:rotate-0 transition`}
          >
            <div className="bg-[#E5E5E0] aspect-square w-full rounded flex items-center justify-center overflow-hidden mb-2">
              {photo.image ? (
                <img src={photo.image} alt={photo.caption} className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-400 text-xs">Photo</span>
              )}
            </div>
            <p className="text-center text-xs text-gray-500 font-serif">{photo.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
