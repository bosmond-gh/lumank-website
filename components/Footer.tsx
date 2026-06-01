import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-white text-lg font-bold mb-3">LUMANK<span className="text-[#E87722]"> INC.</span></h3>
            <p className="text-sm text-gray-400 leading-relaxed">Washington State Licensed General Contractor.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/hvac" className="hover:text-[#E87722]">HVAC</Link></li>
              <li><Link href="/services/electrical" className="hover:text-[#E87722]">Electrical</Link></li>
              <li><Link href="/services/plumbing" className="hover:text-[#E87722]">Plumbing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Washington State, USA</li>
              <li><a href="mailto:info@lumank.com" className="hover:text-[#E87722]">info@lumank.com</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Lumank Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
