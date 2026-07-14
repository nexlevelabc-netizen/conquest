import { useEffect, useRef } from "react";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Search, FileCheck, HardHat, KeyRound } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { value: "£50m+", label: "Development Pipeline" },
  { value: "5-40", label: "Units Per Scheme" },
  { value: "£500K-£5m", label: "Site Value Range" },
  { value: "South East", label: "Primary Coverage" },
];

const projects = [
  {
    name: "The Residences",
    location: "London",
    description:
      "A 24-unit residential development delivered in partnership with a joint venture partner, featuring luxury apartments with prime city views.",
    image: "/images/grid-1.jpg",
  },
  {
    name: "Riverside Quarter",
    location: "Home Counties",
    description:
      "Mixed-use scheme combining 18 residential units with commercial ground floor space, creating a vibrant community hub.",
    image: "/images/grid-5.jpg",
  },
  {
    name: "Coastal Views",
    location: "South Coast",
    description:
      "Coastal development maximising sea views with premium specification, delivering 12 luxury homes.",
    image: "/images/grid-7.jpg",
  },
];

const steps = [
  {
    number: "01",
    title: "Site Identification",
    description: "Off-market opportunities sourced through our extensive network.",
    icon: Search,
  },
  {
    number: "02",
    title: "Planning & Design",
    description: "Working with architects and planners to optimise development potential.",
    icon: FileCheck,
  },
  {
    number: "03",
    title: "Construction",
    description: "Rigorous project management ensuring quality and programme adherence.",
    icon: HardHat,
  },
  {
    number: "04",
    title: "Delivery",
    description: "Handover of exceptional developments that exceed expectations.",
    icon: KeyRound,
  },
];

export default function PropertyDevelopment() {
  const metricsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Metrics counter animation
      gsap.fromTo(
        ".metric-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: metricsRef.current,
            start: "top 80%",
          },
        }
      );

      // Timeline line draw
      gsap.fromTo(
        ".timeline-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".timeline-step",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 75%",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageHero
        eyebrow="What We Do"
        headline="Property Development"
        subline="Delivering exceptional residential and commercial developments across London and the South East. Our pipeline exceeds £50m."
      />

      {/* Philosophy */}
      <section className="bg-white py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-eyebrow block mb-4">Our Approach</span>
                <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold leading-[1.1] mb-4">
                  Our Development Philosophy
                </h2>
                <div className="gold-rule mb-6" />
                <div className="space-y-4 text-navy-main/80 leading-relaxed">
                  <p>
                    We are principal developers who focus on developing out. Our approach combines meticulous site identification, innovative design, and rigorous project management to deliver exceptional results.
                  </p>
                  <p>
                    Our sweet spot for property sites is those that fall between £500K–£5m with 5–40 units that are targeted at "Help to Buy" buyers.
                  </p>
                  <p>
                    In addition to this, either with JV Partners or as ourselves, we have delivered and gained planning in South East England, outside of Zone 2, the Home Counties and down to the coast.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <img
                src="/images/dev-philosophy.jpg"
                alt="Property development"
                className="w-full h-auto shadow-xl"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section ref={metricsRef} className="bg-cream py-20 lg:py-24 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="metric-item text-center opacity-0"
              >
                <p className="text-navy-main font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-2">
                  {metric.value}
                </p>
                <p className="text-navy-main/70 text-xs uppercase tracking-[0.15em] font-semibold">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-16">
            <span className="text-eyebrow block mb-4">Portfolio</span>
            <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold leading-[1.1]">
              Featured Projects
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="group">
                  <div className="overflow-hidden mb-5">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-navy-main/70 text-xs uppercase tracking-[0.15em] font-semibold">
                    {project.location}
                  </span>
                  <h3 className="text-navy-main text-xl font-display font-semibold mt-2 mb-3">
                    {project.name}
                  </h3>
                  <p className="text-navy-main/70 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section ref={timelineRef} className="bg-navy-dark py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-eyebrow-lime block mb-4">How We Work</span>
            <h2 className="text-white text-3xl md:text-4xl font-display font-semibold leading-[1.1]">
              Our Process
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="timeline-line hidden lg:block absolute top-[60px] left-0 right-0 h-[2px] bg-white/20 origin-left" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="timeline-step text-center lg:text-left opacity-0"
                >
                  <span className="text-lime font-display font-bold text-5xl mb-4 block">
                    {step.number}
                  </span>
                  <step.icon className="w-8 h-8 text-lime mb-4 mx-auto lg:mx-0" />
                  <h3 className="text-white text-xl font-display font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-24 lg:py-32 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-navy-main text-3xl md:text-4xl font-display font-semibold leading-[1.1] mb-6">
              Have a Development Opportunity?
            </h2>
            <p className="text-navy-main/70 text-lg mb-10 max-w-2xl mx-auto">
              We discreetly buy sites and work with owners as partners to optimise planning and develop our schemes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-lime inline-flex items-center gap-2">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/land-planning"
                className="btn-navy-outline inline-flex items-center gap-2"
              >
                Learn About Land & Planning
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
