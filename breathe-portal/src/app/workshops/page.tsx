import Link from "next/link";

const upcomingWorkshops = [
  {
    title: "Introduction to BREATHE: Air Quality and NASA Data",
    type: "Community Workshop",
    date: "April 2026",
    location: "Houston, TX (In-person)",
    audience: "Community members, all ages",
    description: "A hands-on introduction to how NASA satellites monitor air quality and what it means for health in the Houston area.",
    registration: true,
  },
  {
    title: "Teaching with TEMPO Data: Educator Workshop",
    type: "Professional Development",
    date: "May 2026",
    location: "Virtual",
    audience: "Educators, Grades 6-12",
    description: "Learn to use TEMPO hourly air pollution data in your classroom with ready-to-use lesson plans and data activities.",
    registration: true,
  },
  {
    title: "Community Air Monitoring Launch — Rio Grande Valley",
    type: "Citizen Science",
    date: "June 2026",
    location: "McAllen, TX (In-person)",
    audience: "Community members, students",
    description: "Kick off the BREATHE citizen science monitoring network in the border region. Sensor distribution and training included.",
    registration: true,
  },
  {
    title: "MAIA PM2.5 Data for Environmental Health Education",
    type: "Webinar",
    date: "July 2026",
    location: "Virtual",
    audience: "Educators, public health professionals",
    description: "An overview of MAIA particulate matter data products and how they can be used in environmental health education and community awareness.",
    registration: false,
  },
];

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-breathe-light">
      <section className="bg-breathe-dark text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-breathe-atmosphere">Workshops &amp; Events</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Community Workshops &amp; Events
          </h1>
          <p className="mt-3 text-gray-300 max-w-2xl text-lg">
            Join BREATHE workshops to learn about NASA air quality data, build
            citizen science skills, or develop your capacity to teach with
            satellite observations. Events are offered in-person and virtually.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {upcomingWorkshops.map((workshop) => (
            <article key={workshop.title} className="breathe-card bg-white rounded-xl border border-breathe-border p-6 md:p-8">
              <div className="grid md:grid-cols-[1fr_200px] gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 text-xs font-medium bg-breathe-sky-light text-nasa-blue rounded-full">
                      {workshop.type}
                    </span>
                    <span className="text-xs text-breathe-gray">{workshop.audience}</span>
                  </div>
                  <h2 className="text-xl font-bold text-breathe-dark">{workshop.title}</h2>
                  <p className="text-sm text-breathe-gray mt-2">{workshop.description}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-breathe-gray">
                    <span>📅 {workshop.date}</span>
                    <span>📍 {workshop.location}</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start md:items-end gap-2">
                  {workshop.registration ? (
                    <button className="px-6 py-3 bg-nasa-blue text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors">
                      Register
                    </button>
                  ) : (
                    <span className="text-sm text-breathe-gray italic">Registration opens soon</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-12 bg-white rounded-xl border border-breathe-border p-8">
          <h2 className="text-xl font-bold text-breathe-dark mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Host a BREATHE Workshop
          </h2>
          <p className="text-breathe-gray leading-relaxed">
            BREATHE provides complete workshop toolkits for partner organizations
            to host their own events. Each toolkit includes facilitator guides,
            participant materials, data activities, and evaluation instruments.
          </p>
          <Link
            href="/partners"
            className="inline-flex items-center mt-4 text-nasa-blue font-medium hover:underline"
          >
            View workshop toolkits for partners →
          </Link>
        </section>
      </div>
    </div>
  );
}
