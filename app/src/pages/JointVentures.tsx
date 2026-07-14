import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import {
  Home,
  Briefcase,
  HardHat,
  CheckCircle,
  ArrowRight,
  Send,
} from "lucide-react";

const jvStructures = [
  {
    icon: Home,
    title: "Land & Capital JV",
    desc: "Landowner contributes the site. We bring development capital, planning expertise and delivery capability. Profits shared on a negotiated basis.",
  },
  {
    icon: Briefcase,
    title: "Equity Investment JV",
    desc: "Investor provides equity capital alongside our development expertise. Returns structured as preferred equity, profit share or a combination.",
  },
  {
    icon: HardHat,
    title: "Developer Partnership",
    desc: "We bring off-market sites and capital introductions. You bring your build capability and programme management. A genuine partnership.",
  },
];

export default function JointVentures() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Joint Venture Partnerships"
        headline="Development Partnerships Built on Shared Success"
        subline="We structure joint ventures with landowners, investors and developers across the UK — combining land, capital and expertise to deliver profitable residential and mixed-use schemes."
      />

      {/* JV Structures */}
      <section className="bg-white py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-16">
            <span className="text-eyebrow block mb-4">JV Structures We Use</span>
            <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold mb-4">
              How We Structure Joint Ventures
            </h2>
            <p className="text-navy-main/60 text-lg max-w-xl">
              Every JV is structured around the specific assets and objectives of the
              parties involved. Here are the most common structures we use.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jvStructures.map((jv, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="bg-cream p-10 border-t-[3px] border-lime h-full group hover:-translate-y-1 hover:shadow-lg transition-all duration-500">
                  <jv.icon className="w-10 h-10 text-navy-main mb-5 group-hover:text-lime transition-colors" />
                  <h3 className="text-navy-main font-display font-semibold text-xl mb-4">
                    {jv.title}
                  </h3>
                  <p className="text-navy-main/60 text-sm leading-relaxed">
                    {jv.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why JV With Conquest */}
      <section className="bg-navy-dark py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal direction="left">
              <div>
                <span className="text-eyebrow-lime block mb-4">Why JV With Conquest?</span>
                <h2 className="text-white text-3xl md:text-4xl font-display font-semibold mb-6">
                  What We Bring to Every Partnership
                </h2>
                <p className="text-white/60 leading-relaxed mb-6">
                  A joint venture with Conquest Property means you're working with a
                  team that has the relationships, knowledge and track record to deliver.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "20+ years of active development experience",
                    "Off-market land sourcing and deal origination",
                    "Planning relationships across London and the South East",
                    "Access to development finance panel and family office capital",
                    "Pattinson auction partnership for disposal",
                    "Investor network for equity and co-investment",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70">
                      <CheckCircle className="w-4 h-4 text-lime mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-navy-main p-8 border border-lime/15">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { n: "£500k", l: "Min GDV" },
                    { n: "£5m+", l: "Max GDV (typical)" },
                    { n: "5–40", l: "Units" },
                    { n: "UK-wide", l: "Geography" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="text-center py-5 bg-white/[0.03] border border-lime/10"
                    >
                      <p className="text-lime font-display font-bold text-2xl mb-1">
                        {s.n}
                      </p>
                      <p className="text-white/40 text-[10px] uppercase tracking-[0.12em]">
                        {s.l}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Our JV sweet spot is residential and mixed-use schemes between £500k
                  and £5m GDV, where the market is active and the returns for
                  well-structured deals are compelling.
                </p>
                <Link to="/jv-funding" className="btn-lime w-full flex items-center justify-center gap-2">
                  100% JV Funding <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* JV Enquiry Form */}
      <section className="bg-cream py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal direction="left">
              <div>
                <span className="text-eyebrow block mb-4">Propose a JV</span>
                <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold mb-6">
                  Tell Us About Your Opportunity
                </h2>
                <p className="text-navy-main/70 leading-relaxed mb-4">
                  Whether you have land, capital or a site under offer, we'd like to
                  hear about your opportunity. All enquiries are handled in strict
                  confidence.
                </p>
                <div className="space-y-2 mt-8">
                  <a href="tel:02039165152" className="block text-navy-main text-sm hover:text-lime transition-colors">0203 916 5152</a>
                  <a href="tel:07462342430" className="block text-navy-main text-sm hover:text-lime transition-colors">07462 342 430</a>
                  <a href="mailto:enquiries@conquest-property.co.uk" className="block text-navy-main text-sm hover:text-lime transition-colors">enquiries@conquest-property.co.uk</a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              {submitted ? (
                <div className="bg-navy-main p-10 text-center">
                  <CheckCircle className="w-12 h-12 text-lime mx-auto mb-4" />
                  <h3 className="text-white text-xl font-display font-semibold mb-2">Enquiry Submitted</h3>
                  <p className="text-white/70">Thank you. We'll review your opportunity and respond within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 border border-navy-main/10 shadow-sm">
                  <h3 className="text-navy-main font-display font-semibold text-xl mb-6">JV Enquiry Form</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="First Name *" required className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm" />
                    <input type="text" placeholder="Last Name *" required className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm" />
                  </div>
                  <input type="email" placeholder="Email *" required className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm mb-4" />
                  <input type="tel" placeholder="Phone *" required className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm mb-4" />
                  <select required defaultValue="" className="w-full px-4 py-3 border border-navy-main/15 text-navy-main focus:border-lime focus:outline-none text-sm mb-4 appearance-none cursor-pointer bg-white">
                    <option value="" disabled>I Am Bringing *</option>
                    <option>Land / Site</option>
                    <option>Equity Capital</option>
                    <option>Build Capability</option>
                    <option>Planning Consent</option>
                    <option>Combination of the above</option>
                  </select>
                  <textarea placeholder="Opportunity Details — location, size, current position, what you're looking for from a JV partner..." rows={4} className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm resize-none mb-6" />
                  <button type="submit" className="btn-lime w-full flex items-center justify-center gap-2"><Send className="w-4 h-4" /> Propose a Joint Venture</button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
