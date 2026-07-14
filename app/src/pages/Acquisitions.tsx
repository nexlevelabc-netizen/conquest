import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Zap } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Targeted Sourcing",
    description: "We focus on sites with clear development potential, targeting opportunities between £500K and £5m.",
  },
  {
    icon: Eye,
    title: "Off-Market Access",
    description: "Our extensive network provides access to properties not available on the open market.",
  },
  {
    icon: Zap,
    title: "Rapid Assessment",
    description: "We provide quick initial assessments and can move fast when opportunities arise.",
  },
];

export default function Acquisitions() {
  return (
    <>
      <PageHero
        eyebrow="Property Services"
        headline="Acquisitions"
        subline="We identify and acquire properties with strong development or investment potential, often through off-market negotiations."
      />

      <section className="bg-white py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <ScrollReveal direction="left">
              <div>
                <span className="text-eyebrow block mb-4">Strategic Buying</span>
                <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold leading-[1.1] mb-4">
                  Acquisition Expertise
                </h2>
                <div className="gold-rule mb-6" />
                <div className="space-y-4 text-navy-main/80 leading-relaxed">
                  <p>
                    Our property consultants are experts in finding off-market opportunities with significant value add propositions. We frequently engineer value through the planning and development process, identifying sites that others may overlook.
                  </p>
                  <p>
                    We focus on residential development opportunities, mixed-use schemes, and brownfield sites across London and the South East. Our sweet spot is sites between £500K–£5m with development potential for 5–40 units.
                  </p>
                  <p>
                    Whether you're looking to sell a development site or partner with us on a joint venture, we bring expertise, capital, and a proven track record of delivery.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <img
                src="/images/grid-4.jpg"
                alt="Property acquisition"
                className="w-full h-auto shadow-xl"
              />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="bg-cream p-8 border-t-[3px] border-lime h-full">
                  <item.icon className="w-8 h-8 text-navy-main mb-4" />
                  <h3 className="text-navy-main text-lg font-display font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-navy-main/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-dark py-24 lg:py-32 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-white text-3xl md:text-4xl font-display font-semibold leading-[1.1] mb-6">
              Have a Site to Sell?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              We discreetly buy sites and work with owners as partners. Contact us for a confidential discussion.
            </p>
            <Link to="/contact" className="btn-lime inline-flex items-center gap-2">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
