import Link from "next/link";

const services = [
  { title: "HVAC", desc: "Heating, ventilation, and air conditioning.", href: "/services/hvac", icon: "🌡️" },
  { title: "Electrical", desc: "Licensed electrical contractors.", href: "/services/electrical", icon: "⪙" },
  { title: "Plumbing", desc: "Full-service plumbing.", href: "/services/plumbing", icon: "🔧" },
  { title: "Weatherization", desc: "Energy audits and weatherization.", href: "/weatherization", icon: "🏠 " },
  { title: "Government Contracting", desc: "Certified for government projects.", href: "/government-contracting", icon: "🏛️" },
];

export default function ServicesPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-serif text-4xl font-bold text-[#1A1A1A] mb-4">Our Services</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map(s => (
            <Link key={s.href} href={s.href} className="border border-gray-200 rounded-xl p-6 hover:border-[#E87722]">
              <div className="text-3xl mb-3">{s.icon}</div>
              <h2 className="font-semibold text-xl text-[#1A1A1A] mb-2">{s.title}</h2>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
