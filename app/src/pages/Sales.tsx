import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import { MapPin, BedDouble, Maximize, ExternalLink } from "lucide-react";

const filters = ["All", "For Sale", "Under Offer"];

const listings = [
  {
    title: "2 Bedroom Apartment",
    location: "SE London",
    status: "For Sale",
    price: "£485,000",
    beds: 2,
    sqft: "850 sq ft",
    description: "Modern apartment in a recently completed development. Open-plan living, balcony, allocated parking.",
    image: "/images/grid-1.jpg",
  },
  {
    title: "3 Bedroom Townhouse",
    location: "E London",
    status: "For Sale",
    price: "£675,000",
    beds: 3,
    sqft: "1,250 sq ft",
    description: "Stylish townhouse with private garden, garage and open-plan ground floor. Excellent transport links.",
    image: "/images/grid-9.jpg",
  },
  {
    title: "1 Bedroom Apartment",
    location: "SE London",
    status: "Under Offer",
    price: "£375,000",
    beds: 1,
    sqft: "560 sq ft",
    description: "Well-appointed one-bedroom apartment in a popular residential development. Chain-free.",
    image: "/images/grid-6.jpg",
  },
  {
    title: "4 Bedroom House",
    location: "E London",
    status: "For Sale",
    price: "£925,000",
    beds: 4,
    sqft: "1,850 sq ft",
    description: "Substantial family home with generous gardens, off-street parking and potential for further extension.",
    image: "/images/grid-4.jpg",
  },
  {
    title: "Studio Apartment",
    location: "SE London",
    status: "For Sale",
    price: "£295,000",
    beds: 0,
    sqft: "410 sq ft",
    description: "Contemporary studio in a landmark development. Ideal for first-time buyers or investors.",
    image: "/images/grid-2.jpg",
  },
  {
    title: "3 Bedroom Duplex",
    location: "E London",
    status: "Under Offer",
    price: "£720,000",
    beds: 3,
    sqft: "1,400 sq ft",
    description: "Split-level duplex with two terraces, private entrance and parking. Rare opportunity.",
    image: "/images/grid-5.jpg",
  },
];

export default function Sales() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered = activeFilter === "All" ? listings : listings.filter((l) => l.status === activeFilter);

  return (
    <>
      <PageHero eyebrow="Properties" headline="Properties for Sale" subline="A selection of residential properties for sale through Conquest Property and our Pattinson partnership." />

      {/* Listings */}
      <section className="bg-white py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-10">
            <span className="text-eyebrow block mb-4">Sales Listings</span>
            <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold mb-6">Properties for Sale</h2>
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
                      <span className={`px-3 py-1 text-xs uppercase tracking-wider font-semibold ${l.status === "Under Offer" ? "bg-navy-main text-white" : "bg-lime text-navy-dark"}`}>
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

      {/* Pattinson Link */}
      <section className="bg-cream py-16 section-padding">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="bg-white p-8 border border-navy-main/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-navy-main font-display font-semibold text-xl mb-2">More Properties Available</h3>
                <p className="text-navy-main/60 text-sm">Search our full listings on the Pattinson platform.</p>
              </div>
              <a href="https://conquest-property.pattinson.co.uk" target="_blank" rel="noopener noreferrer" className="btn-lime inline-flex items-center gap-2 shrink-0">
                View All Listings <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Register CTA */}
      <section className="bg-navy-dark py-24 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-white text-3xl md:text-4xl font-display font-semibold mb-6">Register for Property Alerts</h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">Receive notifications when new properties matching your criteria come to market.</p>
            <Link to="/contact" className="btn-lime inline-flex items-center gap-2">Register Interest</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
