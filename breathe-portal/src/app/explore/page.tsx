"use client";

import { useState } from "react";
import Link from "next/link";
import { missions, nasaDataTools } from "@/data/missions";

type DataLayer = "tempo-no2" | "maia-pm25" | "pace-aerosol" | "modis-aod" | "fires" | "lst";

const dataLayers: { id: DataLayer; label: string; mission: string; description: string; color: string }[] = [
  { id: "tempo-no2", label: "TEMPO NO₂", mission: "TEMPO", description: "Hourly nitrogen dioxide concentrations across North America", color: "#E74C3C" },
  { id: "maia-pm25", label: "MAIA PM2.5", mission: "MAIA", description: "Particulate matter concentration estimates at community scale", color: "#F39C12" },
  { id: "pace-aerosol", label: "PACE Aerosol Type", mission: "PACE", description: "Aerosol characterization distinguishing dust, smoke, and urban pollution", color: "#2980B9" },
  { id: "modis-aod", label: "Aerosol Optical Depth", mission: "MODIS/VIIRS", description: "Total column aerosol loading from polar-orbiting satellites", color: "#9B59B6" },
  { id: "fires", label: "Fire & Smoke", mission: "MODIS/VIIRS", description: "Active fire detections and smoke plume tracking", color: "#E67E22" },
  { id: "lst", label: "Land Surface Temperature", mission: "MODIS/VIIRS", description: "Surface temperature for heat island and exposure analysis", color: "#1ABC9C" },
];

const presetViews = [
  { label: "Houston Ship Channel", lat: 29.74, lon: -95.27, zoom: 12 },
  { label: "Rio Grande Valley", lat: 26.20, lon: -98.23, zoom: 10 },
  { label: "Dallas–Fort Worth", lat: 32.78, lon: -96.80, zoom: 11 },
  { label: "Los Angeles Basin", lat: 34.05, lon: -118.24, zoom: 10 },
  { label: "San Joaquin Valley", lat: 36.78, lon: -119.42, zoom: 9 },
];

