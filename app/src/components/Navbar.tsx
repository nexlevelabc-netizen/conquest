import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const mainLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
];

const servicesDropdown = [
  { label: "Land & Development", path: "/land-development" },
  { label: "100% JV Funding", path: "/jv-funding" },
  { label: "Property Options", path: "/property-options" },
  { label: "Joint Ventures", path: "/joint-ventures" },
  { label: "Auctions", url: "https://conquest-property.pattinson.co.uk" },
  { label: "Sell for Free", url: "https://conquest-property.pattinson.co.uk/sell-for-free" },
];

const clientDropdown = [
  { label: "Investors", path: "/investors" },
  { label: "Landowners", path: "/landowners" },
  { label: "Developers", path: "/jv-funding" },
];

const propertyDropdown = [
  { label: "Sales", path: "/properties/sales" },
  { label: "Lettings", path: "/properties/lettings" },
  { label: "Projects", path: "/properties/projects" },
  { label: "Acquisitions", path: "/properties/acquisitions" },
  { label: "Disposals", path: "/properties/disposals" },
];

const externalLinks = [
  { label: "Off-Market Listings", url: "https://listings-conquest-property.co.uk" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;
  const isDropdownActive = (items: Array<{path?: string; url?: string}>) =>
    items.some((item) => item.path && location.pathname.startsWith(item.path));

  const Dropdown = ({
    label,
    items,
    id,
  }: {
    label: string;
    items: Array<{ label: string; path?: string; url?: string }>;
    id: string;
  }) => (
    <div
      className="relative"
      onMouseEnter={() => setOpenDropdown(id)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <button
        className={`flex items-center gap-1 text-xs uppercase tracking-[0.08em] font-semibold transition-colors duration-300 ${
          isDropdownActive(items)
            ? "text-lime"
            : "text-white/80 hover:text-white"
        }`}
      >
        {label}
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-300 ${
            openDropdown === id ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
          openDropdown === id
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-navy-main border border-white/10 shadow-2xl py-2 min-w-[220px]">
          {items.map((item) =>
            item.url ? (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-2.5 text-xs uppercase tracking-wider font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.path}
                to={item.path!}
                className={`block px-6 py-2.5 text-xs uppercase tracking-wider font-medium transition-colors ${
                  isActive(item.path!)
                    ? "text-lime bg-white/5"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-navy-dark border-b border-white/10 shadow-lg"
    >
      <nav className="flex items-center justify-between section-padding h-20">
        <Link to="/" className="flex items-center z-50">
          <img
            src="/images/logo.png"
            alt="Conquest Property"
            className="h-10 w-auto"
          />
        </Link>

        <div className="hidden xl:flex items-center gap-7">
          {mainLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs uppercase tracking-[0.08em] font-semibold transition-colors ${
                isActive(link.path) ? "text-lime" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Dropdown label="Services" items={servicesDropdown} id="services" />
          <Dropdown label="Clients" items={clientDropdown} id="clients" />
          <Dropdown label="Properties" items={propertyDropdown} id="properties" />
          {externalLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.08em] font-semibold text-white/80 hover:text-white transition-colors"
            >
              Off-Market
            </a>
          ))}
          <Link
            to="/contact"
            className={`text-xs uppercase tracking-[0.08em] font-semibold transition-colors ${
              isActive("/contact") ? "text-lime" : "text-white/80 hover:text-white"
            }`}
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="tel:02039165152"
            className="hidden md:flex items-center gap-2 btn-lime text-xs py-3 px-5"
          >
            <Phone className="w-3.5 h-3.5" />
            0203 916 5152
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden text-white z-50"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden fixed inset-0 bg-navy-dark z-40 transition-all duration-500 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-5 overflow-y-auto py-24">
          {mainLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg uppercase tracking-[0.1em] font-semibold ${
                isActive(link.path) ? "text-lime" : "text-white/80"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <p className="text-lime text-xs uppercase tracking-[0.2em] font-semibold mt-4">Services</p>
          {servicesDropdown.map((item) =>
            item.url ? (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider font-medium text-white/60"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.path}
                to={item.path!}
                className={`text-sm uppercase tracking-wider font-medium ${
                  isActive(item.path!) ? "text-lime" : "text-white/60"
                }`}
              >
                {item.label}
              </Link>
            )
          )}

          <p className="text-lime text-xs uppercase tracking-[0.2em] font-semibold mt-4">Clients</p>
          {clientDropdown.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm uppercase tracking-wider font-medium ${
                isActive(item.path) ? "text-lime" : "text-white/60"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <p className="text-lime text-xs uppercase tracking-[0.2em] font-semibold mt-4">Properties</p>
          {propertyDropdown.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm uppercase tracking-wider font-medium ${
                isActive(item.path) ? "text-lime" : "text-white/60"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <a
            href="https://listings-conquest-property.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-wider font-medium text-white/60 mt-2"
          >
            Off-Market Listings
          </a>

          <Link
            to="/contact"
            className={`text-lg uppercase tracking-[0.1em] font-semibold mt-4 ${
              isActive("/contact") ? "text-lime" : "text-white/80"
            }`}
          >
            Contact Us
          </Link>

          <a href="tel:02039165152" className="btn-lime mt-6 flex items-center gap-2">
            <Phone className="w-4 h-4" />
            0203 916 5152
          </a>
        </div>
      </div>
    </header>
  );
}
