import Link from "next/link";

const newsItems = [
  {
    date: "March 9, 2026",
    category: "Project Update",
    title: "BREATHE Portal Launches — Explore NASA Air Quality Data for Your Community",
    summary: "The BREATHE online platform is now live, offering interactive data exploration, learning modules, and citizen science activities connecting NASA satellite observations to community air quality and health.",
    featured: true,
  },
  {
    date: "March 2026",
    category: "Pilot",
    title: "Year 1 Pilot Communities Established in Houston and the Rio Grande Valley",
    summary: "BREATHE kicks off its first year with pilot communities in two Texas regions facing distinct environmental health challenges. Partnerships with school districts and community organizations are underway.",
    featured: true,
  },
  {
    date: "February 2026",
    category: "NASA Data",
    title: "TEMPO Hourly NO₂ Data Now Integrated into BREATHE Learning Modules",
    summary: "Students and educators can now explore hourly nitrogen dioxide measurements from the TEMPO instrument in guided learning activities that connect pollution patterns to community health.",
    featured: false,
  },
  {
    date: "January 2026",
    category: "NASA Data",
    title: "MAIA PM2.5 Data Products Available for BREATHE Target Areas",
    summary: "First MAIA-derived particulate matter concentration maps are now accessible through the BREATHE data explorer for pilot communities in Texas.",
    featured: false,
  },
  {
    date: "December 2025",
    category: "Partnership",
    title: "BREATHE Awarded Five-Year NASA Science Activation Cooperative Agreement",
    summary: "NASA's Science Mission Directorate selects BREATHE for a five-year Science Activation award to connect Earth observation science with STEM education and community environmental health learning.",
    featured: false,
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-breathe-light">
      <section className="bg-breathe-dark text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span>News &amp; Updates</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            News &amp; Updates
          </h1>
          <p className="mt-3 text-gray-300 max-w-2xl">
            The latest from the BREATHE project — new data products, community events, partner announcements, and educational resource releases.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {newsItems.map((item, i) => (
            <article key={i} className={`breathe-card bg-white rounded-xl border border-breathe-border overflow-hidden ${item.featured ? "border-l-4 border-l-nasa-blue" : ""}`}>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <time className="text-xs text-breathe-gray">{item.date}</time>
                  <span className="px-2 py-0.5 text-xs font-medium bg-breathe-sky-light text-nasa-blue rounded-full">
                    {item.category}
                  </span>
                  {item.featured && (
                    <span className="px-2 py-0.5 text-xs font-medium bg-orange-50 text-breathe-warm rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <h2 className="text-lg font-bold text-breathe-dark">{item.title}</h2>
                <p className="text-sm text-breathe-gray mt-2 leading-relaxed">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
