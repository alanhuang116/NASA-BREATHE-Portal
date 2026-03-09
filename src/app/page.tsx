import Link from "next/link";
import { missions } from "@/data/missions";
import { learningModules, engagementLevels } from "@/data/modules";
import { regionalCaseStudies } from "@/data/regions";

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Atmospheric gradient background */}
      <div className="breathe-gradient">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              NASA Science Activation Project
            </div>

            <h1
              className="text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="block text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-2">
                BREATHE
              </span>
              <span className="block text-lg md:text-xl lg:text-2xl font-medium text-white/80 tracking-wide">
                BRidging Education on Atmosphere, Technology, and HEalth
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
              A NASA-powered platform connecting satellite observations with
              STEM education and community learning — explore how air pollution,
              extreme weather, and atmospheric conditions affect health in your
              community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/explore"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-nasa-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Explore Air Quality Data
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/modules"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Start a Learning Module
              </Link>
            </div>
          </div>

          {/* Data highlight cards floating on right */}
          <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 space-y-4 w-72">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <div className="text-sm font-medium text-white/80">TEMPO — Hourly Observations</div>
              <div className="text-2xl font-bold text-white mt-1">NO₂ Across North America</div>
              <div className="text-xs text-white/60 mt-2">Updated every hour during daytime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <div className="text-sm font-medium text-white/80">MAIA — PM2.5 Mapping</div>
              <div className="text-2xl font-bold text-white mt-1">Aerosols at Community Scale</div>
              <div className="text-xs text-white/60 mt-2">Connecting satellites to local health</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="bg-white">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full -mt-1" aria-hidden="true">
          <path
            d="M0 60V30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0Z"
            className="fill-[#0B3D91] opacity-5"
          />
        </svg>
      </div>
    </section>
  );
}

