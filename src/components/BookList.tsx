import { BookEntry } from "@/lib/types";
import SectionHeading from "./SectionHeading";

interface Props {
  id: string;
  heading: string;
  entries: BookEntry[];
}

export default function BookList({ id, heading, entries }: Props) {
  return (
    <section id={id} className="max-w-3xl mx-auto px-6 py-12">
      <SectionHeading>{heading}</SectionHeading>
      <div className="space-y-6">
        {entries.map((book, i) => (
          <div key={i} className="group flex gap-5 items-start">
            <div className="w-16 h-24 bg-[#E5E5E0] rounded flex-shrink-0 flex items-center justify-center overflow-hidden">
              {book.cover ? (
                <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
              ) : (
                <span className="text-xs text-gray-400">Cover</span>
              )}
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#3A3A3A] group-hover:text-[#6B705C] transition">
                {book.title}
              </h3>
              <p className="text-sm text-[#8B907D] mb-2">{book.author}</p>
              {book.reviewNote && (
                <p className="text-sm text-gray-600 leading-relaxed bg-white p-3 rounded-lg shadow-sm border border-[#D4D4CE]/30">
                  {book.reviewNote}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
