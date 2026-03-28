import Link from "next/link";
import { learningModules, engagementLevels } from "@/data/modules";

const educatorResources = [
  {
    category: "Lesson Plans",
    description: "Complete, classroom-ready lesson plans aligned with NGSS standards",
    items: [
      { title: "What's in the Air? — Introduction to Air Quality (Grades 6-8)", format: "PDF", pages: 12 },
      { title: "Pollution Around the Clock — TEMPO Data Activity (Grades 8-12)", format: "PDF", pages: 18 },
      { title: "Particles That Matter — MAIA PM2.5 Investigation (Grades 9-12)", format: "PDF", pages: 22 },
      { title: "Smoke Signals from Space — Wildfire Tracking (Grades 7-12)", format: "PDF", pages: 16 },
      { title: "Be a Community Air Monitor — Sensor Build Guide (Grades 8-12)", format: "PDF", pages: 28 },
    ],
  },
  {
    category: "Student Handouts",
    description: "Printable worksheets, data recording sheets, and investigation guides",
    items: [
      { title: "Air Quality Index Reference Card", format: "PDF", pages: 2 },
      { title: "Satellite vs. Ground Data Comparison Worksheet", format: "PDF", pages: 4 },
      { title: "Community Air Quality Investigation Template", format: "PDF/DOCX", pages: 6 },
      { title: "Citizen Science Observation Field Guide", format: "PDF", pages: 8 },
    ],
  },
  {
    category: "Data Activities",
    description: "Step-by-step guides for working with NASA data in the classroom",
    items: [
      { title: "Using NASA Worldview for Air Quality Exploration", format: "PDF + Video", pages: 10 },
      { title: "Reading TEMPO NO₂ Maps — Teacher Guide", format: "PDF", pages: 8 },
      { title: "Interpreting MAIA PM2.5 Data for Health Context", format: "PDF", pages: 12 },
      { title: "FIRMS Fire Detection — Classroom Activity", format: "PDF + Data", pages: 14 },
    ],
  },
  {
    category: "Professional Development",
    description: "Self-paced and facilitated training for teaching with NASA EO data",
    items: [
      { title: "BREATHE Educator Orientation (Self-Paced)", format: "Online Module", pages: 0 },
      { title: "Teaching Air Quality with Satellite Data — Workshop Series", format: "Virtual Sessions", pages: 0 },
      { title: "Building Community Partnerships for Environmental Education", format: "Webinar Recording", pages: 0 },
      { title: "Low-Cost Sensor Setup and Troubleshooting for Educators", format: "Video Series", pages: 0 },
    ],
  },
];

const standardsAlignment = [
  {
    standard: "NGSS",
    connections: [
      "MS-ESS3-3: Apply scientific principles to design monitoring methods",
      "MS-ESS3-4: Construct arguments on human impacts to environment",
      "HS-ESS2-4: Develop a model of Earth's internal and surface processes",
      "HS-ESS3-4: Evaluate technological solutions for reducing human impact",
      "HS-ESS3-6: Use computational models to forecast impacts",
      "HS-ETS1-1: Analyze a major global challenge",
      "HS-ETS1-3: Evaluate a solution to a complex real-world problem",
    ],
  },
  {
    standard: "TEKS (Texas)",
    connections: [
      "Earth and Space Science: Atmospheric composition and weather",
      "Biology: Environmental change and organism response",
      "Chemistry: Air pollutant chemistry and reactions",
      "Environmental Systems: Human impact on ecosystems",
    ],
  },
];

export default function EducatorHubPage() {
  return (
    <div className="min-h-screen bg-breathe-light">
      {/* Hero */}
      <section className="bg-breathe-dark text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-breathe-atmosphere">Educator Hub</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              Educator Hub
            </h1>
            <p className="mt-3 text-gray-300 text-lg">
              Everything you need to bring NASA air quality and environmental
              health science into your classroom. Standards-aligned lesson plans,
              student handouts, data activities, and professional development —
              all built around real satellite observations.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { value: `${learningModules.filter(m => m.status === "available").length}`, label: "Learning Modules" },
            { value: "20+", label: "Downloadable Resources" },
            { value: "7", label: "NGSS Standards Covered" },
            { value: "All", label: "Grades 6-12" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-breathe-border p-5 text-center">
              <div className="text-2xl font-bold text-nasa-blue">{stat.value}</div>
              <div className="text-xs text-breathe-gray mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Resource categories */}
        <div className="space-y-8">
          {educatorResources.map((category) => (
            <section key={category.category} className="bg-white rounded-xl border border-breathe-border overflow-hidden">
              <div className="border-b border-breathe-border px-6 py-4 bg-breathe-light">
                <h2 className="text-lg font-bold text-breathe-dark" style={{ fontFamily: "var(--font-display)" }}>
                  {category.category}
                </h2>
                <p className="text-sm text-breathe-gray mt-1">{category.description}</p>
              </div>
              <div className="divide-y divide-breathe-border">
                {category.items.map((item) => (
                  <div key={item.title} className="px-6 py-4 flex items-center justify-between hover:bg-breathe-light/50 transition-colors">
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-breathe-dark">{item.title}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-breathe-gray">{item.format}</span>
                        {item.pages > 0 && (
                          <span className="text-xs text-breathe-gray">{item.pages} pages</span>
                        )}
                      </div>
                    </div>
                    <button className="px-4 py-2 text-sm font-medium text-nasa-blue border border-breathe-border rounded-lg hover:bg-breathe-sky-light transition-colors flex-shrink-0">
                      {item.format.includes("Online") || item.format.includes("Virtual") || item.format.includes("Video") || item.format.includes("Webinar")
                        ? "Access"
                        : "Download"}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Standards alignment */}
        <section className="mt-12 bg-white rounded-xl border border-breathe-border p-6 md:p-8">
          <h2 className="text-xl font-bold text-breathe-dark mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Standards Alignment
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {standardsAlignment.map((standard) => (
              <div key={standard.standard}>
                <h3 className="font-semibold text-nasa-blue mb-3">{standard.standard}</h3>
                <ul className="space-y-2">
                  {standard.connections.map((connection) => (
                    <li key={connection} className="text-sm text-breathe-dark flex items-start gap-2">
                      <svg className="w-4 h-4 text-breathe-health mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {connection}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Module quick access */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-breathe-dark mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Modules at a Glance
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningModules.filter(m => m.status === "available").map((module) => {
              const level = engagementLevels[module.engagementLevel];
              return (
                <Link
                  key={module.id}
                  href={`/modules#${module.id}`}
                  className="breathe-card bg-white rounded-xl border border-breathe-border p-5 group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: level.color }} />
                    <span className="text-xs text-breathe-gray">{module.gradeLevel}</span>
                  </div>
                  <h3 className="font-semibold text-breathe-dark group-hover:text-nasa-blue transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-xs text-breathe-gray mt-1">{module.subtitle}</p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {module.standards.slice(0, 2).map((s) => (
                      <span key={s} className="text-xs px-2 py-0.5 bg-breathe-light text-breathe-gray rounded">
                        {s}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* PD signup CTA */}
        <section className="mt-12 breathe-gradient rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Join the BREATHE Educator Community
          </h2>
          <p className="mt-3 text-white/90 max-w-xl mx-auto">
            Sign up for professional development workshops, receive new resources
            as they are developed, and connect with other educators using NASA data
            in their classrooms.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-white text-nasa-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Register for PD Workshops
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Join Educator Mailing List
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
