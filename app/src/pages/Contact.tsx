import { useState, useEffect, useRef } from "react";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import { Phone, Mail, MapPin, CheckCircle, Send } from "lucide-react";
import gsap from "gsap";

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    primary: "0203 916 5152",
    secondary: "07462 342 430",
    href: "tel:02039165152",
  },
  {
    icon: Mail,
    label: "Email Us",
    primary: "enquiries@conquest-property.co.uk",
    secondary: null,
    href: "mailto:enquiries@conquest-property.co.uk",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    primary: "London & Home Counties",
    secondary: "By appointment",
    href: null,
  },
];

const subjectOptions = [
  "General Enquiry",
  "Land Opportunity",
  "Property Development",
  "Acquisitions",
  "Disposals",
  "Sales",
  "Lettings",
];

const credentials = [
  "PRS Property Redress Scheme",
  "mydeposits Tenancy Deposit Protection",
  "ICO Registered (GDPR Compliant)",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted && successRef.current) {
      gsap.fromTo(
        successRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [submitted]);

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        headline="Contact Us"
        subline="We'd welcome the opportunity to discuss your property requirements. Reach out by phone, email, or the form below."
        centered
      />

      {/* Contact Info */}
      <section className="bg-white py-16 lg:py-20 section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-navy-main mb-5">
                    <info.icon className="w-6 h-6 text-lime" />
                  </div>
                  <p className="text-navy-main/70 text-xs uppercase tracking-[0.15em] font-semibold mb-2">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-navy-main text-lg font-display font-semibold hover:text-lime transition-colors"
                    >
                      {info.primary}
                    </a>
                  ) : (
                    <p className="text-navy-main text-lg font-display font-semibold">
                      {info.primary}
                    </p>
                  )}
                  {info.secondary && (
                    <p className="text-navy-main/60 text-sm mt-1">
                      {info.secondary}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-cream py-24 lg:py-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Form */}
            <ScrollReveal direction="left" className="lg:col-span-3">
              <div>
                <h2 className="text-navy-main text-2xl md:text-3xl font-display font-semibold mb-8">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <div
                    ref={successRef}
                    className="bg-navy-main p-10 text-center"
                  >
                    <CheckCircle className="w-12 h-12 text-lime mx-auto mb-4" />
                    <h3 className="text-white text-xl font-display font-semibold mb-2">
                      Message Sent
                    </h3>
                    <p className="text-white/70">
                      Thank you for your enquiry. One of our consultants will be in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <input
                        type="text"
                        placeholder="Your Name *"
                        required
                        className="w-full px-5 py-4 bg-white border border-navy-main/20 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all"
                      />
                      <input
                        type="email"
                        placeholder="Email Address *"
                        required
                        className="w-full px-5 py-4 bg-white border border-navy-main/20 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-5 py-4 bg-white border border-navy-main/20 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all"
                      />
                      <select
                        required
                        defaultValue=""
                        className="w-full px-5 py-4 bg-white border border-navy-main/20 text-navy-main focus:border-lime focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>
                          Subject *
                        </option>
                        {subjectOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <textarea
                      placeholder="Your Message *"
                      required
                      rows={6}
                      className="w-full px-5 py-4 bg-white border border-navy-main/20 text-navy-main placeholder:text-navy-main/40 focus:border-lime focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all resize-none"
                    />
                    <button
                      type="submit"
                      className="btn-lime w-full flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal direction="right" className="lg:col-span-2">
              <div>
                <h3 className="text-navy-main text-xl font-display font-semibold mb-4">
                  What Happens Next?
                </h3>
                <p className="text-navy-main/70 leading-relaxed mb-8">
                  One of our property consultants will review your enquiry and respond within 24 hours. For urgent matters, please call us directly.
                </p>

                <div className="mb-8">
                  <h4 className="text-navy-main font-semibold text-sm uppercase tracking-wider mb-4">
                    Our Credentials
                  </h4>
                  <ul className="space-y-3">
                    {credentials.map((cred, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-navy-main shrink-0" />
                        <span className="text-navy-main/80 text-sm">{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-navy-main p-6">
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
                    Free Site Assessment
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    For a free no obligation assessment on the development potential of your site, call us on{" "}
                    <a href="tel:02039165152" className="text-lime hover:underline">
                      0203 916 5152
                    </a>{" "}
                    or{" "}
                    <a href="tel:07462342430" className="text-lime hover:underline">
                      07462 342 430
                    </a>
                    .
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="bg-navy-dark py-10 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-white/80 text-lg">
              For a free no obligation assessment on the development potential of your site, call{" "}
              <a href="tel:02039165152" className="text-lime font-semibold hover:underline">
                0203 916 5152
              </a>{" "}
              or{" "}
              <a href="tel:07462342430" className="text-lime font-semibold hover:underline">
                07462 342 430
              </a>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
