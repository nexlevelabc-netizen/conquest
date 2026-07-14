import { useState } from "react";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import {
  Lock,
  Zap,
  Search,
  Handshake,
  Briefcase,
  Gavel,
  CheckCircle,
  ArrowRight,
  Send,
} from "lucide-react";

const benefits = [
  {
    icon: Lock,
    title: "Off-Market Deal Flow",
    desc: "Sites and opportunities sourced directly from landowners, probate solicitors and receivers — not listed on Rightmove or Zoopla.",
  },
  {
    icon: Zap,
    title: "First Access",
    desc: "Registered investors receive opportunities before they're shared more widely. Speed and decisiveness is rewarded in our network.",
  },
  {
    icon: Search,
    title: "Pre-Screened Deals",
    desc: "Every opportunity is assessed by our team before being shared. We only present deals with genuine investment merit and credible numbers.",
  },
  {
    icon: Handshake,
    title: "JV Structures",
    desc: "For investors wanting equity returns, we can structure joint ventures alongside our development expertise and planning capability.",
  },
  {
    icon: Briefcase,
    title: "Development Finance",
    desc: "Access to our panel of specialist lenders for senior debt, mezzanine and bridging — structured to maximise your return on equity.",
  },
  {
    icon: Gavel,
    title: "Auction Access",
    desc: "First look at properties coming to auction via our Pattinson partnership — residential, commercial and development sites.",
  },
];

const investorTypes = [
  "Private Individual / HNW",
  "Family Office",
  "Property Fund",
  "BTR / PBSA Operator",
  "Development Lender",
  "Other",
];

const capitalRanges = [
  "Up to £500,000",
  "£500k – £1m",
  "£1m – £5m",
  "£5m – £25m",
  "£25m+",
];

export default function Investors() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Investor Registration"
        headline="Access Off-Market Investment Opportunities"
        subline="Register with Conquest Property to receive pre-market development sites, JV opportunities and investment-grade deals before they reach the open market."
      />

      {/* Benefits */}
      <section className="bg-white py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-16">
            <span className="text-eyebrow block mb-4">Why Invest With Us</span>
            <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold mb-4">
              What Our Investor Network Receives
            </h2>
            <p className="text-navy-main/60 text-lg max-w-xl">
              Our database of qualified investors receives exclusive deal flow that
              never reaches the open market.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-cream p-8 border-t-[3px] border-lime h-full group hover:-translate-y-1 hover:shadow-lg transition-all duration-500">
                  <b.icon className="w-8 h-8 text-navy-main mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-navy-main font-display font-semibold text-lg mb-3">
                    {b.title}
                  </h3>
                  <p className="text-navy-main/60 text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Network */}
      <section className="bg-navy-dark py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal direction="left">
              <div>
                <span className="text-eyebrow-lime block mb-4">Who We Work With</span>
                <h2 className="text-white text-3xl md:text-4xl font-display font-semibold mb-6">
                  Our Investor Network
                </h2>
                <p className="text-white/60 leading-relaxed mb-6">
                  We work with a wide range of investors — from individuals seeking
                  their first development opportunity to institutional funds and family
                  offices deploying significant capital.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Private High Net Worth Individuals",
                    "Family Offices and Private Wealth Managers",
                    "Development Finance Lenders",
                    "BTR and PBSA Operators",
                    "Institutional Property Funds",
                    "Joint Venture Partners and Co-Developers",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70">
                      <CheckCircle className="w-4 h-4 text-navy-main mt-1 shrink-0" />
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
                    { n: "£500k", l: "Min Deal Size" },
                    { n: "£5m+", l: "Max Deal Size" },
                    { n: "5–40", l: "Units" },
                    { n: "UK-wide", l: "Coverage" },
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
                  We focus on the £500k–£5m GDV segment where institutional lenders
                  are less active and returns for well-structured deals can be compelling.
                </p>
                <a
                  href="https://conquest-property.pattinson.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lime w-full flex items-center justify-center gap-2"
                >
                  View Auctions <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="bg-cream py-24 lg:py-32 section-padding" id="register">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal direction="left">
              <div>
                <span className="text-eyebrow block mb-4">Register</span>
                <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold mb-6">
                  Investor Registration
                </h2>
                <p className="text-navy-main/70 leading-relaxed mb-4">
                  Complete the form to join our investor register. We'll match
                  opportunities to your criteria and contact you when something
                  relevant becomes available.
                </p>
                <p className="text-navy-main/60 text-sm leading-relaxed mb-8">
                  All information is treated with strict confidentiality and never
                  shared with third parties without your consent.
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:02039165152"
                    className="block text-navy-main text-sm hover:text-lime transition-colors"
                  >
                    0203 916 5152
                  </a>
                  <a
                    href="tel:07462342430"
                    className="block text-navy-main text-sm hover:text-lime transition-colors"
                  >
                    07462 342 430
                  </a>
                  <a
                    href="mailto:enquiries@conquest-property.co.uk"
                    className="block text-navy-main text-sm hover:text-lime transition-colors"
                  >
                    enquiries@conquest-property.co.uk
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              {submitted ? (
                <div className="bg-navy-main p-10 text-center">
                  <CheckCircle className="w-12 h-12 text-lime mx-auto mb-4" />
                  <h3 className="text-white text-xl font-display font-semibold mb-2">
                    Registration Submitted
                  </h3>
                  <p className="text-white/70">
                    Thank you. We'll be in touch with relevant opportunities.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white p-8 border border-navy-main/10 shadow-sm"
                >
                  <h3 className="text-navy-main font-display font-semibold text-xl mb-6">
                    Register as an Investor
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="First Name *"
                      required
                      className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Last Name *"
                      required
                      className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Company / Fund Name"
                    className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm mb-4"
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm mb-4"
                  />
                  <input
                    type="tel"
                    placeholder="Phone *"
                    required
                    className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm mb-4"
                  />
                  <select
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 border border-navy-main/15 text-navy-main focus:border-lime focus:outline-none text-sm mb-4 appearance-none cursor-pointer bg-white"
                  >
                    <option value="" disabled>
                      Investor Type *
                    </option>
                    {investorTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <select
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 border border-navy-main/15 text-navy-main focus:border-lime focus:outline-none text-sm mb-4 appearance-none cursor-pointer bg-white"
                  >
                    <option value="" disabled>
                      Capital Available to Deploy *
                    </option>
                    {capitalRanges.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  <textarea
                    placeholder="Investment Criteria / Notes — preferred locations, deal types, return expectations..."
                    rows={4}
                    className="w-full px-4 py-3 border border-navy-main/15 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none text-sm resize-none mb-6"
                  />
                  <button
                    type="submit"
                    className="btn-lime w-full flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Submit Registration
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
