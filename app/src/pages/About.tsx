import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const values = [
  {
    title: "Integrity",
    description:
      "We operate with complete transparency and honesty in all our dealings, building long-term relationships based on trust.",
  },
  {
    title: "Expertise",
    description:
      "Our team brings decades of combined experience in property development, planning, and investment across the UK.",
  },
  {
    title: "Partnership",
    description:
      "We work collaboratively with landowners, investors, and local authorities to deliver exceptional outcomes for all stakeholders.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        headline="Building value through integrity, expertise, and partnerships."
        subline="Conquest Property Company (CPC) specialises in creating value through planning and development of residential & commercial properties across London and the Home Counties."
      />

      {/* Our Story */}
      <section className="bg-white py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-eyebrow block mb-4">Our Story</span>
                <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold leading-[1.1] mb-4">
                  A Legacy of Property Excellence
                </h2>
                <div className="gold-rule mb-6" />
                <div className="space-y-4 text-navy-main/80 leading-relaxed">
                  <p>
                    Founded with a vision to transform underutilised land into thriving communities, Conquest Property has grown into a trusted name in property development across the South East of England.
                  </p>
                  <p>
                    We are principal developers who focus on developing out. Our property consultants are experts in finding off-market opportunities with significant value add propositions which are frequently engineered through the planning and development process.
                  </p>
                  <p>
                    Our development pipeline exceeds £50m. Either with JV Partners or as ourselves, we have delivered and gained planning in South East England, outside of Zone 2, the Home Counties and down to the coast.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    to="/property-development"
                    className="btn-lime inline-flex items-center gap-2"
                  >
                    Our Development Work
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <img
                  src="/images/about-story.jpg"
                  alt="Conquest Property team meeting"
                  className="w-full h-auto shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-lime p-6 hidden lg:block">
                  <p className="text-navy-dark font-display font-bold text-3xl">£50m+</p>
                  <p className="text-navy-dark/80 text-sm uppercase tracking-wider">Pipeline</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-eyebrow block mb-4">Our Principles</span>
            <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold leading-[1.1]">
              What Drives Us
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="bg-white p-10 border-t-[3px] border-lime h-full">
                  <h3 className="text-navy-main text-2xl font-display font-semibold mb-4">
                    {value.title}
                  </h3>
                  <p className="text-navy-main/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-navy-dark py-24 lg:py-32 section-padding">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-eyebrow-lime block mb-4">Regulated & Protected</span>
            <h2 className="text-white text-3xl md:text-4xl font-display font-semibold leading-[1.1]">
              Our Credentials
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "PRS Property Redress Scheme",
                desc: "We are members of the Property Redress Scheme, ensuring fair dealing and consumer protection.",
              },
              {
                name: "mydeposits",
                desc: "Tenancy deposit protection for all our lettings, providing security for landlords and tenants.",
              },
              {
                name: "ICO Registered",
                desc: "Registered with the Information Commissioner's Office and fully GDPR compliant.",
              },
            ].map((cred, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="bg-navy-main p-8 h-full">
                  <CheckCircle className="w-8 h-8 text-lime mb-4" />
                  <h3 className="text-white font-display font-semibold text-lg mb-3">
                    {cred.name}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {cred.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 lg:py-32 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-navy-main text-3xl md:text-4xl lg:text-[48px] font-display font-semibold leading-[1.1] mb-6">
              Partner with Conquest Property
            </h2>
            <p className="text-navy-main/70 text-lg mb-10 max-w-2xl mx-auto">
              Whether you're a landowner, investor, or property professional, we'd welcome the conversation.
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
