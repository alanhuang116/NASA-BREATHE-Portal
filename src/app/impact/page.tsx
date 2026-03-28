import Link from "next/link";

const metricCategories = [
  {
    category: "Reach & Awareness",
    metrics: [
      { label: "Unique site visitors", value: "—", target: "Year 1: 5,000" },
      { label: "Page views", value: "—", target: "Year 1: 25,000" },
      { label: "Geographic reach (states)", value: "1", target: "Year 5: 50" },
      { label: "Social media impressions", value: "—", target: "" },
    ],
  },
  {
    category: "Learning & Education",
    metrics: [
      { label: "Module starts", value: "—", target: "Year 1: 500" },
      { label: "Module completions", value: "—", target: "" },
      { label: "Resource downloads", value: "—", target: "Year 1: 1,000" },
      { label: "Educators trained", value: "—", target: "Year 1: 50" },
    ],
  },
  {
    category: "Experience & Participation",
    metrics: [
      { label: "Workshop participants", value: "—", target: "Year 1: 200" },
      { label: "Citizen science observations", value: "—", target: "Year 1: 100" },
      { label: "Active monitoring sensors", value: "—", target: "Year 1: 20" },
      { label: "Data stories published", value: "2", target: "" },
    ],
  },
  {
    category: "Contribution & Partnership",
    metrics: [
      { label: "Partner organizations", value: "—", target: "Year 1: 10" },
      { label: "Community data investigations", value: "—", target: "" },
      { label: "Educator-created adaptations", value: "—", target: "" },
      { label: "Schools adopting BREATHE modules", value: "—", target: "Year 1: 10" },
    ],
  },
];

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-breathe-light">
      <section className="breathe-gradient text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span>Impact &amp; Evaluation</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Impact &amp; Evaluation
          </h1>
          <p className="mt-3 text-white/90 max-w-2xl text-lg">
            BREATHE is designed to be evaluable from day one. We track engagement,
            learning, and contribution outcomes to support independent evaluation
            and continuous improvement.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Evaluation framework */}
        <section className="bg-white rounded-xl border border-breathe-border p-8 mb-8">
          <h2 className="text-xl font-bold text-breathe-dark mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Evaluation Framework
          </h2>
          <p className="text-breathe-dark leading-relaxed">
            BREATHE&apos;s evaluation is conducted by an independent external evaluator using
            a mixed-methods approach. The portal is instrumented to capture engagement
            signals at each level of the learning progression — from awareness through
            contribution — while respecting user privacy. All data collection follows
            IRB-approved protocols and complies with COPPA for underage users.
          </p>
          <div className="mt-6 grid md:grid-cols-4 gap-4">
            {["Awareness", "Learning", "Experience", "Contribution"].map((level, i) => (
              <div key={level} className="bg-breathe-light rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-nasa-blue mb-1">{i + 1}</div>
                <div className="font-semibold text-breathe-dark text-sm">{level}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Metrics dashboard */}
        <div className="grid md:grid-cols-2 gap-6">
          {metricCategories.map((cat) => (
            <section key={cat.category} className="bg-white rounded-xl border border-breathe-border overflow-hidden">
              <div className="border-b border-breathe-border px-6 py-3 bg-breathe-light">
                <h3 className="font-semibold text-breathe-dark text-sm">{cat.category}</h3>
              </div>
              <div className="divide-y divide-breathe-border">
                {cat.metrics.map((metric) => (
                  <div key={metric.label} className="px-6 py-3 flex items-center justify-between">
                    <span className="text-sm text-breathe-dark">{metric.label}</span>
                    <div className="text-right">
                      <span className="text-sm font-semibold text-nasa-blue">{metric.value}</span>
                      {metric.target && (
                        <span className="text-xs text-breathe-gray block">{metric.target}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Privacy note */}
        <section className="mt-8 bg-breathe-sky-light rounded-xl border border-breathe-sky/20 p-6">
          <h3 className="font-semibold text-nasa-blue text-sm mb-2">Privacy &amp; Data Ethics</h3>
          <p className="text-sm text-breathe-dark leading-relaxed">
            BREATHE collects engagement data using privacy-preserving methods. We do
            not track personally identifiable information without explicit consent.
            Aggregate metrics are used for evaluation and reporting. Our approach
            complies with COPPA, FERPA, and IRB requirements. Location data from
            citizen science observations is stored at the neighborhood level, not
            at specific addresses.
          </p>
        </section>
      </div>
    </div>
  );
}
