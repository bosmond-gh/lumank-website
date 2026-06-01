import Link from "next/link";

const services = [
  { icon: "🌡️", title: "HVAC", desc: "Heating, ventilation, and air conditioning installation, maintenance, and repair.", href: "/services/hvac" },
  { icon: "⚡", title: "Electrical", desc: "Commercial and residential electrical work by licensed electricians.", href: "/services/electrical" },
  { icon: "🔧", title: "Plumbing", desc: "Full-service plumbing from new installs to emergency repairs.", href: "/services/plumbing" },
  { icon: "🏠", title: "Weatherization", desc: "Energy efficiency upgrades and weatherization services.", href: "/weatherization" },
  { icon: "🏛️", title: "Government Contracting", desc: "Certified contractor for federal, state, and local government projects.", href: "/government-contracting" },
  { icon: "🔨", title: "General Contracting", desc: "Full general contracting services for commercial and residential projects.", href: "/services" },
];

export default function Home() {
  return (
    <>
      <section className="bg-[#1A1A1A] text-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#E87722] font-semibold uppercase tracking-widest text-sm mb-4">Washington State Licensed General Contractor</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-4">Built to Last.</h1>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#E87722] mb-8">Built by Lumank.</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">HVAA, electrical, plumbing, weatherization, and government contracting — quality workmanship you can trust.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#E87722] text-white px-8 py-4 rounded font-semibold text-lg hover:bg-orange-600">Get a Free Quote</Link>
            <Link href="/services" className="border border-white text-white px-8 py-4 rounded font-semibold text-lg hover:bg-white hover:text-[#1A1A1A]">Our Services</Link>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">What We Do</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Full-service contracting across Washington State.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <Link key={s.href} href={s.href} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-100 hover:border-[#E87722] transition-all group block">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-lg text-[#1A1A1A] mb-2 group-hover:text-[#E87722]">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#E87722] text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-orange-100 text-lg mb-8">Contact Lumank Inc. today for a free quote.</p>
          <Link href="/contact" className="bg-white text-[#E87722] px-8 py-4 rounded font-bold text-lg hover:bg-orange-50 inline-block">Contact Us Today</Link>
        </div>
      </section>
    </>
  );
}
