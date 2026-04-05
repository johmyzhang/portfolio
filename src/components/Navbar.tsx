"use client";

import { useState } from "react";

interface NavbarProps {
  siteTitle: string;
  links: { id: string; label: string }[];
}

export default function Navbar({ siteTitle, links }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="max-w-3xl mx-auto px-6 py-8 flex flex-wrap justify-between items-center gap-4 sticky top-0 bg-[#FDFBF7]/90 backdrop-blur-sm z-50">
      <div className="text-xl font-bold tracking-widest text-[#6B705C] font-serif">
        {siteTitle}
      </div>

      <button
        className="sm:hidden text-gray-500 hover:text-[#6B705C] transition"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <div className="hidden sm:flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 font-medium">
        {links.map((link) => (
          <a key={link.id} href={`#${link.id}`} className="hover:text-[#6B705C] transition">
            {link.label}
          </a>
        ))}
      </div>

      {mobileOpen && (
        <div className="w-full sm:hidden flex flex-col gap-2 text-sm text-gray-500 font-medium pt-2">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="hover:text-[#6B705C] transition py-1"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
