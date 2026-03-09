import Link from "next/link";
import { regionalCaseStudies, phaseInfo } from "@/data/regions";

export default function DataStoriesPage() {
  const groupedByPhase = {
    "year1": regionalCaseStudies.filter((r) => r.phase === "year1"),
    "year2-3": regionalCaseStudies.filter((r) => r.phase === "year2-3"),
    "year4-5": regionalCaseStudies.filter((r) => r.phase === "year4-5"),
  };

  return (
    <div className="min-h-screen bg-breathe-light">
      {/* Hero */}
      <section className="breathe-gradient text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span>Data Stories</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              Data Stories &amp; Regional Case Studies
            </h1>
            <p className="mt-3 text-white/90 text-lg">
              Every community has a unique atmospheric story. These case studies
              use NASA satellite data to investigate real environmental health
              challenges in specific regions, showing how Earth observations
              connect to the air people breathe.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Phase timeline */}
        <div className="mb-12 bg-white rounded-xl border border-breathe-border p-6">
          <h2 className="text-lg font-bold text-breathe-dark mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Phased Regional Expansion
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {Object.entries(phaseInfo).map(([key, info]) => (
              <div key={key} className="flex items-start gap-3">
                <div className="w-4 h-4 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: info.color }} />
                <div>
                  <h3 className="font-semibold text-sm text-breathe-dark">{info.label}</h3>
                  <p className="text-xs text-breathe-gray mt-0.5">{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case studies by phase */}
        {Object.entries(groupedByPhase).map(([phase, studies]) => {
          const info = phaseInfo[phase as keyof typeof phaseInfo];
          return (
            <section key={phase} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: info.color }} />
                <h2 className="text-xl font-bold text-breathe-dark" style={{ fontFamily: "var(--font-display)" }}>
                  {info.label}
                </h2>
                {phase === "year1" && (
                  <span className="px-2 py-0.5 text-xs bg-green-50 text-green-700 rounded-full font-medium">Active</span>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {studies.map((study) => (
                  <article
                    key={study.id}
                    id={study.id}
                    className="breathe-card bg-white rounded-xl border border-breathe-border overflow-hidden"
                  >
                    <div className="h-1.5" style={{ backgroundColor: info.color }} />
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs px-2.5 py-0.5 rounded-full font-medium" style={{
                          backgroundColor: `${info.color}15`,
                          color: info.color
                        }}>
                          {study.status === "active" ? "Active Pilot" : "Planned"}
                        </span>
                        <span className="text-xs text-breathe-gray">📍 {study.region}</span>
                      </div>

                      <h3 className="text-lg font-bold text-breathe-dark">{study.title}</h3>
                      <p className="text-sm text-breathe-gray leading-relaxed mt-2">{study.description}</p>

                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-breathe-gray mb-2">
                            Environmental Challenges
                          </h4>
                          <ul className="space-y-1">
                            {study.environmentalChallenges.map((c) => (
                              <li key={c} className="text-xs text-breathe-dark flex items-start gap-1.5">
                                <span className="w-1 h-1 bg-breathe-alert rounded-full mt-1.5 flex-shrink-0" />
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-breathe-gray mb-2">
                            NASA Data Used
                          </h4>
                          <ul className="space-y-1">
                            {study.nasaDataUsed.map((d) => (
                              <li key={d} className="text-xs text-nasa-blue flex items-start gap-1.5">
                                <span className="w-1 h-1 bg-breathe-sky rounded-full mt-1.5 flex-shrink-0" />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {study.status === "active" && (
                        <div className="mt-4 pt-4 border-t border-breathe-border">
                          <Link
                            href={`/explore`}
                            className="text-sm text-nasa-blue font-medium hover:underline"
                          >
                            Explore this region's data →
                          </Link>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}

        {/* Community data story submission */}
        <section className="bg-breathe-health-light rounded-xl border border-breathe-health/20 p-8 mt-8">
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <h2 className="text-xl font-bold text-breathe-dark" style={{ fontFamily: "var(--font-display)" }}>
                Tell Your Community&apos;s Atmospheric Story
              </h2>
              <p className="text-sm text-breathe-gray mt-2">
                Have a story about how air quality, weather events, or atmospheric
                conditions affect your community? BREATHE supports community-driven
                data investigations and can help you use NASA data to tell your story.
              </p>
            </div>
            <Link
              href="/citizen-science"
              className="inline-flex items-center px-6 py-3 bg-breathe-health text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors whitespace-nowrap"
            >
              Start an Investigation
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
