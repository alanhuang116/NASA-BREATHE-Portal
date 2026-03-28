"use client";

import Link from "next/link";
import { useState } from "react";

const activities = [
  {
    id: "sky-observation",
    title: "Sky & Visibility Observation",
    difficulty: "Beginner",
    time: "10-15 minutes",
    equipment: "Smartphone with camera",
    description:
      "Observe and record sky conditions, visibility, and cloud cover at your location. Your observations help validate satellite-derived atmospheric measurements and contribute to GLOBE Observer.",
    protocol: [
      "Go outside with a clear view of the sky",
      "Open the BREATHE observation form on your phone",
      "Record sky color, cloud cover percentage, and visibility distance",
      "Take a photo of the sky in each cardinal direction",
      "Note any visible haze, smoke, or dust",
      "Submit your observation with GPS location",
    ],
    nasaConnection: "Supports validation of MAIA aerosol optical depth, PACE aerosol type retrievals, and MODIS cloud products",
    citizenScienceProgram: "GLOBE Observer",
  },
  {
    id: "pm-sensor",
    title: "Low-Cost PM2.5 Sensor Deployment",
    difficulty: "Intermediate",
    time: "2-4 hours (build) + ongoing monitoring",
    equipment: "PurpleAir or custom sensor kit ($50-250)",
    description:
      "Build, calibrate, and deploy a low-cost particulate matter sensor at your home, school, or community location. Your continuous measurements create a ground-based network that complements NASA satellite observations of aerosols.",
    protocol: [
      "Order or receive your sensor kit through BREATHE",
      "Follow the assembly guide to build your sensor",
      "Register your sensor on the BREATHE monitoring network",
      "Install at a suitable outdoor location following placement guidelines",
      "Verify data is flowing to the BREATHE community map",
      "Compare your readings with MAIA PM2.5 satellite estimates",
    ],
    nasaConnection: "Ground validation data for MAIA PM2.5 concentration estimates",
    citizenScienceProgram: "BREATHE Community Monitoring Network",
  },
  {
    id: "pollution-event",
    title: "Pollution Event Documentation",
    difficulty: "Beginner",
    time: "15-30 minutes per event",
    equipment: "Smartphone",
    description:
      "When you notice unusual air quality conditions — smoke, haze, industrial odors, or dust events — document them with photos, notes, and sensor readings if available. These reports help researchers understand short-term pollution events that satellites may capture.",
    protocol: [
      "Notice an unusual air quality event (smoke, dust, haze, odor)",
      "Open the BREATHE event reporting form",
      "Record date, time, location, and type of event",
      "Describe what you observe (visibility, color, smell, health effects)",
      "Take photos showing the conditions",
      "Check AirNow and TEMPO data for corresponding satellite observations",
      "Submit your report",
    ],
    nasaConnection: "Links ground observations to TEMPO hourly data and MODIS/VIIRS fire/smoke detection",
    citizenScienceProgram: "BREATHE Community Observations",
  },
  {
    id: "data-investigation",
    title: "Community Data Investigation",
    difficulty: "Advanced",
    time: "Multiple sessions (4-8 hours total)",
    equipment: "Computer with internet access",
    description:
      "Conduct a structured investigation using NASA satellite data and local observations to answer a question about air quality or environmental exposure in your community. Present your findings at a BREATHE community workshop.",
    protocol: [
      "Choose an environmental health question relevant to your community",
      "Identify NASA data products that can help answer your question",
      "Download and analyze satellite data using BREATHE-provided tools",
      "Collect any relevant local data (sensor readings, observations, records)",
      "Synthesize findings into a community data story",
      "Present at a BREATHE workshop or share on the portal",
    ],
    nasaConnection: "Full suite of TEMPO, MAIA, PACE, MODIS, and VIIRS data products",
    citizenScienceProgram: "BREATHE Community Investigations",
  },
];

