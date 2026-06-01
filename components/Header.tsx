"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/weatherization", label: "Weatherization" },
  { href: "/government-contracting", label: "Government" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-[#1A1A1A] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/lumank-logo.png" alt="Lumank Inc." width={40} height={40} className="object-contain" />
            <span className="font-serif text-xl font-bold tracking-wide">LUMANK<span className="text-[#E87722]"> INC.</span></span>
          </Link>
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} className="text-sm font-medium text-gray-200 hover:text-[#E87722] transition-colors">{l.label}</Link>
            ))}
            <Link href="/contact" className="ml-4 bg-[#E87722] text-white px-4 py-2 rounded text-sm font-semibold hover:bg-orange-600">Get a Quote</Link>
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-[#111] px-4 py-4 flex flex-col gap-4">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} className="text-gray-200 hover:text-[#E87722]" onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