function MissionSpotlightSection() {
  const spotlightMissions = missions.filter((m) => m.id === "maia" || m.id === "tempo");

  return (
    <section className="py-16 bg-white" aria-labelledby="missions-heading">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="missions-heading" className="text-3xl font-bold text-breathe-dark" style={{ fontFamily: "var(--font-display)" }}>
            Powered by NASA Missions
          </h2>
          <p className="mt-3 text-breathe-gray max-w-2xl mx-auto">
            BREATHE brings observations from cutting-edge NASA satellite missions
            into classrooms and communities. Two missions are at the center of our work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {spotlightMissions.map((mission) => (
            <div
              key={mission.id}
              className="breathe-card bg-white rounded-2xl border border-breathe-border p-8 hover:border-breathe-sky"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-breathe-sky-light text-nasa-blue rounded-full mb-2">
                    {mission.status}
                  </span>
                  <h3 className="text-2xl font-bold text-nasa-blue" style={{ fontFamily: "var(--font-display)" }}>
                    {mission.name}
                  </h3>
                  <p className="text-sm text-breathe-gray">{mission.fullName}</p>
                </div>
                <div className="w-16 h-16 rounded-xl breathe-gradient flex items-center justify-center flex-shrink-0">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                </div>
              </div>
              <p className="text-breathe-dark leading-relaxed mb-4">{mission.description}</p>
              <p className="text-sm text-breathe-gray italic mb-4">{mission.relevance}</p>
              <div className="border-t border-breathe-border pt-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-breathe-gray mb-2">
                  Key Data Products for BREATHE
                </h4>
                <div className="flex flex-wrap gap-2">
                  {mission.dataProducts.map((dp) => (
                    <span
                      key={dp}
                      className="px-2 py-1 text-xs bg-breathe-sky-light text-nasa-blue rounded-md"
                    >
                      {dp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional missions row */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {missions
            .filter((m) => m.id !== "maia" && m.id !== "tempo")
            .map((mission) => (
              <div key={mission.id} className="breathe-card bg-breathe-light rounded-xl p-4 border border-breathe-border">
                <h4 className="font-semibold text-nasa-blue">{mission.name}</h4>
                <p className="text-xs text-breathe-gray mt-1">{mission.fullName}</p>
                <p className="text-sm text-breathe-dark mt-2 line-clamp-2">{mission.relevance.substring(0, 100)}...</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

function EngagementLadderSection() {
  const levels = Object.entries(engagementLevels);

  return (
    <section className="py-16 breathe-gradient-subtle" aria-labelledby="engagement-heading">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="engagement-heading" className="text-3xl font-bold text-breathe-dark" style={{ fontFamily: "var(--font-display)" }}>
            Your Path from Curiosity to Contribution
          </h2>
          <p className="mt-3 text-breathe-gray max-w-2xl mx-auto">
            BREATHE moves you from awareness to action through a progression of
            increasingly hands-on experiences with real NASA science.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {levels.map(([key, level], index) => (
            <div key={key} className="relative">
              {index < levels.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
              <div className="bg-white rounded-xl p-6 border border-breathe-border h-full">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-lg"
                  style={{ backgroundColor: level.color }}
                >
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg text-breathe-dark mb-2">{level.label}</h3>
                <p className="text-sm text-breathe-gray leading-relaxed">{level.description}</p>
                <div className="mt-4 pt-4 border-t border-breathe-border">
                  <p className="text-xs text-breathe-gray">
                    {learningModules.filter((m) => m.engagementLevel === key).length} modules available
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedModulesSection() {
  const featured = learningModules.filter((m) => m.status === "available").slice(0, 3);

  return (
    <section className="py-16 bg-white" aria-labelledby="modules-heading">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 id="modules-heading" className="text-3xl font-bold text-breathe-dark" style={{ fontFamily: "var(--font-display)" }}>
              Start a Learning Module
            </h2>
            <p className="mt-3 text-breathe-gray max-w-xl">
              Guided, interactive experiences that use real NASA data to
              explore air quality, atmospheric science, and environmental health.
            </p>
          </div>
          <Link
            href="/modules"
            className="mt-4 md:mt-0 text-nasa-blue font-medium hover:underline whitespace-nowrap"
          >
            View all modules →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((module) => {
            const level = engagementLevels[module.engagementLevel];
            return (
              <Link
                key={module.id}
                href={`/modules#${module.id}`}
                className="breathe-card bg-white rounded-xl border border-breathe-border overflow-hidden group"
              >
                {/* Color bar for engagement level */}
                <div className="h-1.5" style={{ backgroundColor: level.color }} />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="px-2 py-0.5 text-xs font-medium rounded-full text-white"
                      style={{ backgroundColor: level.color }}
                    >
                      {level.label}
                    </span>
                    <span className="text-xs text-breathe-gray">{module.gradeLevel}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-breathe-dark group-hover:text-nasa-blue transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-sm text-breathe-gray mt-1 mb-3">{module.subtitle}</p>
                  <p className="text-sm text-breathe-dark leading-relaxed line-clamp-3">
                    {module.description}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-breathe-gray">
                    <span>⏱ {module.duration}</span>
                    <span>📡 {module.nasaAssets.length} NASA datasets</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DataExplorerPreview() {
  return (
    <section className="py-16 bg-breathe-dark text-white" aria-labelledby="explorer-heading">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-breathe-sky/20 text-breathe-sky text-sm font-medium rounded-full mb-4">
              Interactive Tool
            </span>
            <h2 id="explorer-heading" className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              Explore Air Quality in
              <br />
              <span className="text-breathe-atmosphere">Your Community</span>
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed max-w-lg">
              Use our map-based data explorer to visualize NASA satellite
              observations of air pollution, particulate matter, and atmospheric
              conditions in your area. Compare neighborhoods, track pollution
              events, and see how satellite data connects to local health.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "View TEMPO hourly NO₂ and ozone data",
                "Explore MAIA PM2.5 concentration maps",
                "Compare your community to regional averages",
                "Track wildfire smoke and dust events",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                  <svg className="w-5 h-5 text-breathe-atmosphere flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/explore"
              className="inline-flex items-center mt-8 px-6 py-3 bg-breathe-sky text-white font-semibold rounded-lg hover:bg-breathe-sky/90 transition-colors"
            >
              Open Data Explorer
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Map preview placeholder */}
          <div className="relative">
            <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden aspect-[4/3]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-4 text-breathe-sky/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="text-gray-500 text-sm">Interactive Map — NASA Air Quality Data</p>
                  <p className="text-gray-600 text-xs mt-1">TEMPO NO₂ • MAIA PM2.5 • Fire & Smoke</p>
                </div>
              </div>
              {/* Decorative data layer hints */}
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="px-2 py-1 bg-breathe-sky/20 text-breathe-sky text-xs rounded border border-breathe-sky/30">
                  TEMPO NO₂
                </div>
                <div className="px-2 py-1 bg-breathe-atmosphere/20 text-breathe-atmosphere text-xs rounded border border-breathe-atmosphere/30">
                  MAIA PM2.5
                </div>
              </div>
              <div className="absolute bottom-4 right-4">
                <div className="px-2 py-1 bg-black/50 text-gray-400 text-xs rounded">
                  Zoom in to explore →
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RegionalStoriesSection() {
  const activeStudies = regionalCaseStudies.filter((r) => r.phase === "year1");

  return (
    <section className="py-16 bg-white" aria-labelledby="stories-heading">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="stories-heading" className="text-3xl font-bold text-breathe-dark" style={{ fontFamily: "var(--font-display)" }}>
            Data Stories from Your Region
          </h2>
          <p className="mt-3 text-breathe-gray max-w-2xl mx-auto">
            Every community has its own atmospheric story. BREATHE uses NASA data
            to investigate real environmental health challenges in specific regions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {activeStudies.map((study) => (
            <Link
              key={study.id}
              href={`/data-stories#${study.id}`}
              className="breathe-card bg-white rounded-xl border border-breathe-border overflow-hidden group"
            >
              {/* Region header with gradient */}
              <div className="breathe-gradient px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-white/70 uppercase tracking-wider">Year 1 Pilot</span>
                    <h3 className="text-xl font-bold text-white mt-1">{study.region}</h3>
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-breathe-dark group-hover:text-nasa-blue transition-colors mb-2">
                  {study.title}
                </h4>
                <p className="text-sm text-breathe-gray leading-relaxed mb-4">
                  {study.description}
                </p>
                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-breathe-gray mb-2">
                    Environmental Challenges
                  </h5>
                  <div className="flex flex-wrap gap-1">
                    {study.environmentalChallenges.slice(0, 3).map((c) => (
                      <span key={c} className="px-2 py-0.5 text-xs bg-breathe-health-light text-breathe-health rounded-full">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-breathe-gray mb-2">
                    NASA Data Used
                  </h5>
                  <div className="flex flex-wrap gap-1">
                    {study.nasaDataUsed.map((d) => (
                      <span key={d} className="px-2 py-0.5 text-xs bg-breathe-sky-light text-nasa-blue rounded-full">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/data-stories" className="text-nasa-blue font-medium hover:underline">
            See all regional case studies →
          </Link>
        </div>
      </div>
    </section>
  );
}

function CitizenScienceSection() {
  return (
    <section className="py-16 breathe-gradient-subtle" aria-labelledby="citizen-heading">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-breathe-health-light text-breathe-health text-sm font-medium rounded-full mb-4">
              Citizen Science
            </span>
            <h2 id="citizen-heading" className="text-3xl font-bold text-breathe-dark" style={{ fontFamily: "var(--font-display)" }}>
              Your Observations
              <br />
              Matter to Science
            </h2>
            <p className="mt-4 text-breathe-gray leading-relaxed">
              Join the BREATHE citizen science community to collect atmospheric
              measurements, build low-cost air quality monitors, and contribute
              local observations that complement NASA satellite data. Every
              observation helps scientists understand air quality at the
              community scale.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  title: "Submit Observations",
                  desc: "Record sky conditions, visibility, and local air quality observations using our mobile-friendly tools.",
                },
                {
                  title: "Build a Monitor",
                  desc: "Follow step-by-step guides to build and deploy low-cost PM2.5 sensors in your community.",
                },
                {
                  title: "Validate Satellite Data",
                  desc: "Compare your ground measurements with NASA satellite observations and contribute to data validation.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-breathe-health-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-breathe-health" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-breathe-dark">{item.title}</h3>
                    <p className="text-sm text-breathe-gray mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/citizen-science"
              className="inline-flex items-center mt-8 px-6 py-3 bg-breathe-health text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Join Citizen Science
            </Link>
          </div>

          {/* Citizen science visual */}
          <div className="bg-white rounded-2xl border border-breathe-border p-8">
            <h3 className="font-semibold text-breathe-dark mb-6">How It Works</h3>
            <div className="space-y-6">
              {[
                { step: "1", label: "Choose Your Activity", desc: "Sky observation, sensor build, or data collection" },
                { step: "2", label: "Follow the Protocol", desc: "Step-by-step guidance with NASA citizen science standards" },
                { step: "3", label: "Record & Submit", desc: "Enter your data using our mobile-friendly submission form" },
                { step: "4", label: "See Your Impact", desc: "Watch your contribution appear on our community data map" },
              ].map((s, i) => (
                <div key={s.step} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-breathe-health text-white flex items-center justify-center font-bold flex-shrink-0">
                    {s.step}
                  </div>
                  <div className={i < 3 ? "pb-4 border-b border-breathe-border flex-1" : "flex-1"}>
                    <h4 className="font-medium text-breathe-dark">{s.label}</h4>
                    <p className="text-sm text-breathe-gray mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudiencePathways() {
  const pathways = [
    {
      audience: "Students",
      description: "Explore guided modules that use real NASA satellite data to investigate air quality and health in your community.",
      cta: "Start Learning",
      href: "/modules",
      color: "#1B98E0",
    },
    {
      audience: "Educators",
      description: "Access classroom-ready lesson plans, data activities, and professional development aligned with NGSS standards.",
      cta: "Educator Hub",
      href: "/educator-hub",
      color: "#4ECDC4",
    },
    {
      audience: "Community Members",
      description: "Discover how NASA observations reveal air quality patterns in your neighborhood. Join workshops and citizen science.",
      cta: "Explore Your Area",
      href: "/explore",
      color: "#F39C12",
    },
    {
      audience: "Partners & Organizations",
      description: "Find collaboration opportunities, workshop toolkits, and resources to bring BREATHE to your community.",
      cta: "Partner With Us",
      href: "/partners",
      color: "#2ECC71",
    },
  ];

  return (
    <section className="py-16 bg-white" aria-labelledby="pathways-heading">
      <div className="max-w-7xl mx-auto px-4">
        <h2 id="pathways-heading" className="text-3xl font-bold text-breathe-dark text-center mb-10" style={{ fontFamily: "var(--font-display)" }}>
          Find Your Path
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathways.map((p) => (
            <Link
              key={p.audience}
              href={p.href}
              className="breathe-card bg-white rounded-xl border border-breathe-border p-6 group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${p.color}15` }}>
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: p.color }} />
              </div>
              <h3 className="font-semibold text-lg text-breathe-dark group-hover:text-nasa-blue transition-colors">
                {p.audience}
              </h3>
              <p className="text-sm text-breathe-gray mt-2 leading-relaxed">{p.description}</p>
              <span className="inline-block mt-4 text-sm font-medium" style={{ color: p.color }}>
                {p.cta} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerTrustSection() {
  return (
    <section className="py-12 bg-breathe-light border-y border-breathe-border">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-breathe-gray mb-6 uppercase tracking-wider font-medium">
          A NASA Science Activation Project — Supported by Leading Partners
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {["NASA SMD", "MAIA Mission", "TEMPO Mission", "NASA Earthdata", "University Partners", "Community Organizations"].map(
            (partner) => (
              <div key={partner} className="text-sm font-medium text-breathe-dark">
                {partner}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function NewsPreviewSection() {
  const newsItems = [
    {
      date: "March 2026",
      title: "BREATHE Year 1 Pilot Launches in Houston and the Rio Grande Valley",
      description: "Initial community partnerships established with Houston ISD and border region schools.",
    },
    {
      date: "February 2026",
      title: "New TEMPO Data Products Available for Education",
      description: "Hourly NO₂ data now integrated into BREATHE learning modules for classroom use.",
    },
    {
      date: "January 2026",
      title: "MAIA PM2.5 Products Released for Target Areas",
      description: "First MAIA-derived particulate matter maps available for BREATHE pilot regions.",
    },
  ];

  return (
    <section className="py-16 bg-white" aria-labelledby="news-heading">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 id="news-heading" className="text-2xl font-bold text-breathe-dark" style={{ fontFamily: "var(--font-display)" }}>
            Latest Updates
          </h2>
          <Link href="/news" className="text-nasa-blue font-medium text-sm hover:underline">
            All news →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <article key={item.title} className="breathe-card bg-breathe-light rounded-xl p-6">
              <time className="text-xs text-breathe-gray">{item.date}</time>
              <h3 className="font-semibold text-breathe-dark mt-2">{item.title}</h3>
              <p className="text-sm text-breathe-gray mt-2 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSpotlightSection />
      <EngagementLadderSection />
      <FeaturedModulesSection />
      <DataExplorerPreview />
      <RegionalStoriesSection />
      <CitizenScienceSection />
      <AudiencePathways />
      <PartnerTrustSection />
      <NewsPreviewSection />
    </>
  );
}
