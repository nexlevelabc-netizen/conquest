import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "../components/ScrollReveal";
import {
  ArrowRight,
  LandPlot,
  Gavel,
  Users,
  Lock,
  MapPin,
  TrendingUp,
  FileText,
  Clock,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ctaCards = [
  {
    icon: LandPlot,
    title: "Submit a Development Site",
    desc: "Own land or a site with planning potential? We provide discreet, no-obligation assessments and move quickly.",
    link: "/land-development",
    cta: "Get Started",
  },
  {
    icon: TrendingUp,
    title: "100% JV Funding",
    desc: "Full joint venture funding for qualifying development schemes. No money down — just a great project.",
    link: "/jv-funding",
    cta: "Learn More",
  },
  {
    icon: Gavel,
    title: "Sell Through Auction",
    desc: "Fast, certain disposals via our Pattinson auction partnership. Residential, commercial and development sites.",
    link: "https://conquest-property.pattinson.co.uk",
    external: true,
    cta: "View Auctions",
  },
  {
    icon: Users,
    title: "Register as an Investor",
    desc: "Access off-market opportunities, JV structures and development finance deals before they reach the market.",
    link: "/investors",
    cta: "Register Now",
  },
  {
    icon: Lock,
    title: "Off-Market Opportunities",
    desc: "Discreet deal flow for qualified buyers and investors. Sites and portfolios not advertised elsewhere.",
    link: "https://listings-conquest-property.co.uk",
    external: true,
    cta: "View Listings",
  },
];

const services = [
  {
    num: "01",
    title: "Land Acquisition",
    desc: "We source and acquire development sites across London and the South East, working directly with landowners, probate solicitors and developers to secure opportunities ahead of the market.",
  },
  {
    num: "02",
    title: "Development Finance",
    desc: "Senior debt, mezzanine, bridging and equity finance structured to suit your scheme. We work with a panel of lenders and family office capital to find the right funding solution.",
  },
  {
    num: "03",
    title: "Property Options & JVs",
    desc: "Strategic option agreements and joint venture structures that allow landowners to participate in the uplift of their asset while we manage the planning and development risk.",
  },
  {
    num: "04",
    title: "Auction Disposals",
    desc: "Fast, transparent and legally certain disposals through our Pattinson auction partnership. Residential, commercial and mixed-use assets sold with speed and confidence.",
  },
  {
    num: "05",
    title: "Off-Market Brokerage",
    desc: "Discreet introductions between motivated sellers and qualified buyers. Our investor network spans family offices, institutional funds and private HNW individuals.",
  },
  {
    num: "06",
    title: "Planning & Development",
    desc: "In-house planning expertise and trusted consultant partnerships to unlock and optimise the development potential of sites ranging from £500k to £5m GDV.",
  },
];

const aboutPoints = [
  {
    icon: MapPin,
    title: "London-Focused, UK-Wide Reach",
    desc: "Deep expertise across 11 London boroughs in SE and East London, with capability to transact nationwide.",
  },
  {
    icon: Users,
    title: "Institutional & Private Investors",
    desc: "Our network spans family offices, fund managers, BTR operators and private HNW investors seeking development returns.",
  },
  {
    icon: Clock,
    title: "Off-Market Speed & Discretion",
    desc: "We move quickly and discreetly, providing landowners with certainty and buyers with competitive advantage.",
  },
  {
    icon: FileText,
    title: "Pattinson Partner Agent",
    desc: "Access to one of the UK's leading auction platforms, delivering fast and legally certain disposals.",
  },
];

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".cta-section", start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".service-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".services-section", start: "top 75%" },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const CardLink = ({
    link,
    external,
    children,
    className,
  }: {
    link: string;
    external?: boolean;
    children: React.ReactNode;
    className?: string;
  }) =>
    external ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    ) : (
      <Link to={link} className={className}>
        {children}
      </Link>
    );

  return (
    <>
      {/* Hero Image - Full-width, full image visible, no cropping */}
      <section className="bg-navy-dark">
        <img
          src="/images/h1.jpg"
          alt="Canary Wharf London"
          className="w-full h-auto block"
        />
      </section>

      {/* Hero Text Bar - Full-width dark section below the image (where stats were) */}
      <section className="bg-navy-dark section-padding py-12 md:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto">
          <span className="text-eyebrow-lime block mb-4">
            UK Land, Development & Investment
          </span>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-[1.1] mb-6">
            Connecting Landowners, Developers & <span className="text-lime">Investors</span> Through Opportunity
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mb-8">
            Specialists in Land Acquisition, Development Finance, Property Options,
            Joint Ventures and Off-Market Development Opportunities across the UK.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/land-development" className="btn-lime flex items-center gap-2">
              Submit a Development Site
            </Link>
            <Link
              to="/investors"
              className="flex items-center gap-2 text-white border-2 border-white/50 px-6 py-4 uppercase text-xs tracking-widest font-semibold hover:border-lime hover:text-lime transition-all"
            >
              Register as an Investor
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Cards */}
      <section className="cta-section bg-cream py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-16">
            <span className="text-eyebrow block mb-4">What We Do</span>
            <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold mb-4">
              How Can We Help You?
            </h2>
            <p className="text-navy-main/60 text-lg max-w-xl">
              Whether you own land, need finance, or are looking for investment-grade
              opportunities — we have a direct route for you.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {ctaCards.map((card, i) => (
              <CardLink
                key={i}
                link={card.link}
                external={card.external}
                className="cta-card group bg-white border border-navy-main/10 p-8 flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-500 opacity-0"
              >
                <div className="w-11 h-11 bg-navy-main flex items-center justify-center mb-5 group-hover:bg-navy-dark transition-colors">
                  <card.icon className="w-5 h-5 text-lime" />
                </div>
                <h3 className="text-navy-main font-display font-semibold text-lg mb-3">
                  {card.title}
                </h3>
                <p className="text-navy-main/60 text-sm leading-relaxed flex-1 mb-5">
                  {card.desc}
                </p>
                <span className="text-navy-main text-xs uppercase tracking-widest font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  {card.cta} <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </CardLink>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section bg-white py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-16">
            <span className="text-eyebrow block mb-4">Our Services</span>
            <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold mb-4">
              A Full-Spectrum Property Consultancy
            </h2>
            <p className="text-navy-main/60 text-lg max-w-xl">
              From site identification to planning, development, financing and disposal
              — we operate across the full property lifecycle.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-navy-main/10">
            {services.map((svc, i) => (
              <div
                key={i}
                className={`service-item p-10 hover:bg-cream transition-colors opacity-0 ${
                  i % 2 === 0 ? "border-r border-b border-navy-main/10" : "border-b border-navy-main/10"
                } ${i >= services.length - 2 ? "md:border-b-0" : ""}`}
              >
                <span className="text-navy-main/15 font-display font-bold text-4xl block mb-4">
                  {svc.num}
                </span>
                <h3 className="text-navy-main font-display font-semibold text-xl mb-3">
                  {svc.title}
                </h3>
                <p className="text-navy-main/60 text-sm leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Strip */}
      <section className="bg-navy-dark py-24 lg:py-32 section-padding relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-white/[0.03] font-display font-bold text-[20vw] leading-none pointer-events-none select-none">
          CPC
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-eyebrow-lime block mb-4">About Conquest Property</span>
                <h2 className="text-white text-3xl md:text-4xl font-display font-semibold leading-[1.15] mb-6">
                  A Trusted Partner Across the Full Development Cycle
                </h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  Conquest Property Company (CPC) is a specialist land, development and
                  investment consultancy with over 20 years of industry experience,
                  including large-scale institutional transactions across South East and
                  East London.
                </p>
                <p className="text-white/60 leading-relaxed mb-8">
                  We operate as a Pattinson partner agent, giving our clients access to
                  one of the UK's most active auction and agency networks alongside our
                  own off-market deal flow.
                </p>
                <Link to="/about" className="btn-lime inline-flex items-center gap-2">
                  Our Story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="flex flex-col gap-5">
              {aboutPoints.map((pt, i) => (
                <ScrollReveal key={i} delay={i * 0.1} direction="right">
                  <div className="flex gap-5 items-start p-6 border border-lime/15 bg-white/[0.03]">
                    <div className="w-9 h-9 min-w-[36px] bg-lime/15 flex items-center justify-center">
                      <pt.icon className="w-4 h-4 text-lime" />
                    </div>
                    <div>
                      <h4 className="text-white font-display font-semibold mb-1">
                        {pt.title}
                      </h4>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Strip */}
      <section className="bg-lime py-16 section-padding">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <ScrollReveal direction="left">
            <div>
              <h2 className="text-navy-dark text-2xl md:text-3xl font-display font-semibold mb-2">
                Ready to discuss your property?
              </h2>
              <p className="text-navy-dark/70">
                Call us on 0203 916 5152 or submit an enquiry and we'll respond within 24 hours.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="flex gap-4">
              <Link
                to="/contact"
                className="bg-white text-navy-dark font-semibold uppercase text-xs tracking-widest px-8 py-4 hover:bg-navy-dark hover:text-white transition-all"
              >
                Contact Us
              </Link>
              <a
                href="tel:02039165152"
                className="border border-navy-dark text-navy-dark font-semibold uppercase text-xs tracking-widest px-8 py-4 hover:bg-navy-dark hover:text-white transition-all"
              >
                Call Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
