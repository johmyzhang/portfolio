interface SectionHeadingProps {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl font-bold mb-8 text-[#6B705C] border-b pb-2 border-[#D4D4CE]/50 font-serif">
      {children}
    </h2>
  );
}
