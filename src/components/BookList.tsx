import { Book } from "@/lib/types";
import { urlFor } from "@/sanity/lib/image";
import SectionHeading from "./SectionHeading";

interface BookListProps {
  books: Book[];
  heading: string;
}

export default function BookList({ books, heading }: BookListProps) {
  if (!books?.length) return null;

  return (
    <section id="reading" className="max-w-3xl mx-auto px-6 py-12">
      <SectionHeading>{heading}</SectionHeading>
      <div className="space-y-6">
        {books.map((book) => (
          <div key={book._id} className="group flex gap-5 items-start">
            <div className="w-16 h-24 bg-[#E5E5E0] rounded flex-shrink-0 flex items-center justify-center overflow-hidden">
              {book.cover ? (
                <img
                  src={urlFor(book.cover).width(128).height(192).url()}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
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
