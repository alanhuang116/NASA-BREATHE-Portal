import Link from "next/link";

const teamCategories = [
  {
    category: "Project Leadership",
    members: [
      { name: "Principal Investigator", affiliation: "Lead University", role: "Overall project direction and NASA coordination" },
      { name: "Co-Investigator (Education)", affiliation: "Education Partner", role: "Curriculum development and educator engagement" },
      { name: "Co-Investigator (Community)", affiliation: "Community Partner", role: "Community partnerships and outreach" },
    ],
  },
  {
    category: "NASA Science Team",
    members: [
      { name: "MAIA Science Advisor", affiliation: "NASA JPL", role: "MAIA data products and aerosol science guidance" },
      { name: "TEMPO Science Advisor", affiliation: "SAO / NASA", role: "TEMPO data interpretation and air quality science" },
      { name: "Earth Science Communicator", affiliation: "NASA GSFC", role: "Science communication and content review" },
    ],
  },
  {
    category: "Education & Evaluation",
    members: [
      { name: "Curriculum Developer", affiliation: "Education Partner", role: "Learning module design and standards alignment" },
      { name: "Community Engagement Lead", affiliation: "Community Organization", role: "Community workshops and citizen science coordination" },
      { name: "External Evaluator", affiliation: "Evaluation Firm", role: "Independent evaluation and assessment" },
    ],
  },
];

const timeline = [
  { year: "Year 1", period: "2025-2026", label: "Pilot", activities: ["Launch Houston and border region pilots", "Develop core learning modules", "Build MVP online platform", "Establish community partnerships", "Deploy initial citizen science activities"] },
  { year: "Year 2", period: "2026-2027", label: "Expand", activities: ["Add Dallas-Fort Worth and San Antonio regions", "Expand module library", "Launch educator professional development", "Scale citizen science monitoring network", "Integrate MAIA data products as available"] },
  { year: "Year 3", period: "2027-2028", label: "Deepen", activities: ["Full Texas coverage through school district partnerships", "Community college integration", "Advanced data investigation modules", "Regional data story publications", "Mid-project evaluation and refinement"] },
  { year: "Year 4", period: "2028-2029", label: "Scale", activities: ["National expansion through education networks", "Multi-state community partnerships", "Platform feature maturation", "Sustainability planning initiated", "National educator PD network"] },
  { year: "Year 5", period: "2029-2030", label: "Sustain", activities: ["Full national reach through online platform", "Sustainability model implemented", "Final evaluation and impact reporting", "Resource archiving and long-term access planning", "Transition to post-award maintenance model"] },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-breathe-light">
      {/* Hero */}
      <section className="breathe-gradient text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span>About</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              About BREATHE
            </h1>
            <p className="mt-3 text-white/90 text-lg">
              BRidging Education on Atmosphere, Technology, and HEalth — a NASA
              Science Activation project connecting Earth science with STEM
              education and community health.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Mission statement */}
        <section className="bg-white rounded-xl border border-breathe-border p-8 mb-8">
          <h2 className="text-2xl font-bold text-breathe-dark mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Our Mission
          </h2>
          <p className="text-breathe-dark leading-relaxed text-lg">
            BREATHE connects NASA Earth science resources with STEM education and
            community learning to help people understand how air pollution, extreme
            weather, and atmospheric conditions affect health in their communities.
            We bring satellite observations from missions like MAIA and TEMPO into
            classrooms, community workshops, and citizen science activities, moving
            learners from awareness to active contribution.
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="bg-breathe-sky-light rounded-lg p-4">
              <h3 className="font-semibold text-nasa-blue">NASA Science</h3>
              <p className="text-sm text-breathe-gray mt-1">
                Grounded in real NASA satellite observations, data products, and scientific expertise
              </p>
            </div>
            <div className="bg-breathe-health-light rounded-lg p-4">
              <h3 className="font-semibold text-breathe-health">STEM Education</h3>
              <p className="text-sm text-breathe-gray mt-1">
                Standards-aligned learning modules and educator support for K-12 and community settings
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <h3 className="font-semibold text-breathe-warm">Community Health</h3>
              <p className="text-sm text-breathe-gray mt-1">
                Connecting atmospheric science to environmental exposure and public health in local communities
              </p>
            </div>
          </div>
        </section>

        {/* Science Activation context */}
        <section className="bg-white rounded-xl border border-breathe-border p-8 mb-8">
          <h2 className="text-xl font-bold text-breathe-dark mb-4" style={{ fontFamily: "var(--font-display)" }}>
            NASA Science Activation Program
          </h2>
          <p className="text-breathe-dark leading-relaxed">
            BREATHE is funded through NASA&apos;s Science Activation program (F.6), which
            connects NASA science experts, real content, and experiences with community
            leaders to do science in ways that activate minds and promote understanding.
            Science Activation projects enable NASA to strategically invest in engagement
            activities that are audience-focused, evidence-based, and linked to NASA&apos;s
            science, technology, and exploration.
          </p>
          <div className="mt-4 p-4 bg-breathe-light rounded-lg border-l-4 border-nasa-blue">
            <p className="text-sm text-breathe-dark italic">
              &quot;NASA Science Activation connects NASA science experts, real content, and
              experiences with community leaders to do science in ways that activate minds
              and promote understanding of our world and beyond.&quot;
            </p>
            <p className="text-xs text-breathe-gray mt-2">— NASA Science Mission Directorate</p>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-white rounded-xl border border-breathe-border p-8 mb-8">
          <h2 className="text-xl font-bold text-breathe-dark mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Five-Year Project Timeline
          </h2>
          <div className="space-y-6">
            {timeline.map((year, i) => (
              <div key={year.year} className="flex gap-6 items-start">
                <div className="w-20 flex-shrink-0 text-center">
                  <div className={`text-lg font-bold ${i === 0 ? "text-nasa-red" : "text-nasa-blue"}`}>{year.year}</div>
                  <div className="text-xs text-breathe-gray">{year.period}</div>
                  <div className={`mt-1 px-2 py-0.5 text-xs rounded-full font-medium ${
                    i === 0 ? "bg-red-50 text-nasa-red" : "bg-breathe-sky-light text-nasa-blue"
                  }`}>
                    {year.label}
                  </div>
                </div>
                <div className="flex-1 pb-6 border-b border-breathe-border last:border-0">
                  <ul className="grid md:grid-cols-2 gap-2">
                    {year.activities.map((activity) => (
                      <li key={activity} className="text-sm text-breathe-dark flex items-start gap-2">
                        <svg className="w-4 h-4 text-breathe-atmosphere mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="bg-white rounded-xl border border-breathe-border p-8 mb-8">
          <h2 className="text-xl font-bold text-breathe-dark mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Project Team
          </h2>
          <div className="space-y-8">
            {teamCategories.map((cat) => (
              <div key={cat.category}>
                <h3 className="font-semibold text-nasa-blue mb-3">{cat.category}</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {cat.members.map((member) => (
                    <div key={member.name} className="bg-breathe-light rounded-lg p-4">
                      <div className="font-medium text-sm text-breathe-dark">{member.name}</div>
                      <div className="text-xs text-nasa-blue mt-0.5">{member.affiliation}</div>
                      <div className="text-xs text-breathe-gray mt-1">{member.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="breathe-gradient rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Get in Touch
          </h2>
          <p className="mt-3 text-white/90 max-w-xl mx-auto">
            Have questions about BREATHE? Interested in partnering with us?
            We would love to hear from you.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-white text-nasa-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
            <Link href="/partners" className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Explore Partnerships
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
