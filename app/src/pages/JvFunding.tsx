import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import { CheckCircle, ArrowRight, Send } from "lucide-react";

const benefits = [
  { icon: "01", title: "No Money Down Required", desc: "We fund 100% of the project costs. You contribute your expertise, your relationships and your ability to deliver — not your capital." },
  { icon: "02", title: "Full Funding for Your Deals", desc: "Land acquisition, build costs, professional fees — we structure the funding to cover the full project, from site purchase through to completion." },
  { icon: "03", title: "Fast Approvals & Flexible Terms", desc: "We move quickly. Initial feedback within 48 hours of submission. Terms structured around your project timeline and programme." },
  { icon: "04", title: "Maximise Your Profits & Potential", desc: "By removing the capital constraint, you can take on more projects, grow your pipeline and retain a meaningful share of the development profit." },
];

const steps = [
  { num: "1", title: "Submit Your Project", desc: "Tell us about your scheme — location, size, planning status and your role in the project." },
  { num: "2", title: "Initial Assessment", desc: "We review the opportunity and respond within 48 hours with our initial assessment and funding appetite." },
  { num: "3", title: "Terms & Structure", desc: "We agree the JV structure, profit share and legal framework. Our solicitors prepare the partnership agreement." },
  { num: "4", title: "Funded & Building", desc: "Capital deployed. Project underway. We support throughout the build programme and through to sale and profit distribution." },
];

const criteria = [
  "Residential new-build and conversion schemes",
  "Mixed-use developments with a residential element",
  "Sites with planning permission in place (preferred) or pending",
  "Ground-up development and heavy refurbishment",
  "London and South East preferred — UK-wide considered",
  "GDV from £500,000 upwards",
  "5 to 40+ units — smaller and larger schemes considered",
];

const roles = ["Main Contractor", "Developer / Project Manager", "Architect / Designer", "Land Promoter", "Other"];

const planningStatuses = [
  "Full planning granted", "Outline planning granted", "Planning application submitted",
  "Pre-application stage", "No planning yet",
];

export default function JvFunding() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div>
      <PageHero eyebrow="Joint Venture Funding" headline="100% JV Funding for Contractors and Developers" subline="Grow your projects with zero out-of-pocket cost. We provide full joint venture funding for qualifying development schemes — no money down required." />

      <section className="bg-navy-dark py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-16">
            <span className="text-eyebrow-lime block mb-4">Why Partner With Us</span>
            <h2 className="text-white text-3xl md:text-4xl font-display font-semibold mb-4">Have Great Projects, But Need Funding?</h2>
            <p className="text-white/60 text-lg max-w-xl">We provide 100% of the capital required for your development scheme. You bring the project — we bring the funding and expertise to get it built and sold.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-navy-main p-8 border border-lime/15 h-full group hover:border-lime/30 transition-colors">
                  <span className="text-lime font-display font-bold text-3xl block mb-4">{b.icon}</span>
                  <h3 className="text-white font-display font-semibold text-xl mb-3">{b.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-16">
            <span className="text-eyebrow block mb-4">How It Works</span>
            <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold mb-4">From Enquiry to Funded Project</h2>
            <p className="text-navy-main/60 text-lg max-w-xl">Our JV funding process is straightforward and designed to move at the pace your project requires.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 relative">
            <div className="hidden lg:block absolute top-[28px] left-[12%] right-[12%] h-[1px] bg-navy-main/10" />
            {steps.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="text-center px-4 relative z-10">
                  <div className={"w-14 h-14 mx-auto mb-5 flex items-center justify-center font-display font-bold text-xl border-2 " + (i === steps.length - 1 ? "bg-lime text-navy-dark border-lime" : "bg-navy-main text-white border-white shadow-md")}>
                    {s.num}
                  </div>
                  <h4 className="text-navy-main font-display font-semibold mb-2">{s.title}</h4>
                  <p className="text-navy-main/50 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <ScrollReveal direction="left">
              <div>
                <span className="text-eyebrow block mb-4">Funding Criteria</span>
                <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold mb-6">What We Fund</h2>
                <p className="text-navy-main/60 leading-relaxed mb-6">We consider a wide range of residential and mixed-use development schemes. The key requirement is a credible project and a capable delivery partner — you.</p>
                <ul className="space-y-3 mb-8">
                  {criteria.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 text-navy-main/80">
                      <CheckCircle className="w-4 h-4 text-navy-main mt-1 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-lime inline-flex items-center gap-2">Apply Now — No Obligation <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="bg-navy-dark p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[{n:"100%",l:"Funding Provided"},{n:"£0",l:"Out of Pocket"},{n:"48hrs",l:"Initial Response"},{n:"UK-wide",l:"Coverage"}].map((s,i) => (
                    <div key={i} className="text-center py-5 bg-white/[0.03] border border-lime/10">
                      <p className="text-lime font-display font-bold text-2xl mb-1">{s.n}</p>
                      <p className="text-white/40 text-[10px] uppercase tracking-[0.12em]">{s.l}</p>
                    </div>
                  ))}
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-6">We are actively seeking contractors and developers with strong project pipelines who want to grow without being constrained by capital. If that's you — we want to hear from you.</p>
                <a href="tel:02039165152" className="btn-lime w-full flex items-center justify-center gap-2">Call 0203 916 5152</a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 lg:py-32 section-padding" id="apply">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal direction="left">
              <div>
                <span className="text-eyebrow block mb-4">Apply for JV Funding</span>
                <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold mb-6">Tell Us About Your Project</h2>
                <p className="text-navy-main/70 leading-relaxed mb-4">Complete the form and we'll respond within 48 hours. All enquiries are handled confidentially — there is no obligation to proceed.</p>
                <p className="text-navy-main/60 text-sm leading-relaxed mb-8">Alternatively, call us directly for a quick conversation about whether your project qualifies.</p>
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
                  <h3 className="text-white text-xl font-display font-semibold mb-2">Application Submitted</h3>
                  <p className="text-white/70">We'll review your project and be in touch within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 border border-navy-main/10 shadow-sm">
                  <h3 className="text-navy-main font-display font-semibold text-xl mb-6">JV Funding Application</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="First Name *" required className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm" />
                    <input type="text" placeholder="Last Name *" required className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm" />
                  </div>
                  <input type="text" placeholder="Company Name" className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm mb-4" />
                  <input type="email" placeholder="Email *" required className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm mb-4" />
                  <input type="tel" placeholder="Phone *" required className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm mb-4" />
                  <select required defaultValue="" className="w-full px-4 py-3 border border-navy-main/15 text-navy-main focus:border-lime focus:outline-none text-sm mb-4 appearance-none cursor-pointer bg-white">
                    <option value="" disabled>Your Role *</option>
                    {roles.map((r) => <option key={r}>{r}</option>)}
                  </select>
                  <input type="text" placeholder="Project Location (town, city or postcode)" className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm mb-4" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="Estimated GDV" className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm" />
                    <input type="text" placeholder="Number of Units" className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm" />
                  </div>
                  <select required defaultValue="" className="w-full px-4 py-3 border border-navy-main/15 text-navy-main focus:border-lime focus:outline-none text-sm mb-4 appearance-none cursor-pointer bg-white">
                    <option value="" disabled>Planning Status</option>
                    {planningStatuses.map((s) => <option key={s}>{s}</option>)}
                  </select>
                  <textarea placeholder="Project Description — brief overview of the scheme, current status, your experience and why this project stacks up..." rows={4} className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm resize-none mb-6" />
                  <button type="submit" className="btn-lime w-full flex items-center justify-center gap-2"><Send className="w-4 h-4" /> Submit Application</button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