export default function ExplorePage() {
  const [activeLayers, setActiveLayers] = useState<Set<DataLayer>>(new Set(["tempo-no2"]));
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const toggleLayer = (id: DataLayer) => {
    setActiveLayers((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-breathe-light">
      {/* Hero */}
      <section className="bg-breathe-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-breathe-sky">Explore NASA Data</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Explore NASA Air Quality &amp; Health Data
          </h1>
          <p className="mt-3 text-gray-300 max-w-2xl">
            Visualize satellite observations of air pollution, particulate matter,
            and atmospheric conditions. Select data layers, zoom to your community,
            and investigate environmental exposure patterns.
          </p>
        </div>
      </section>

      {/* Main explorer layout */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[300px_1fr] gap-6">
          {/* Sidebar controls */}
          <aside className="space-y-6">
            {/* Data Layers */}
            <div className="bg-white rounded-xl border border-breathe-border p-5">
              <h2 className="font-semibold text-breathe-dark mb-4">Data Layers</h2>
              <div className="space-y-3">
                {dataLayers.map((layer) => (
                  <button
                    key={layer.id}
                    onClick={() => toggleLayer(layer.id)}
                    className={`w-full text-left p-3 rounded-lg border transition-colors ${
                      activeLayers.has(layer.id)
                        ? "border-breathe-sky bg-breathe-sky-light"
                        : "border-breathe-border hover:border-breathe-sky/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-sm flex-shrink-0"
                        style={{ backgroundColor: layer.color, opacity: activeLayers.has(layer.id) ? 1 : 0.3 }}
                      />
                      <div>
                        <div className="text-sm font-medium text-breathe-dark">{layer.label}</div>
                        <div className="text-xs text-breathe-gray">{layer.mission}</div>
                      </div>
                    </div>
                    <p className="text-xs text-breathe-gray mt-1.5 ml-7">{layer.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick locations */}
            <div className="bg-white rounded-xl border border-breathe-border p-5">
              <h2 className="font-semibold text-breathe-dark mb-4">Quick Views</h2>
              <p className="text-xs text-breathe-gray mb-3">Jump to a BREATHE focus region</p>
              <div className="space-y-2">
                {presetViews.map((view) => (
                  <button
                    key={view.label}
                    onClick={() => setSelectedLocation(view.label)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedLocation === view.label
                        ? "bg-breathe-sky-light text-nasa-blue font-medium"
                        : "hover:bg-breathe-light text-breathe-dark"
                    }`}
                  >
                    📍 {view.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Legend placeholder */}
            <div className="bg-white rounded-xl border border-breathe-border p-5">
              <h2 className="font-semibold text-breathe-dark mb-3">Understanding the Data</h2>
              <p className="text-xs text-breathe-gray leading-relaxed">
                These data layers show observations from NASA satellite instruments.
                Colors indicate concentration levels — warmer colors mean higher
                pollution. Click any location on the map to see specific values
                and learn what they mean for health.
              </p>
              <Link href="/modules#what-is-air-quality" className="text-xs text-nasa-blue hover:underline mt-2 block">
                Learn more about air quality data →
              </Link>
            </div>
          </aside>

          {/* Map area */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-breathe-border overflow-hidden">
              {/* Map toolbar */}
              <div className="border-b border-breathe-border px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-breathe-dark">
                    {activeLayers.size} layer{activeLayers.size !== 1 ? "s" : ""} active
                  </span>
                  {selectedLocation && (
                    <span className="text-sm text-breathe-gray">
                      Viewing: <span className="text-nasa-blue font-medium">{selectedLocation}</span>
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 text-xs border border-breathe-border rounded-lg hover:bg-breathe-light transition-colors">
                    Compare Mode
                  </button>
                  <button className="px-3 py-1.5 text-xs border border-breathe-border rounded-lg hover:bg-breathe-light transition-colors">
                    Time Slider
                  </button>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="aspect-[16/9] bg-gradient-to-br from-breathe-sky/5 to-breathe-atmosphere/5 flex items-center justify-center relative">
                <div className="text-center px-8">
                  <svg className="w-20 h-20 mx-auto mb-4 text-breathe-sky/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <h3 className="text-xl font-semibold text-breathe-dark mb-2">Interactive Data Map</h3>
                  <p className="text-breathe-gray max-w-md mx-auto text-sm">
                    This interactive map will display NASA satellite data layers including
                    TEMPO NO₂, MAIA PM2.5, PACE aerosol type, aerosol optical depth, fire detections, and
                    land surface temperature. Users can zoom, pan, click for data values,
                    and compare locations.
                  </p>
                  <p className="text-xs text-breathe-gray mt-4">
                    Active layers: {Array.from(activeLayers).map(id => dataLayers.find(l => l.id === id)?.label).join(", ")}
                  </p>
                </div>

                {/* Decorative overlays */}
                <div className="absolute top-4 left-4 space-y-2">
                  {Array.from(activeLayers).map((id) => {
                    const layer = dataLayers.find((l) => l.id === id);
                    return layer ? (
                      <div key={id} className="flex items-center gap-2 px-2 py-1 bg-white/90 rounded shadow-sm text-xs">
                        <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: layer.color }} />
                        <span>{layer.label}</span>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            </div>

            {/* Data context cards */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl border border-breathe-border p-5">
                <h3 className="font-semibold text-breathe-dark text-sm mb-2">What Am I Seeing?</h3>
                <p className="text-xs text-breathe-gray leading-relaxed">
                  Satellite instruments measure the composition of the atmosphere
                  by analyzing sunlight reflected from and absorbed by the Earth.
                  Different pollutants absorb different wavelengths, allowing
                  satellites to map pollution concentrations from orbit.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-breathe-border p-5">
                <h3 className="font-semibold text-breathe-dark text-sm mb-2">Health Context</h3>
                <p className="text-xs text-breathe-gray leading-relaxed">
                  Air pollutants like PM2.5 and NO₂ are associated with
                  respiratory and cardiovascular health effects. The EPA sets
                  National Ambient Air Quality Standards (NAAQS) to protect
                  public health. BREATHE helps you understand these levels.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-breathe-border p-5">
                <h3 className="font-semibold text-breathe-dark text-sm mb-2">Want to Go Deeper?</h3>
                <p className="text-xs text-breathe-gray leading-relaxed mb-2">
                  Try one of our guided learning modules that use this same data
                  with step-by-step investigations and discussion questions.
                </p>
                <Link href="/modules" className="text-xs text-nasa-blue hover:underline">
                  Browse learning modules →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* NASA Data Tools Reference */}
        <section className="mt-12 bg-white rounded-xl border border-breathe-border p-8">
          <h2 className="text-xl font-bold text-breathe-dark mb-2" style={{ fontFamily: "var(--font-display)" }}>
            NASA Data Tools &amp; Resources
          </h2>
          <p className="text-sm text-breathe-gray mb-6">
            The BREATHE data explorer is built on NASA&apos;s open data ecosystem.
            Explore these tools for additional capabilities.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {nasaDataTools.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="breathe-card p-4 rounded-lg border border-breathe-border hover:border-breathe-sky"
              >
                <span className="text-xs text-breathe-gray uppercase tracking-wider">{tool.category}</span>
                <h3 className="font-semibold text-nasa-blue text-sm mt-1">{tool.name}</h3>
                <p className="text-xs text-breathe-gray mt-1">{tool.description}</p>
                <span className="text-xs text-breathe-sky mt-2 block">Visit ↗</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
