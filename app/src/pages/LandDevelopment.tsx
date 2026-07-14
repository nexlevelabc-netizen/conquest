import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import { CheckCircle, ArrowRight, Send } from "lucide-react";

const siteTypes = [
  { icon: "🏚️", title: "Residential Properties", desc: "Single or multiple dwellings with development potential — extending, converting, or demolishing to build. Probate, vacant and motivated seller situations welcomed." },
  { icon: "🏭", title: "Commercial & Industrial Sites", desc: "Redundant commercial premises, garages, car parks, warehouses and industrial units suitable for residential conversion or redevelopment." },
  { icon: "🌿", title: "Land & Garden Plots", desc: "Infill plots, side returns, rear gardens and greenfield land within the M25 with potential for residential development from single units to 40+ homes." },
  { icon: "🏗️", title: "Part-Built Schemes", desc: "Stalled or distressed developments requiring capital, planning expertise or new ownership to complete. We move quickly and decisively." },
  { icon: "📋", title: "Sites with Planning", desc: "Consented schemes across all tenure types — private sale, shared ownership, BTR and affordable — from 5 to 200 units." },
  { icon: "🔑", title: "Probate & Estate Sales", desc: "Sensitive, discreet and professional handling of estate property with development potential. We work respectfully with executors and solicitors." },
];

const approachPoints = [
  "Free, no-obligation site assessment within 48 hours",
  "Indicative offer provided quickly — we don't waste your time",
  "Experienced in unconditional, option and conditional contracts",
  "Relationships with planning consultants, architects and solicitors",
  "Completion timetables that work around you",
  "20+ years experience — we've handled the complex ones",
];

const boroughs = [
  "Tower Hamlets", "Newham", "Hackney", "Waltham Forest", "Redbridge",
  "Barking & Dagenham", "Southwark", "Lewisham", "Greenwich", "Bexley",
  "Lambeth", "Home Counties",
];

const siteTypesSelect = [
  "Residential Property", "Commercial / Industrial", "Land / Garden Plot",
  "Part-Built Scheme", "Consented Development Site", "Other",
];

