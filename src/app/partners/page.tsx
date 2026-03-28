import Link from "next/link";

const partnerTypes = [
  {
    type: "Formal Education",
    description: "K-12 school districts, community colleges, and university programs that integrate BREATHE into curricula",
    examples: ["Houston Independent School District", "Border region school districts", "Alamo Colleges District", "University research partners"],
    opportunities: [
      "Adopt BREATHE learning modules in science classrooms",
      "Host educator professional development workshops",
      "Participate in student citizen science data collection",
      "Co-develop locally relevant case studies",
    ],
  },
  {
    type: "Informal Learning",
    description: "Museums, science centers, libraries, afterschool programs, and community learning organizations",
    examples: ["Science museums and discovery centers", "Public libraries", "Afterschool STEM programs", "Summer camps"],
    opportunities: [
      "Host BREATHE community workshops and public events",
      "Incorporate air quality activities into programming",
      "Provide community access to data exploration tools",
      "Facilitate citizen science activities",
    ],
  },
  {
    type: "Public Health & Government",
    description: "Health departments, air quality agencies, and government organizations working on environmental health",
    examples: ["City and county health departments", "Regional air quality commissions", "State environmental agencies", "Emergency management offices"],
    opportunities: [
      "Connect BREATHE learners with local health data and expertise",
      "Co-facilitate community workshops on air quality and health",
      "Provide real-world context for student investigations",
      "Share monitoring network data with the BREATHE platform",
    ],
  },
  {
    type: "Community Organizations",
    description: "Neighborhood groups, environmental justice organizations, faith communities, and civic organizations",
    examples: ["Environmental justice organizations", "Community development corporations", "Faith-based organizations", "Neighborhood associations"],
    opportunities: [
      "Bring BREATHE workshops to underserved communities",
      "Advocate for local air quality monitoring using NASA data",
      "Recruit citizen science participants from the community",
      "Share local environmental knowledge and priorities",
    ],
  },
  {
    type: "NASA Science Teams",
    description: "NASA mission scientists, data product developers, and science communicators supporting BREATHE content",
    examples: ["MAIA science team", "TEMPO science team", "NASA Goddard and JPL scientists", "NASA Science Activation community"],
    opportunities: [
      "Review and validate educational content for accuracy",
      "Participate in scientist-educator connection events",
      "Provide expert guidance on data interpretation",
      "Co-author data stories and case studies",
    ],
  },
];

const workshopToolkits = [
  {
    title: "Community Air Quality Workshop",
    audience: "General public",
    duration: "2-3 hours",
    description: "A facilitated workshop introducing community members to NASA air quality data and local environmental health information.",
  },
  {
    title: "Educator Professional Development",
    audience: "Teachers (Grades 6-12)",
    duration: "Half-day or full-day",
    description: "Hands-on training for educators on integrating NASA atmospheric data into science instruction.",
  },
  {
    title: "Citizen Science Launch Event",
    audience: "Community members & students",
    duration: "2 hours",
    description: "An event to kick off community monitoring activities, distribute sensor kits, and train participants.",
  },
  {
    title: "Youth Environmental Investigation Bootcamp",
    audience: "Students (Grades 8-12)",
    duration: "Multi-session (8-12 hours)",
    description: "An intensive program where students design and conduct their own NASA data-driven investigation of a local environmental health question.",
  },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-breathe-light">
      {/* Hero */}
      <section className="bg-breathe-dark text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-breathe-warm">Partners</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              Partner Network
            </h1>
            <p className="mt-3 text-gray-300 text-lg">
              BREATHE is built on partnerships. We work with school districts,
              community organizations, public health agencies, informal learning
              institutions, and NASA science teams to bring atmospheric science
              and environmental health education to communities across the country.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Partner types */}
        <div className="space-y-8">
          {partnerTypes.map((partner) => (
            <section key={partner.type} className="bg-white rounded-xl border border-breathe-border overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="text-xl font-bold text-breathe-dark" style={{ fontFamily: "var(--font-display)" }}>
                  {partner.type}
                </h2>
                <p className="text-sm text-breathe-gray mt-1">{partner.description}</p>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-breathe-gray mb-3">
                      Example Partners
                    </h3>
                    <ul className="space-y-2">
                      {partner.examples.map((ex) => (
                        <li key={ex} className="text-sm text-breathe-dark flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-breathe-sky rounded-full flex-shrink-0" />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-breathe-gray mb-3">
                      Partnership Opportunities
                    </h3>
                    <ul className="space-y-2">
                      {partner.opportunities.map((opp) => (
                        <li key={opp} className="text-sm text-breathe-dark flex items-start gap-2">
                          <svg className="w-4 h-4 text-breathe-health mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {opp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Workshop toolkits */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-breathe-dark mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Workshop Toolkits for Partners
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {workshopToolkits.map((toolkit) => (
              <div key={toolkit.title} className="breathe-card bg-white rounded-xl border border-breathe-border p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 bg-breathe-sky-light text-nasa-blue rounded-full">
                    {toolkit.audience}
                  </span>
                  <span className="text-xs text-breathe-gray">{toolkit.duration}</span>
                </div>
                <h3 className="font-semibold text-breathe-dark">{toolkit.title}</h3>
                <p className="text-sm text-breathe-gray mt-2">{toolkit.description}</p>
                <button className="mt-4 text-sm text-nasa-blue font-medium hover:underline">
                  Download Toolkit →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Partner CTA */}
        <section className="mt-12 breathe-gradient rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Become a BREATHE Partner
          </h2>
          <p className="mt-3 text-white/90 max-w-xl mx-auto">
            Whether you represent a school, community organization, health agency,
            or learning institution, there are meaningful ways to participate in
            BREATHE and bring NASA science to your community.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-white text-nasa-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Express Interest
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Contact the BREATHE Team
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
