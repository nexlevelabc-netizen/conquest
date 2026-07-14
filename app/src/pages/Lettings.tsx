import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import { MapPin, BedDouble, Maximize } from "lucide-react";

const filters = ["All", "To Let", "Let Agreed"];

const listings = [
  {
    title: "2 Bedroom Apartment",
    location: "SE London",
    status: "To Let",
    price: "£1,850 pcm",
    beds: 2,
    sqft: "850 sq ft",
    description: "Modern two-bedroom apartment in a secure development. Balcony, allocated parking, available immediately.",
    image: "/images/grid-1.jpg",
  },
  {
    title: "1 Bedroom Flat",
    location: "E London",
    status: "To Let",
    price: "£1,450 pcm",
    beds: 1,
    sqft: "520 sq ft",
    description: "Well-presented one-bedroom flat close to transport links. Part-furnished, available now.",
    image: "/images/grid-6.jpg",
  },
  {
    title: "3 Bedroom Townhouse",
    location: "SE London",
    status: "Let Agreed",
    price: "£2,400 pcm",
    beds: 3,
    sqft: "1,100 sq ft",
    description: "Spacious townhouse with private garden and garage. Unfurnished, popular location.",
    image: "/images/grid-9.jpg",
  },
  {
    title: "Studio Apartment",
    location: "E London",
    status: "To Let",
    price: "£1,200 pcm",
    beds: 0,
    sqft: "380 sq ft",
    description: "Contemporary studio in a landmark development. All bills included option available.",
    image: "/images/grid-2.jpg",
  },
  {
    title: "4 Bedroom House",
    location: "SE London",
    status: "To Let",
    price: "£3,200 pcm",
    beds: 4,
    sqft: "1,650 sq ft",
    description: "Substantial family home with garden and parking. Close to good schools, unfurnished.",
    image: "/images/grid-4.jpg",
  },
  {
    title: "2 Bedroom Maisonette",
    location: "E London",
    status: "Let Agreed",
    price: "£1,950 pcm",
    beds: 2,
    sqft: "780 sq ft",
    description: "Split-level maisonette with private entrance and garden. Recently refurbished throughout.",
    image: "/images/grid-5.jpg",
  },
];

export default function Lettings() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered = activeFilter === "All" ? listings : listings.filter((l) => l.status === activeFilter);

  return (
    <>
      <PageHero eyebrow="Properties" headline="Properties to Let" subline="A selection of residential properties available to rent through Conquest Property." />

      {/* Listings */}
      <section className="bg-white py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-10">
            <span className="text-eyebrow block mb-4">Lettings Listings</span>
            <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold mb-6">Properties to Let</h2>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((l, i) => (
              <ScrollReveal key={l.title} delay={i * 0.1}>
                <div className="group">
                  <div className="overflow-hidden mb-5 relative">
                    <img src={l.image} alt={l.title} className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs uppercase tracking-wider font-semibold ${l.status === "Let Agreed" ? "bg-navy-main text-white" : "bg-lime text-navy-dark"}`}>
                        {l.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-navy-main" />
                    <span className="text-navy-main/70 text-xs uppercase tracking-[0.15em] font-semibold">{l.location}</span>
                  </div>
                  <h3 className="text-navy-main text-xl font-display font-semibold mb-2">{l.title}</h3>
                  <p className="text-navy-main font-display font-bold text-2xl mb-3">{l.price}</p>
                  <p className="text-navy-main/60 text-sm leading-relaxed mb-4">{l.description}</p>
                  <div className="flex gap-4 text-xs text-navy-main/50">
                    <span className="flex items-center gap-1"><BedDouble className="w-3.5 h-3.5" />{l.beds === 0 ? "Studio" : `${l.beds} bed${l.beds > 1 ? "s" : ""}`}</span>
                    <span className="flex items-center gap-1"><Maximize className="w-3.5 h-3.5" />{l.sqft}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Landlord Services */}
      <section className="bg-cream py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-16">
            <span className="text-eyebrow block mb-4">For Landlords</span>
            <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold mb-4">Landlord Services</h2>
            <p className="text-navy-main/60 text-lg max-w-xl">We provide a full range of landlord services including tenant find, rent collection and full property management.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Tenant Find", desc: "We find, reference and place suitable tenants in your property." },
              { title: "Rent Collection", desc: "We collect rent, chase arrears and provide regular financial statements." },
              { title: "Full Management", desc: "Comprehensive management including maintenance, inspections and compliance." },
              { title: "Vacant Property", desc: "Short-term letting and security solutions for empty properties." },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white p-8 border border-navy-main/10 h-full group hover:border-lime/50 transition-colors">
                  <h3 className="text-navy-main font-display font-semibold text-lg mb-3">{s.title}</h3>
                  <p className="text-navy-main/60 text-sm leading-relaxed">{s.desc}</p>
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
            <h2 className="text-white text-3xl md:text-4xl font-display font-semibold mb-6">Looking to Let Your Property?</h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">Contact our lettings team for a free rental valuation and to discuss our landlord service packages.</p>
            <Link to="/contact" className="btn-lime inline-flex items-center gap-2">Get a Valuation</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
