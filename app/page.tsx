import Link from "next/link";

const services = [
  { icon: "🌡️", title: "HVAC", desc: "Heating, ventilation, and air conditioning.", href: "/services/hvac" },
  { icon: "⪙", title: "Electrical", desc: "Commercial and residential electrical work.", href: "/services/electrical" },
  { icon: "🔧", title: "Plumbing", desc: "Full-service plumbing.", href: "/services/plumbing" },
  { icon: "🏠", title: "Weatherization", desc: "Energy efficiency upgrades.", href: "/weatherization" },
  { icon: "🏛️", title: "Government Contracting", desc: "Federal, state, and local government projects.", href: "/government-contracting" },
  { icon: "🔨", title: "General Contracting", desc: "Full general contracting services.", href: "/services" },
];

export default function Home() {
  return (
    <>
      <section className="bg-[#1A1A1A] text-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#E87722] font-semibold uppercase tracking-widest text-sm mb-4">Washington State Licensed General Contractor</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6">Built to Last.<br /><span className="text-[#E87722]">Built by Lumank.</span></h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#E87722] text-white px-8 py-4 rounded font-semibold text-lg">Get a Free Quote</Link>
            <Link href="/services" className="border border-white text-white px-8 py-4 rounded font-semibold text-lg">Our Services</Link>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <Link key={s.href} href={s.href} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-100">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-lg text-[#1A1A1A] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
