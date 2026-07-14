import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Search, FileSearch, Handshake, CheckSquare, MapPin } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Site Acquisition",
    description:
      "We identify and acquire land with development potential, often through off-market negotiations that protect the seller's discretion.",
  },
  {
    icon: FileSearch,
    title: "Planning Optimisation",
    description:
      "Our planning team works to maximise the development potential of each site, navigating local planning policies and constraints.",
  },
  {
    icon: Handshake,
    title: "Joint Ventures",
    description:
      "We structure partnership agreements that align interests and ensure fair value distribution between all parties.",
  },
];

const siteCharacteristics = [
  "Residential development opportunities",
  "Mixed-use schemes",
  "Brownfield and underutilised sites",
  "Green belt sites with development potential",
  "Sites between £500K–£5m value",
];

const locationPreferences = [
  "South East England",
  "Outside Zone 2 (London)",
  "Home Counties",
  "Down to the South Coast",
  "Areas with strong transport links",
];

const successes = [
  {
    text: "Secured planning for a 32-unit scheme on a previously designated employment site, delivering a 40% increase in land value for the landowner.",
  },
  {
    text: "Navigated complex green belt policy to achieve planning for 18 luxury homes, working closely with the local authority throughout the process.",
  },
];

export default function LandPlanning() {
  return (
    <>
      <PageHero
        eyebrow="Our Expertise"
        headline="Land & Planning"
        subline="We grow through collaboration. We welcome conversations with discerning landowners, equity investors, developers, and entrepreneurial property professionals."
      />

      {/* Collaborative Approach */}
      <section className="bg-white py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left" className="lg:col-span-3">
              <div>
                <span className="text-eyebrow block mb-4">Partnership</span>
                <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold leading-[1.1] mb-4">
                  A Partnership Approach to Land Development
                </h2>
                <div className="gold-rule mb-6" />
                <div className="space-y-4 text-navy-main/80 leading-relaxed">
                  <p>
                    We discreetly buy sites and work with owners as partners to optimise planning and develop our schemes. This collaborative model ensures that landowners retain involvement and benefit from the full development value.
                  </p>
                  <p>
                    Our team includes experienced planning consultants who navigate the complexities of the UK planning system, from pre-application advice through to full planning permission and beyond.
                  </p>
                  <p>
                    We have a proven track record of securing planning permissions in challenging contexts, including green belt negotiations, brownfield remediation, and heritage-sensitive sites.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-2">
              <img
                src="/images/land-planning.jpg"
                alt="Land planning session"
                className="w-full h-auto shadow-xl"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-cream py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-eyebrow block mb-4">What We Offer</span>
            <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold leading-[1.1]">
              Our Land Services
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="bg-white p-10 h-full shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
                  <service.icon className="w-10 h-10 text-navy-main mb-6 group-hover:text-lime transition-colors duration-300" />
                  <h3 className="text-navy-main text-xl font-display font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-navy-main/70 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We're Looking For */}
      <section className="bg-white py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-16">
            <span className="text-eyebrow block mb-4">Target Sites</span>
            <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold leading-[1.1] mb-4">
              What We're Looking For
            </h2>
            <div className="gold-rule" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal direction="left">
              <div>
                <h3 className="text-navy-main text-xl font-display font-semibold mb-6 flex items-center gap-3">
                  <CheckSquare className="w-5 h-5 text-navy-main" />
                  Site Characteristics
                </h3>
                <ul className="space-y-4">
                  {siteCharacteristics.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-lime mt-2 shrink-0" />
                      <span className="text-navy-main/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <h3 className="text-navy-main text-xl font-display font-semibold mb-6 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-navy-main" />
                  Location Preferences
                </h3>
                <ul className="space-y-4">
                  {locationPreferences.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-lime mt-2 shrink-0" />
                      <span className="text-navy-main/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-navy-dark py-24 lg:py-32 section-padding">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-eyebrow-lime block mb-4">Track Record</span>
            <h2 className="text-white text-3xl md:text-4xl font-display font-semibold leading-[1.1]">
              Planning Successes
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successes.map((success, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="bg-navy-main p-8 lg:p-10 border-l-4 border-lime h-full">
                  <p className="text-white/80 leading-relaxed italic">
                    "{success.text}"
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-24 lg:py-32 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold leading-[1.1] mb-6">
              Discuss Your Land Opportunity
            </h2>
            <p className="text-navy-main/70 text-lg mb-4 max-w-2xl mx-auto">
              Please call us on <strong>0203 916 5152</strong> or <strong>07462 342 430</strong> for a free no obligation assessment on the development potential of your site.
            </p>
            <Link to="/contact" className="btn-lime inline-flex items-center gap-2 mt-6">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
