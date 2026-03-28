import Link from "next/link";

const resourceCategories = [
  {
    name: "Learning Modules",
    count: 6,
    description: "Guided interactive learning experiences using NASA data",
    link: "/modules",
  },
  {
    name: "Lesson Plans",
    count: 12,
    description: "Classroom-ready materials for educators",
    link: "/educator-hub",
  },
  {
    name: "Data Activity Guides",
    count: 8,
    description: "Step-by-step instructions for working with NASA data tools",
    link: "/educator-hub",
  },
  {
    name: "Citizen Science Protocols",
    count: 4,
    description: "Observation and monitoring activity guides",
    link: "/citizen-science",
  },
  {
    name: "Workshop Toolkits",
    count: 4,
    description: "Complete facilitation packages for community events",
    link: "/partners",
  },
  {
    name: "Data Stories",
    count: 5,
    description: "Regional case studies using NASA observations",
    link: "/data-stories",
  },
  {
    name: "Mission Explainers",
    count: 5,
    description: "Plain-language guides to MAIA, TEMPO, PACE, MODIS, and VIIRS",
    link: "/explore",
  },
  {
    name: "Infographics & Visuals",
    count: 10,
    description: "Shareable graphics about air quality and atmospheric science",
    link: "#",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-breathe-light">
      <section className="bg-breathe-dark text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span>Resource Library</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Resource Library
          </h1>
          <p className="mt-3 text-gray-300 max-w-2xl text-lg">
            A central collection of all BREATHE educational materials, including
            modules, lesson plans, data guides, citizen science protocols, and
            workshop toolkits. All resources are free and openly accessible.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {resourceCategories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.link}
              className="breathe-card bg-white rounded-xl border border-breathe-border p-5 group"
            >
              <div className="text-2xl font-bold text-nasa-blue">{cat.count}</div>
              <h3 className="font-semibold text-breathe-dark mt-1 group-hover:text-nasa-blue transition-colors">
                {cat.name}
              </h3>
              <p className="text-xs text-breathe-gray mt-2">{cat.description}</p>
            </Link>
          ))}
        </div>

        <section className="mt-12 bg-white rounded-xl border border-breathe-border p-8">
          <h2 className="text-xl font-bold text-breathe-dark mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Resource Alignment &amp; Distribution
          </h2>
          <p className="text-breathe-gray leading-relaxed">
            BREATHE resources are designed to be cataloged and shared through
            NASA education resource distribution channels. All materials include
            metadata for searchability, standards alignment tags, and audience
            level indicators. Resources are published under open licenses to
            support broad reuse and adaptation.
          </p>
        </section>
      </div>
    </div>
  );
}
