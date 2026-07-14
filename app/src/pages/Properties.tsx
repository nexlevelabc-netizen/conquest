import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShoppingCart,
  Tag,
  FolderOpen,
  Home,
  KeyRound,
  ExternalLink,
} from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "Acquisitions",
    description:
      "We identify and acquire properties with strong development or investment potential, often through off-market channels.",
    path: "/properties/acquisitions",
  },
  {
    icon: Tag,
    title: "Disposals",
    description:
      "Strategic disposal of development sites and investment properties to maximise returns for our clients.",
    path: "/properties/disposals",
  },
  {
    icon: FolderOpen,
    title: "Projects",
    description:
      "Our development portfolio showcases completed and ongoing residential and commercial schemes.",
    path: "/properties/projects",
  },
  {
    icon: Home,
    title: "Sales",
    description:
      "Residential sales for new-build developments and existing properties, with full marketing support.",
    path: "/properties/sales",
  },
  {
    icon: KeyRound,
    title: "Lettings",
    description:
      "Professional lettings and property management services for residential and commercial units.",
    path: "/properties/lettings",
  },
];

const externalPlatforms = [
  {
    title: "Auctions",
    description:
      "Browse our auction listings on Pattinson. Find properties going under the hammer across the UK.",
    url: "https://conquest-property.pattinson.co.uk/?p=1&Radius=1&IncludeCommercialProperties=true&PageSize=12&PropertySort=PriceDesc",
  },
  {
    title: "Sell for Free",
    description:
      "List your property for sale with no agency fees through our Pattinson partnership.",
    url: "https://conquest-property.pattinson.co.uk/sell-for-free",
  },
  {
    title: "Off Market Properties",
    description:
      "Access exclusive off-market opportunities not available on the open market.",
    url: "https://listings-conquest-property.co.uk",
  },
];

export default function Properties() {
  return (
    <>
      <PageHero
        eyebrow="Property Services"
        headline="Comprehensive Property Solutions"
        subline="From acquisitions to lettings, we provide end-to-end property services for investors, developers, and homeowners across the South East."
      />

      {/* Services Overview */}
      <section className="bg-white py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-eyebrow block mb-4">What We Offer</span>
            <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold leading-[1.1]">
              Our Property Services
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Link
                  to={service.path}
                  className="block group bg-cream p-8 lg:p-10 border-t-[3px] border-lime h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                >
                  <service.icon className="w-8 h-8 text-navy-main mb-5 group-hover:text-lime transition-colors duration-300" />
                  <h3 className="text-navy-main text-xl font-display font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-navy-main/70 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-navy-main/70 text-xs uppercase tracking-widest font-semibold group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* External Platforms */}
      <section className="bg-cream py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-eyebrow block mb-4">Online Access</span>
            <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold leading-[1.1]">
              External Platforms
            </h2>
          </ScrollReveal>

          <div className="flex flex-col gap-4">
            {externalPlatforms.map((platform, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-6 bg-white p-6 lg:p-8 border border-navy-main/10 hover:border-lime/50 transition-all duration-300"
                >
                  <div className="hidden sm:flex items-center justify-center w-12 h-12 bg-navy-main shrink-0 group-hover:bg-lime transition-colors duration-300">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-navy-main text-lg font-display font-semibold group-hover:text-lime transition-colors duration-300">
                        {platform.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-navy-main/40 group-hover:text-lime transition-colors duration-300" />
                    </div>
                    <p className="text-navy-main/70 text-sm leading-relaxed">
                      {platform.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-navy-main/30 group-hover:text-lime group-hover:translate-x-1 transition-all duration-300 shrink-0 mt-1" />
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Banner */}
      <section className="bg-navy-dark py-12 section-padding">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              <span className="text-white/70 text-sm uppercase tracking-wider">
                PRS Property Redress Scheme Member
              </span>
              <span className="text-navy-main/30 hidden md:block">|</span>
              <span className="text-white/70 text-sm uppercase tracking-wider">
                mydeposits Protected
              </span>
              <span className="text-navy-main/30 hidden md:block">|</span>
              <span className="text-white/70 text-sm uppercase tracking-wider">
                ICO Registered
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 lg:py-32 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold leading-[1.1] mb-6">
              Ready to Talk Property?
            </h2>
            <p className="text-navy-main/70 text-lg mb-10 max-w-2xl mx-auto">
              Whether you're buying, selling, letting, or developing, our team is here to help.
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
