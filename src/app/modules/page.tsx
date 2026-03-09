"use client";

import { useState } from "react";
import Link from "next/link";
import { learningModules, engagementLevels } from "@/data/modules";
import type { LearningModule } from "@/data/modules";

export default function ModulesPage() {
  const [filterLevel, setFilterLevel] = useState<string>("all");
  const [filterGrade, setFilterGrade] = useState<string>("all");

  const filtered = learningModules.filter((m) => {
    if (filterLevel !== "all" && m.engagementLevel !== filterLevel) return false;
    if (filterGrade !== "all" && !m.gradeLevel.toLowerCase().includes(filterGrade)) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-breathe-light">
      {/* Hero */}
      <section className="breathe-gradient text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span>Learning Modules</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              Learning Modules
            </h1>
            <p className="mt-3 text-white/90 text-lg leading-relaxed">
              Guided, interactive STEM learning experiences that use real NASA
              satellite data to explore air quality, atmospheric science, and
              environmental health. Each module is designed for use in classrooms,
              community settings, or self-directed learning.
            </p>
          </div>

          {/* Engagement ladder mini-display */}
          <div className="mt-8 flex flex-wrap gap-3">
            {Object.entries(engagementLevels).map(([key, level]) => (
              <div
                key={key}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm"
              >
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: level.color }} />
                {level.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-xl border border-breathe-border p-4 mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-2">
            <label htmlFor="level-filter" className="text-sm font-medium text-breathe-gray">
              Engagement Level:
            </label>
            <select
              id="level-filter"
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value)}
              className="px-3 py-1.5 border border-breathe-border rounded-lg text-sm focus:outline-none focus:border-breathe-sky"
            >
              <option value="all">All Levels</option>
              {Object.entries(engagementLevels).map(([key, level]) => (
                <option key={key} value={key}>{level.label}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="grade-filter" className="text-sm font-medium text-breathe-gray">
              Grade Level:
            </label>
            <select
              id="grade-filter"
              value={filterGrade}
              onChange={(e) => setFilterGrade(e.target.value)}
              className="px-3 py-1.5 border border-breathe-border rounded-lg text-sm focus:outline-none focus:border-breathe-sky"
            >
              <option value="all">All Grades</option>
              <option value="6-8">Grades 6-8</option>
              <option value="8-12">Grades 8-12</option>
              <option value="9-12">Grades 9-12</option>
              <option value="community">Community / All Ages</option>
            </select>
          </div>
          <div className="sm:ml-auto text-sm text-breathe-gray">
            {filtered.length} module{filtered.length !== 1 ? "s" : ""} found
          </div>
        </div>

        {/* Module cards */}
        <div className="space-y-6">
          {filtered.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-breathe-gray">No modules match your filters. Try adjusting your selection.</p>
          </div>
        )}

        {/* Educator callout */}
        <div className="mt-12 bg-breathe-sky-light rounded-xl border border-breathe-sky/20 p-8">
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <h2 className="text-xl font-bold text-nasa-blue" style={{ fontFamily: "var(--font-display)" }}>
                Educator? Get Classroom-Ready Materials
              </h2>
              <p className="text-sm text-breathe-gray mt-2">
                Each module includes downloadable lesson plans, student handouts,
                assessment rubrics, and NGSS alignment guides. Visit the Educator
                Hub for additional professional development resources.
              </p>
            </div>
            <Link
              href="/educator-hub"
              className="inline-flex items-center px-6 py-3 bg-nasa-blue text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors whitespace-nowrap"
            >
              Educator Hub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModuleCard({ module }: { module: LearningModule }) {
  const level = engagementLevels[module.engagementLevel];
  const isComingSoon = module.status === "coming-soon";

  return (
    <article
      id={module.id}
      className={`breathe-card bg-white rounded-xl border border-breathe-border overflow-hidden ${isComingSoon ? "opacity-75" : ""}`}
    >
      <div className="h-1.5" style={{ backgroundColor: level.color }} />
      <div className="p-6 md:p-8">
        <div className="grid md:grid-cols-[1fr_280px] gap-6">
          {/* Main content */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span
                className="px-2.5 py-0.5 text-xs font-medium rounded-full text-white"
                style={{ backgroundColor: level.color }}
              >
                {level.label}
              </span>
              <span className="text-xs text-breathe-gray px-2 py-0.5 bg-breathe-light rounded-full">
                {module.gradeLevel}
              </span>
              <span className="text-xs text-breathe-gray px-2 py-0.5 bg-breathe-light rounded-full">
                ⏱ {module.duration}
              </span>
              {isComingSoon && (
                <span className="text-xs text-breathe-warm px-2 py-0.5 bg-orange-50 rounded-full font-medium">
                  Coming Soon
                </span>
              )}
            </div>
            <h2 className="text-xl font-bold text-breathe-dark" style={{ fontFamily: "var(--font-display)" }}>
              {module.title}
            </h2>
            <p className="text-sm text-breathe-gray mt-0.5">{module.subtitle}</p>
            <p className="text-sm text-breathe-dark leading-relaxed mt-3">{module.description}</p>

            <div className="mt-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-breathe-gray mb-2">
                Learning Objectives
              </h3>
              <ul className="space-y-1">
                {module.objectives.map((obj, i) => (
                  <li key={i} className="text-sm text-breathe-dark flex items-start gap-2">
                    <svg className="w-4 h-4 text-breathe-health mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {obj}
                  </li>
                ))}
              </ul>
            </div>

            {module.standards.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1">
                {module.standards.map((s) => (
                  <span key={s} className="text-xs px-2 py-0.5 bg-breathe-light text-breathe-gray rounded">
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar info */}
          <div className="space-y-4">
            <div className="bg-breathe-light rounded-lg p-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-breathe-gray mb-2">
                NASA Assets Used
              </h3>
              <ul className="space-y-1">
                {module.nasaAssets.map((asset) => (
                  <li key={asset} className="text-sm text-nasa-blue flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-breathe-sky rounded-full flex-shrink-0" />
                    {asset}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-breathe-light rounded-lg p-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-breathe-gray mb-2">
                Tags
              </h3>
              <div className="flex flex-wrap gap-1">
                {module.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-xs bg-white text-breathe-gray rounded-full border border-breathe-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {!isComingSoon && (
              <div className="space-y-2">
                <button className="w-full px-4 py-3 bg-nasa-blue text-white text-sm font-semibold rounded-lg hover:bg-opacity-90 transition-colors">
                  Start Module
                </button>
                <button className="w-full px-4 py-2.5 border border-breathe-border text-sm font-medium text-breathe-dark rounded-lg hover:bg-breathe-light transition-colors">
                  Download Lesson Plan
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
