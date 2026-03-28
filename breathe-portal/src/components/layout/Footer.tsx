import Link from "next/link";

const footerSections = [
  {
    title: "Learn",
    links: [
      { label: "Learning Modules", href: "/modules" },
      { label: "Explore NASA Data", href: "/explore" },
      { label: "Data Stories", href: "/data-stories" },
      { label: "Resource Library", href: "/resources" },
    ],
  },
  {
    title: "Participate",
    links: [
      { label: "Citizen Science", href: "/citizen-science" },
      { label: "Community Workshops", href: "/workshops" },
      { label: "Educator Hub", href: "/educator-hub" },
      { label: "Partner With Us", href: "/partners" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About BREATHE", href: "/about" },
      { label: "Our Partners", href: "/partners" },
      { label: "Impact & Evaluation", href: "/impact" },
      { label: "News & Updates", href: "/news" },
    ],
  },
  {
    title: "NASA Resources",
    links: [
      { label: "NASA Worldview", href: "https://worldview.earthdata.nasa.gov/" },
      { label: "TEMPO Mission", href: "https://tempo.si.edu/" },
      { label: "MAIA Mission", href: "https://maia.jpl.nasa.gov/" },
      { label: "PACE Mission", href: "https://pace.gsfc.nasa.gov/" },
      { label: "NASA Earthdata", href: "https://earthdata.nasa.gov/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-breathe-dark text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg breathe-gradient flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10" strokeDasharray="4 2" />
                  <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>
                  BREATHE
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              BRidging Education on Atmosphere, Technology, and HEalth. A NASA Science Activation project connecting Earth science with STEM education and community health.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-xs text-gray-500">Supported by</span>
              <span className="text-xs font-medium text-gray-300">NASA Science Mission Directorate</span>
            </div>
          </div>

          {/* Link sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                      {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.label}
                      {link.href.startsWith("http") && (
                        <span className="ml-1 text-xs" aria-label="(opens in new tab)">↗</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
              <span>NASA Cooperative Agreement</span>
              <span>|</span>
              <Link href="/about" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/about" className="hover:text-gray-300 transition-colors">
                Accessibility Statement
              </Link>
              <span>|</span>
              <span>En Español (coming soon)</span>
            </div>
            <div className="text-xs text-gray-500">
              Built with NASA Earth science data for communities everywhere
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