export default function CitizenSciencePage() {
  const [selectedActivity, setSelectedActivity] = useState(activities[0].id);
  const active = activities.find((a) => a.id === selectedActivity)!;

  return (
    <div className="min-h-screen bg-breathe-light">
      {/* Hero */}
      <section className="bg-breathe-dark text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-breathe-health">Citizen Science</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              Citizen Science &amp; Community Observations
            </h1>
            <p className="mt-3 text-gray-300 text-lg">
              Your observations matter. Contribute local atmospheric measurements
              and observations that complement NASA satellite data, fill monitoring
              gaps, and help scientists understand air quality at the community scale.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Activity selector */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          <aside>
            <h2 className="font-semibold text-breathe-dark mb-4">Choose an Activity</h2>
            <nav className="space-y-2" aria-label="Citizen science activities">
              {activities.map((activity) => (
                <button
                  key={activity.id}
                  onClick={() => setSelectedActivity(activity.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-colors ${
                    selectedActivity === activity.id
                      ? "border-breathe-health bg-breathe-health-light"
                      : "border-breathe-border bg-white hover:border-breathe-health/50"
                  }`}
                >
                  <div className="font-medium text-sm text-breathe-dark">{activity.title}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      activity.difficulty === "Beginner"
                        ? "bg-green-50 text-green-700"
                        : activity.difficulty === "Intermediate"
                          ? "bg-yellow-50 text-yellow-700"
                          : "bg-red-50 text-red-700"
                    }`}>
                      {activity.difficulty}
                    </span>
                    <span className="text-xs text-breathe-gray">{activity.time}</span>
                  </div>
                </button>
              ))}
            </nav>

            {/* Community stats placeholder */}
            <div className="mt-6 bg-white rounded-xl border border-breathe-border p-5">
              <h3 className="font-semibold text-breathe-dark text-sm mb-3">Community Impact</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold text-nasa-blue">—</div>
                  <div className="text-xs text-breathe-gray">Observations submitted</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-breathe-health">—</div>
                  <div className="text-xs text-breathe-gray">Active monitors deployed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-breathe-atmosphere">—</div>
                  <div className="text-xs text-breathe-gray">Communities participating</div>
                </div>
              </div>
              <p className="text-xs text-breathe-gray mt-3 italic">
                Stats will populate as the pilot launches.
              </p>
            </div>
          </aside>

          {/* Activity detail */}
          <div>
            <div className="bg-white rounded-xl border border-breathe-border overflow-hidden">
              <div className="h-1.5 bg-breathe-health" />
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    active.difficulty === "Beginner"
                      ? "bg-green-50 text-green-700"
                      : active.difficulty === "Intermediate"
                        ? "bg-yellow-50 text-yellow-700"
                        : "bg-red-50 text-red-700"
                  }`}>
                    {active.difficulty}
                  </span>
                  <span className="text-sm text-breathe-gray">⏱ {active.time}</span>
                  <span className="text-sm text-breathe-gray">🔧 {active.equipment}</span>
                </div>

                <h2 className="text-2xl font-bold text-breathe-dark" style={{ fontFamily: "var(--font-display)" }}>
                  {active.title}
                </h2>
                <p className="text-breathe-dark leading-relaxed mt-3">{active.description}</p>

                {/* Protocol steps */}
                <div className="mt-8">
                  <h3 className="font-semibold text-breathe-dark mb-4">Step-by-Step Protocol</h3>
                  <div className="space-y-4">
                    {active.protocol.map((step, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-breathe-health text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {i + 1}
                        </div>
                        <div className="pt-1.5 text-sm text-breathe-dark flex-1 border-b border-breathe-border pb-4">
                          {step}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* NASA connection */}
                <div className="mt-8 bg-breathe-sky-light rounded-lg p-5">
                  <h3 className="font-semibold text-nasa-blue text-sm mb-2">NASA Connection</h3>
                  <p className="text-sm text-breathe-dark">{active.nasaConnection}</p>
                  <p className="text-xs text-breathe-gray mt-2">
                    Part of: <span className="font-medium">{active.citizenScienceProgram}</span>
                  </p>
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <button className="px-6 py-3 bg-breathe-health text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors">
                    Start This Activity
                  </button>
                  <button className="px-6 py-3 border border-breathe-border text-breathe-dark font-medium rounded-lg hover:bg-breathe-light transition-colors">
                    Download Protocol Guide
                  </button>
                  <button className="px-6 py-3 border border-breathe-border text-breathe-dark font-medium rounded-lg hover:bg-breathe-light transition-colors">
                    Submit an Observation
                  </button>
                </div>
              </div>
            </div>

            {/* Observation submission form preview */}
            <div className="mt-6 bg-white rounded-xl border border-breathe-border p-6 md:p-8">
              <h3 className="text-lg font-bold text-breathe-dark mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Submit an Observation
              </h3>
              <p className="text-sm text-breathe-gray mb-6">
                Use this form to record and submit your atmospheric observation.
                All fields are optional except location and date.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-breathe-dark mb-1" htmlFor="obs-date">
                    Date &amp; Time *
                  </label>
                  <input
                    id="obs-date"
                    type="datetime-local"
                    className="w-full px-3 py-2 border border-breathe-border rounded-lg text-sm focus:outline-none focus:border-breathe-sky"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-breathe-dark mb-1" htmlFor="obs-location">
                    Location *
                  </label>
                  <input
                    id="obs-location"
                    type="text"
                    placeholder="Address or coordinates"
                    className="w-full px-3 py-2 border border-breathe-border rounded-lg text-sm focus:outline-none focus:border-breathe-sky"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-breathe-dark mb-1" htmlFor="obs-type">
                    Observation Type
                  </label>
                  <select
                    id="obs-type"
                    className="w-full px-3 py-2 border border-breathe-border rounded-lg text-sm focus:outline-none focus:border-breathe-sky"
                  >
                    <option>Sky & Visibility</option>
                    <option>Sensor Reading</option>
                    <option>Pollution Event</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-breathe-dark mb-1" htmlFor="obs-visibility">
                    Visibility Estimate
                  </label>
                  <select
                    id="obs-visibility"
                    className="w-full px-3 py-2 border border-breathe-border rounded-lg text-sm focus:outline-none focus:border-breathe-sky"
                  >
                    <option>Clear (&gt;10 miles)</option>
                    <option>Moderate (5-10 miles)</option>
                    <option>Hazy (1-5 miles)</option>
                    <option>Poor (&lt;1 mile)</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-breathe-dark mb-1" htmlFor="obs-notes">
                    Notes
                  </label>
                  <textarea
                    id="obs-notes"
                    rows={3}
                    placeholder="Describe what you observe (sky color, haze, smoke, odors, health effects noticed)..."
                    className="w-full px-3 py-2 border border-breathe-border rounded-lg text-sm focus:outline-none focus:border-breathe-sky"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-breathe-dark mb-1">
                    Photos
                  </label>
                  <div className="border-2 border-dashed border-breathe-border rounded-lg p-6 text-center text-sm text-breathe-gray hover:border-breathe-sky transition-colors cursor-pointer">
                    Click to upload or drag and drop sky photos
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-xs text-breathe-gray">
                  Your data is handled according to our privacy policy. Location is stored at neighborhood level only.
                </p>
                <button className="px-6 py-2.5 bg-breathe-health text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors">
                  Submit Observation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
