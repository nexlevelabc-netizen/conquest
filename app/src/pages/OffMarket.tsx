import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import { Lock, Zap, Search, HardHat, Handshake, FileText, ArrowRight, Send, CheckCircle } from "lucide-react";

const advantages = [
  { icon: Lock, title: "No Open Market Competition", desc: "Properties shared only with pre-qualified buyers. You're negotiating without competitive tender pressure or sealed bids from unknown parties." },
  { icon: Zap, title: "Motivated Vendors", desc: "Off-market sellers typically need certainty, speed or discretion. This often translates to more pragmatic pricing and flexible terms." },
  { icon: Search, title: "Pre-Screened Opportunities", desc: "Every listing on our platform has been assessed by our team. You're not wading through unsuitable properties — just credible opportunities." },
  { icon: HardHat, title: "Development Potential", desc: "Many of our off-market properties carry significant value-add or development potential that hasn't yet been unlocked or widely marketed." },
  { icon: Handshake, title: "Direct Introductions", desc: "For the right buyers, we make direct introductions to sellers — enabling confidential discussions and bespoke deal structures." },
  { icon: FileText, title: "Full Information Packs", desc: "Where available, we provide planning history, title information, comparable evidence and our own assessment of each opportunity." },
];

const budgets = ["Up to £500,000", "£500k – £1m", "£1m – £2.5m", "£2.5m – £5m", "£5m+"];

export default function OffMarket() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <PageHero eyebrow="Private Deal Flow" headline="Properties That Never Reach the Open Market" subline="Our off-market listings platform provides qualified buyers and investors with access to sites and properties sourced directly from landowners, developers and receivers." />

      {/* Advantages */}
      <section className="bg-white py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-16">
            <span className="text-eyebrow block mb-4">Why Off-Market?</span>
            <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold mb-4">The Advantage of Discreet Deal Flow</h2>
            <p className="text-navy-main/60 text-lg max-w-xl">The best opportunities rarely make it onto Rightmove. Off-market sourcing gives you a genuine competitive edge.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-cream p-8 border-t-[3px] border-lime h-full group hover:-translate-y-1 hover:shadow-lg transition-all duration-500">
                  <a.icon className="w-8 h-8 text-navy-main mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-navy-main font-display font-semibold text-lg mb-3">{a.title}</h3>
                  <p className="text-navy-main/60 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Listings */}
      <section className="bg-navy-dark py-20 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-eyebrow-lime block mb-4">Access Listings</span>
            <h2 className="text-white text-3xl md:text-4xl font-display font-semibold mb-6">View Our Current Off-Market Portfolio</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">Our off-market listings platform is updated regularly with new sites and properties. Register to receive alerts when new opportunities matching your criteria become available.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://listings-conquest-property.co.uk" target="_blank" rel="noopener noreferrer" className="btn-lime inline-flex items-center gap-2">View All Listings <ArrowRight className="w-4 h-4" /></a>
              <Link to="/investors" className="border border-white/30 text-white px-8 py-4 uppercase text-xs tracking-widest font-semibold hover:bg-white/10 transition-all">Register for Alerts</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Buyer Registration */}
      <section className="bg-cream py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal direction="left">
              <div>
                <span className="text-eyebrow block mb-4">Register Your Criteria</span>
                <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold mb-6">Tell Us What You're Looking For</h2>
                <p className="text-navy-main/70 leading-relaxed mb-8">Share your acquisition criteria and we'll match opportunities to your requirements — contacting you directly when something relevant becomes available.</p>
                <div className="space-y-2">
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
                  <h3 className="text-white text-xl font-display font-semibold mb-2">Registration Submitted</h3>
                  <p className="text-white/70">We'll match you with relevant off-market opportunities.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 border border-navy-main/10 shadow-sm">
                  <h3 className="text-navy-main font-display font-semibold text-xl mb-6">Buyer Registration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="First Name *" required className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm" />
                    <input type="text" placeholder="Last Name *" required className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm" />
                  </div>
                  <input type="email" placeholder="Email *" required className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm mb-4" />
                  <input type="tel" placeholder="Phone *" required className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm mb-4" />
                  <select required defaultValue="" className="w-full px-4 py-3 border border-navy-main/15 text-navy-main focus:border-lime focus:outline-none text-sm mb-4 appearance-none cursor-pointer bg-white">
                    <option value="" disabled>Budget *</option>
                    {budgets.map((b) => <option key={b}>{b}</option>)}
                  </select>
                  <input type="text" placeholder="Preferred Property Types" className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm mb-4" />
                  <input type="text" placeholder="Preferred Locations" className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm mb-4" />
                  <textarea placeholder="Any further details about what you're looking for..." rows={3} className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm resize-none mb-6" />
                  <button type="submit" className="btn-lime w-full flex items-center justify-center gap-2"><Send className="w-4 h-4" /> Register My Criteria</button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