export default function LandDevelopment() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <PageHero eyebrow="Land Acquisition & Development" headline="Off-Market Sites. Unlocked Potential." subline="We source, acquire and develop residential and mixed-use sites across London and the South East — working directly with landowners, probate solicitors and receivers to secure opportunities ahead of the market." />

      {/* Site Types */}
      <section className="bg-white py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-16">
            <span className="text-eyebrow block mb-4">What We Acquire</span>
            <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold mb-4">Development Sites We're Actively Seeking</h2>
            <p className="text-navy-main/60 text-lg max-w-xl">We have an active acquisition mandate for sites across London and the South East. If you own or control any of the following, we want to hear from you.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteTypes.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-cream p-8 border-t-[3px] border-lime h-full group hover:-translate-y-1 hover:shadow-lg transition-all duration-500">
                  <span className="text-2xl block mb-4">{s.icon}</span>
                  <h3 className="text-navy-main font-display font-semibold text-lg mb-3">{s.title}</h3>
                  <p className="text-navy-main/60 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-navy-dark py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal direction="left">
              <div>
                <span className="text-eyebrow-lime block mb-4">Our Approach</span>
                <h2 className="text-white text-3xl md:text-4xl font-display font-semibold mb-6">We Move Quickly and Discreetly</h2>
                <p className="text-white/60 leading-relaxed mb-6">Our acquisition process is designed around the landowner's needs — not ours. We provide certainty, speed and transparency at every stage.</p>
                <ul className="space-y-3 mb-8">
                  {approachPoints.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70"><CheckCircle className="w-4 h-4 text-lime mt-1 shrink-0" /><span>{p}</span></li>
                  ))}
                </ul>
                <Link to="#submit" className="btn-lime inline-flex items-center gap-2">Submit Your Site Now <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="bg-navy-main p-8 border border-lime/15">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[{n:"£50m+",l:"Pipeline Value"},{n:"20+",l:"Years Experience"},{n:"11",l:"London Boroughs"},{n:"5–40",l:"Unit Sweet Spot"}].map((s,i) => (
                    <div key={i} className="text-center py-5 bg-white/[0.03] border border-lime/10">
                      <p className="text-lime font-display font-bold text-2xl mb-1">{s.n}</p>
                      <p className="text-white/40 text-[10px] uppercase tracking-[0.12em]">{s.l}</p>
                    </div>
                  ))}
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-6">Our development pipeline includes schemes at planning, under construction and recently completed across South East and East London, the Home Counties and the wider South East.</p>
                <Link to="/about" className="btn-lime w-full flex items-center justify-center gap-2">Learn About Us</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Boroughs */}
      <section className="bg-cream py-20 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-12">
            <span className="text-eyebrow block mb-4">Our Territory</span>
            <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold mb-4">Active Across 11 London Boroughs</h2>
            <p className="text-navy-main/60 text-lg max-w-xl">Our core focus is SE and East London, with coverage across these boroughs and surrounding areas.</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {boroughs.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-white border border-navy-main/10 py-3 px-4 text-center text-navy-main text-sm font-medium hover:border-lime hover:text-lime transition-colors cursor-default">
                  {b}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="bg-navy-dark py-24 lg:py-32 section-padding" id="submit">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal direction="left">
              <div>
                <span className="text-eyebrow-lime block mb-4">Submit Your Site</span>
                <h2 className="text-white text-3xl md:text-4xl font-display font-semibold mb-6">Tell Us About Your Site</h2>
                <p className="text-white/60 leading-relaxed mb-4">Whether you have a single property or a large development site, we'd like to hear from you. All enquiries are handled confidentially.</p>
                <p className="text-white/50 text-sm leading-relaxed mb-8">We'll respond within 24 hours with initial feedback and, where appropriate, arrange a site visit at your convenience.</p>
                <div className="space-y-2">
                  <a href="tel:02039165152" className="block text-navy-main text-sm hover:text-lime transition-colors">0203 916 5152</a>
                  <a href="tel:07462342430" className="block text-navy-main text-sm hover:text-lime transition-colors">07462 342 430</a>
                  <a href="mailto:enquiries@conquest-property.co.uk" className="block text-navy-main text-sm hover:text-lime transition-colors">enquiries@conquest-property.co.uk</a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              {submitted ? (
                <div className="bg-navy-main p-10 text-center border border-lime/15">
                  <CheckCircle className="w-12 h-12 text-lime mx-auto mb-4" />
                  <h3 className="text-white text-xl font-display font-semibold mb-2">Site Submitted</h3>
                  <p className="text-white/70">We'll review your submission and be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-navy-main p-8 border border-lime/15">
                  <h3 className="text-white font-display font-semibold text-xl mb-6">Site Submission Form</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="First Name *" required className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 focus:border-lime focus:outline-none text-sm" />
                    <input type="text" placeholder="Last Name *" required className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 focus:border-lime focus:outline-none text-sm" />
                  </div>
                  <input type="email" placeholder="Email *" required className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 focus:border-lime focus:outline-none text-sm mb-4" />
                  <input type="tel" placeholder="Phone *" required className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 focus:border-lime focus:outline-none text-sm mb-4" />
                  <input type="text" placeholder="Site Address / Postcode *" required className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 focus:border-lime focus:outline-none text-sm mb-4" />
                  <select required defaultValue="" className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white focus:border-lime focus:outline-none text-sm mb-4 appearance-none cursor-pointer">
                    <option value="" disabled className="bg-navy-dark">Site Type</option>
                    {siteTypesSelect.map((s) => <option key={s} className="bg-navy-dark">{s}</option>)}
                  </select>
                  <textarea placeholder="Brief description — current use, size, planning status, reason for sale..." rows={4} className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 focus:border-lime focus:outline-none text-sm resize-none mb-6" />
                  <button type="submit" className="btn-lime w-full flex items-center justify-center gap-2"><Send className="w-4 h-4" /> Submit Site Details</button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
