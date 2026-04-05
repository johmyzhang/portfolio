interface FooterProps {
  footerText: string;
  ownerName: string;
}

export default function Footer({ footerText, ownerName }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center py-10 border-t border-[#D4D4CE]/50 text-gray-400 text-sm">
      <p>&copy; {year} {footerText} Built by {ownerName}.</p>
    </footer>
  );
}
