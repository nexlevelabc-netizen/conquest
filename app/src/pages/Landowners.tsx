import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import { CheckCircle, ArrowRight, Send } from "lucide-react";

const services = [
  { icon: "📋", title: "Free Site Assessment", desc: "We assess development potential at no cost and with no obligation. You'll receive honest, experienced feedback within 48 hours." },
  { icon: "🔒", title: "Complete Discretion", desc: "We handle all enquiries in strict confidence. There is no obligation to proceed and your information is never shared without your consent." },
  { icon: "⚡", title: "Speed of Purchase", desc: "Where we agree terms, we move quickly. We're not reliant on mortgage finance and can exchange and complete to your timescale." },
  { icon: "📈", title: "Planning Uplift", desc: "We can structure option agreements that allow you to benefit from planning uplift — sharing in the increased value without taking on the risk." },
  { icon: "🤝", title: "Joint Ventures", desc: "Retain an equity stake in your land and participate in the development profit. We bring the expertise, capital and delivery capability." },
  { icon: "⚖️", title: "Probate & Estate Sales", desc: "Sensitive, experienced handling of inherited property. We work respectfully with executors, solicitors and families at a difficult time." },
];

const whatWeBuy = [
  "Residential properties with development potential",
  "Garages, car parks and redundant commercial premises",
  "Garden plots and infill land",
  "Sites with or without planning permission",
  "Stalled or part-built developments",
  "Portfolio or multiple-property situations",
];

const situations = [
  "Looking to sell — need speed",
  "Exploring options — not decided",
  "Probate / Estate situation",
  "Open to option or JV",
  "Have planning — want to sell",
  "Other",
];

export default function Landowners() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <PageHero eyebrow="For Landowners" headline="Unlock the Value in Your Land" subline="We work directly with landowners across London and the South East to provide discreet, no-obligation assessments and swift, professional transactions." />

      {/* How We Help */}
      <section className="bg-white py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-16">
            <span className="text-eyebrow block mb-4">How We Help Landowners</span>
            <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold mb-4">Every Situation Is Different — We Understand That</h2>
            <p className="text-navy-main/60 text-lg max-w-xl">Whether you're looking for a straightforward sale, exploring planning potential or navigating a probate situation, we have the experience to help.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
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

      {/* What We Buy */}
      <section className="bg-navy-dark py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal direction="left">
              <div>
                <span className="text-eyebrow-lime block mb-4">What We Buy</span>
                <h2 className="text-white text-3xl md:text-4xl font-display font-semibold mb-6">Sites We Are Actively Acquiring</h2>
                <p className="text-white/60 leading-relaxed mb-6">We are actively seeking development sites and properties across London and the South East. If you own or control any of the following, we would like to hear from you.</p>
                <ul className="space-y-3 mb-8">
                  {whatWeBuy.map((w, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70"><CheckCircle className="w-4 h-4 text-lime mt-1 shrink-0" /><span>{w}</span></li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-lime inline-flex items-center gap-2">Tell Us About Your Site <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="bg-navy-main p-8 border border-lime/15">
                <p className="text-white/80 italic font-display text-lg leading-relaxed mb-6 border-t-[3px] border-lime pt-6">"Conquest Property moved quickly and discreetly on our site. From initial conversation to exchanged contracts was less than six weeks. Exactly what we needed."</p>
                <p className="text-white/40 text-sm mb-6">Private Landowner, South East London</p>
                <div className="border-t border-lime/15 pt-6">
                  <p className="text-white/50 text-sm leading-relaxed">Our core geography is SE and East London (E1–E17, SE1–SE28) across 11 boroughs, with UK-wide capability for the right opportunity.</p>
                </div>
                <Link to="/land-development" className="btn-lime w-full flex items-center justify-center gap-2 mt-6">View Our Acquisition Criteria</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="bg-cream py-24 lg:py-32 section-padding" id="enquire">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal direction="left">
              <div>
                <span className="text-eyebrow block mb-4">Free Assessment</span>
                <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold mb-6">Tell Us About Your Property</h2>
                <p className="text-navy-main/70 leading-relaxed mb-4">Fill in the form and we'll get back to you within 24 hours with honest, no-obligation feedback on the development potential of your site.</p>
                <p className="text-navy-main/60 text-sm leading-relaxed mb-8">No agents. No fuss. Just a straightforward conversation with an experienced developer.</p>
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
                  <h3 className="text-white text-xl font-display font-semibold mb-2">Enquiry Submitted</h3>
                  <p className="text-white/70">We'll be in touch within 24 hours with our initial assessment.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 border border-navy-main/10 shadow-sm">
                  <h3 className="text-navy-main font-display font-semibold text-xl mb-6">Landowner Enquiry Form</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="First Name *" required className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm" />
                    <input type="text" placeholder="Last Name *" required className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm" />
                  </div>
                  <input type="email" placeholder="Email *" required className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm mb-4" />
                  <input type="tel" placeholder="Phone *" required className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm mb-4" />
                  <input type="text" placeholder="Property / Site Address *" required className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm mb-4" />
                  <select required defaultValue="" className="w-full px-4 py-3 border border-navy-main/15 text-navy-main focus:border-lime focus:outline-none text-sm mb-4 appearance-none cursor-pointer bg-white">
                    <option value="" disabled>Your Situation *</option>
                    {situations.map((s) => <option key={s}>{s}</option>)}
                  </select>
                  <textarea placeholder="Tell us a little more about your situation..." rows={4} className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm resize-none mb-6" />
                  <button type="submit" className="btn-lime w-full flex items-center justify-center gap-2"><Send className="w-4 h-4" /> Request Free Assessment</button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
