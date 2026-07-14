import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Clock } from "lucide-react";

const highlights = [
  {
    icon: TrendingUp,
    title: "Maximise Returns",
    description: "Strategic marketing and pricing to achieve the best possible price for your property.",
  },
  {
    icon: Users,
    title: "Qualified Buyers",
    description: "Access to our network of investors, developers, and owner-occupiers.",
  },
  {
    icon: Clock,
    title: "Efficient Process",
    description: "Streamlined sales process from valuation to completion.",
  },
];

export default function Disposals() {
  return (
    <>
      <PageHero
        eyebrow="Property Services"
        headline="Disposals"
        subline="Strategic disposal of development sites and investment properties to maximise returns for our clients."
      />

      <section className="bg-white py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <ScrollReveal direction="left">
              <img
                src="/images/grid-2.jpg"
                alt="Property disposal"
                className="w-full h-auto shadow-xl"
              />
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <span className="text-eyebrow block mb-4">Strategic Sales</span>
                <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold leading-[1.1] mb-4">
                  Expert Disposal Services
                </h2>
                <div className="gold-rule mb-6" />
                <div className="space-y-4 text-navy-main/80 leading-relaxed">
                  <p>
                    When it comes time to divest, our disposal team ensures you achieve maximum value. We understand the market dynamics across London and the South East and position your property to attract the right buyers.
                  </p>
                  <p>
                    We handle everything from valuation and marketing to negotiation and completion, keeping you informed at every stage. Our extensive database of qualified investors and developers means we can often identify buyers quickly.
                  </p>
                  <p>
                    Whether you're selling a single unit, a portfolio, or a development site, we have the expertise to deliver results.
                  </p>
                </div>
              </div>
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

      <section className="bg-cream py-24 lg:py-32 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold leading-[1.1] mb-6">
              Ready to Sell?
            </h2>
            <p className="text-navy-main/70 text-lg mb-10 max-w-2xl mx-auto">
              Contact our team for a free valuation and marketing proposal.
            </p>
            <Link to="/contact" className="btn-lime inline-flex items-center gap-2">
              Get a Valuation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
