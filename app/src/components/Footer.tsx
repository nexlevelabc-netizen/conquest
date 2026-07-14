import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const partners = [
  { name: "mydeposits", image: "/images/mydeposits.png" },
  { name: "PRS Property Redress Scheme", image: "/images/prs.png" },
  { name: "ICO Registered", image: "/images/ico.png" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-main">
      {/* Partners Marquee */}
      <div className="border-b border-white/10 overflow-hidden">
        <div className="section-padding py-8">
          <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-semibold text-center mb-6">
            Accredited & Regulated
          </p>
          <div className="relative overflow-hidden">
            {/* Fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-navy-main z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #081f43, transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-navy-main z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #081f43, transparent)" }} />
            
            {/* Scrolling track */}
            <div className="flex animate-marquee">
              {/* First set */}
              {partners.map((p, i) => (
                <div key={`a-${i}`} className="flex-shrink-0 mx-8 md:mx-14">
                  <div className="bg-white px-6 py-3 flex items-center justify-center">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-12 md:h-14 w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((p, i) => (
                <div key={`b-${i}`} className="flex-shrink-0 mx-8 md:mx-14">
                  <div className="bg-white px-6 py-3 flex items-center justify-center">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-12 md:h-14 w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
              {/* Third set for extra smoothness */}
              {partners.map((p, i) => (
                <div key={`c-${i}`} className="flex-shrink-0 mx-8 md:mx-14">
                  <div className="bg-white px-6 py-3 flex items-center justify-center">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-12 md:h-14 w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-padding py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
            <img
              src="/images/logo.png"
              alt="Conquest Property"
              className="h-12 w-auto"
            />
          </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Conquest Property Company (CPC) specialises in creating value through planning and development of residential & commercial properties across London and the Home Counties.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:02039165152"
                className="flex items-center gap-3 text-white/70 hover:text-lime transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-lime" />
                0203 916 5152
              </a>
              <a
                href="mailto:enquiries@conquest-property.co.uk"
                className="flex items-center gap-3 text-white/70 hover:text-lime transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-lime" />
                enquiries@conquest-property.co.uk
              </a>
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-lime mt-0.5" />
                <span>London & Home Counties</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-[3px] h-5 bg-lime" />
              <h4 className="text-white font-display font-semibold text-sm uppercase tracking-[0.1em]">
                Quick Links
              </h4>
            </div>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Property Development", path: "/property-development" },
                { label: "Land & Planning", path: "/land-planning" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-lime transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Services */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-[3px] h-5 bg-lime" />
              <h4 className="text-white font-display font-semibold text-sm uppercase tracking-[0.1em]">
                Property Services
              </h4>
            </div>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Acquisitions", path: "/properties/acquisitions" },
                { label: "Disposals", path: "/properties/disposals" },
                { label: "Projects", path: "/properties/projects" },
                { label: "Sales", path: "/properties/sales" },
                { label: "Lettings", path: "/properties/lettings" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-lime transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Platforms */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-[3px] h-5 bg-lime" />
              <h4 className="text-white font-display font-semibold text-sm uppercase tracking-[0.1em]">
                External Platforms
              </h4>
            </div>
            <ul className="flex flex-col gap-3">
              {[
                {
                  label: "Auctions",
                  url: "https://conquest-property.pattinson.co.uk/?p=1&Radius=1&IncludeCommercialProperties=true&PageSize=12&PropertySort=PriceDesc",
                },
                {
                  label: "Sell for Free",
                  url: "https://conquest-property.pattinson.co.uk/sell-for-free",
                },
                {
                  label: "Off Market Properties",
                  url: "https://listings-conquest-property.co.uk",
                },
              ].map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-lime transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5">
        <div className="section-padding py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Conquest Property. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Website by Andrew Soko of Isokodesign
          </p>
        </div>
      </div>
    </footer>
  );
}
