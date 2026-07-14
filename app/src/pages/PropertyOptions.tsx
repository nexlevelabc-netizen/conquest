import { useState } from "react";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import { Home, TrendingUp, Shield, Coins, FileText, Users, Send, CheckCircle } from "lucide-react";

const optionCards = [
  { icon: Home, title: "Retain Ownership", desc: "You keep your land until the option is exercised. There is no sale until planning is secured and we choose to proceed." },
  { icon: TrendingUp, title: "Share the Uplift", desc: "The sale price is linked to the value after planning — meaning you benefit from the increased value our planning work creates." },
  { icon: Shield, title: "Zero Planning Risk", desc: "We bear the full cost and risk of the planning process. If planning is refused, you've lost nothing and remain the owner of your land." },
  { icon: Coins, title: "Option Payment", desc: "In many cases we pay an upfront option fee — providing immediate value while the planning process runs its course." },
  { icon: FileText, title: "Flexible Terms", desc: "Option periods, pricing formulas and conditions are negotiated to work for both parties. We take a tailored approach to every situation." },
  { icon: Users, title: "Expert Partners", desc: "Our planning consultants, architects and solicitors are experienced in maximising planning outcomes — your asset is in expert hands." },
];

export default function PropertyOptions() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <PageHero eyebrow="Property Option Agreements" headline="Unlock Value Without the Risk" subline="A property option agreement allows landowners to benefit from planning uplift and development value while we manage the planning process, risk and capital." />

      {/* What Is a Property Option */}
      <section className="bg-white py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-16">
            <span className="text-eyebrow block mb-4">What Is a Property Option?</span>
            <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold mb-4">A Structure That Works for Landowners</h2>
            <p className="text-navy-main/60 text-lg max-w-xl">An option agreement gives us the right — but not the obligation — to purchase your land within a set period, usually after obtaining planning permission. You retain ownership until we choose to exercise the option.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {optionCards.map((c, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-cream p-8 border-t-[3px] border-lime h-full group hover:-translate-y-1 hover:shadow-lg transition-all duration-500">
                  <c.icon className="w-8 h-8 text-navy-main mb-4 group-hover:text-lime transition-colors" />
                  <h3 className="text-navy-main font-display font-semibold text-lg mb-3">{c.title}</h3>
                  <p className="text-navy-main/60 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="bg-navy-dark py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal direction="left">
              <div>
                <span className="text-eyebrow-lime block mb-4">Discuss an Option</span>
                <h2 className="text-white text-3xl md:text-4xl font-display font-semibold mb-6">Find Out If Your Site Qualifies</h2>
                <p className="text-white/60 leading-relaxed mb-8">Not every site is suitable for an option agreement. Contact us for a free, no-obligation assessment and we'll give you honest advice on the best route for your situation.</p>
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
                  <h3 className="text-white text-xl font-display font-semibold mb-2">Enquiry Submitted</h3>
                  <p className="text-white/70">We'll assess your site and be in touch with our recommendations.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-navy-main p-8 border border-lime/15">
                  <h3 className="text-white font-display font-semibold text-xl mb-6">Option Enquiry Form</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="First Name *" required className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 focus:border-lime focus:outline-none text-sm" />
                    <input type="text" placeholder="Last Name *" required className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 focus:border-lime focus:outline-none text-sm" />
                  </div>
                  <input type="email" placeholder="Email *" required className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 focus:border-lime focus:outline-none text-sm mb-4" />
                  <input type="tel" placeholder="Phone *" required className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 focus:border-lime focus:outline-none text-sm mb-4" />
                  <input type="text" placeholder="Site Address / Postcode *" required className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 focus:border-lime focus:outline-none text-sm mb-4" />
                  <textarea placeholder="Site description — current use, size, any existing planning, your ownership situation..." rows={4} className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 focus:border-lime focus:outline-none text-sm resize-none mb-6" />
                  <button type="submit" className="btn-lime w-full flex items-center justify-center gap-2"><Send className="w-4 h-4" /> Request Assessment</button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
