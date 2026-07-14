import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import { MapPin, Home, Calendar, ArrowRight } from "lucide-react";

const filters = ["All", "Completed", "Under Construction", "Upcoming", "In Planning"];

const projects = [
  {
    name: "Victoria Mews",
    location: "SE London",
    status: "Completed",
    statusColor: "bg-navy-main",
    units: "4 residential units",
    type: "Residential development",
    gdv: "£2.1m",
    description: "High-quality residential development on a constrained urban site. Delivered on programme and budget.",
    image: "/images/grid-1.jpg",
  },
  {
    name: "Meridian Quarter",
    location: "E London",
    status: "Under Construction",
    statusColor: "bg-lime text-navy-dark",
    units: "12 apartments",
    type: "Mixed-use development",
    gdv: "£4.8m",
    description: "Prime location mixed-use scheme combining residential apartments with ground-floor commercial space. Currently on site.",
    image: "/images/grid-5.jpg",
  },
  {
    name: "Ladywell Place",
    location: "SE London",
    status: "Upcoming",
    statusColor: "bg-cream text-navy-main border border-navy-main/20",
    units: "6 townhouses",
    type: "Residential development",
    gdv: "£3.2m",
    description: "Family-focused townhouse development with private gardens and allocated parking in a sought-after residential area.",
    image: "/images/grid-9.jpg",
  },
  {
    name: "Trafalgar Court",
    location: "SE London",
    status: "In Planning",
    statusColor: "bg-navy-dark text-white border border-lime/20",
    units: "18 units",
    type: "BTR residential",
    gdv: "£6.5m",
    description: "Build-to-rent scheme targeting the growing professional rental market. Pre-application discussions underway with the local authority.",
    image: "/images/grid-2.jpg",
  },
  {
    name: "London Fields House",
    location: "E London",
    status: "Completed",
    statusColor: "bg-navy-main",
    units: "8 apartments",
    type: "Residential conversion",
    gdv: "£3.8m",
    description: "High-end residential conversion of a former commercial building. Fully sold with above-market price per sq ft achieved.",
    image: "/images/grid-6.jpg",
  },
  {
    name: "Ripple Road",
    location: "East London",
    status: "In Planning",
    statusColor: "bg-navy-dark text-white border border-lime/20",
    units: "32 units",
    type: "Residential development",
    gdv: "£8.5m",
    description: "Larger-scale residential scheme on a formerly commercial site. Outline planning application submitted.",
    image: "/images/grid-4.jpg",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.status === activeFilter);

  return (
    <>
      <PageHero eyebrow="Development Portfolio" headline="Our Projects" subline="A selection of completed, ongoing and upcoming development schemes delivered across London and the South East." />

      {/* Pipeline Stats */}
      <section className="bg-cream py-16 section-padding">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[{n:"£50m+",l:"Pipeline Value"},{n:"10+",l:"Active Projects"},{n:"100+",l:"Units Delivered"},{n:"11",l:"London Boroughs"}].map((s,i) => (
                <div key={i} className="bg-white p-6 text-center border border-navy-main/10">
                  <p className="text-navy-main font-display font-bold text-3xl mb-1">{s.n}</p>
                  <p className="text-navy-main/50 text-[10px] uppercase tracking-[0.12em] font-medium">{s.l}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-10">
            <span className="text-eyebrow block mb-4">Our Projects</span>
            <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold mb-6">Development Portfolio</h2>
          </ScrollReveal>

          {/* Filter Buttons */}
          <ScrollReveal className="mb-12">
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-5 py-2.5 text-xs uppercase tracking-widest font-semibold transition-all border ${
                    activeFilter === f
                      ? "bg-navy-main text-white border-navy-main"
                      : "bg-white text-navy-main border-navy-main/15 hover:border-navy-main"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 0.1}>
                <div className="group">
                  <div className="overflow-hidden mb-5 relative">
                    <img src={p.image} alt={p.name} className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs uppercase tracking-wider font-semibold ${p.statusColor}`}>{p.status}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-navy-main" />
                    <span className="text-navy-main/70 text-xs uppercase tracking-[0.15em] font-semibold">{p.location}</span>
                  </div>
                  <h3 className="text-navy-main text-xl font-display font-semibold mb-2">{p.name}</h3>
                  <p className="text-navy-main/70 text-sm leading-relaxed mb-4">{p.description}</p>
                  <div className="flex gap-4 text-xs text-navy-main/50">
                    <span className="flex items-center gap-1"><Home className="w-3.5 h-3.5" />{p.units}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />GDV {p.gdv}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-dark py-24 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-white text-3xl md:text-4xl font-display font-semibold mb-6">Partner With Us on Your Next Project</h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">We are always looking for new development opportunities. If you have land or a site with potential, we'd love to hear from you.</p>
            <Link to="/land-development" className="btn-lime inline-flex items-center gap-2">Submit a Site <ArrowRight className="w-4 h-4" /></Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
