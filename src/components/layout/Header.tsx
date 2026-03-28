"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  {
    label: "Explore Data",
    href: "/explore",
    description: "Interactive NASA air quality and health data",
  },
  {
    label: "Learning Modules",
    href: "/modules",
    description: "Guided STEM learning with NASA data",
  },
  {
    label: "Citizen Science",
    href: "/citizen-science",
    description: "Contribute community observations",
  },
  {
    label: "Educator Hub",
    href: "/educator-hub",
    description: "Resources for teachers and trainers",
  },
  {
    label: "Data Stories",
    href: "/data-stories",
    description: "Regional case studies and investigations",
  },
  {
    label: "Partners",
    href: "/partners",
    description: "Community and organizational partnerships",
  },
];

const secondaryNav = [
  { label: "Workshops", href: "/workshops" },
  { label: "Resources", href: "/resources" },
  { label: "News", href: "/news" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Skip to content */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* NASA Trust Bar */}
      <div className="nasa-trust-bar text-center tracking-wide">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2">
          <span className="font-semibold">NASA</span>
          <span className="opacity-75">|</span>
          <span>Science Activation Program</span>
          <span className="opacity-75">|</span>
          <span>Earth Science Division</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-breathe-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg breathe-gradient flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10" strokeDasharray="4 2" />
                  <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-nasa-blue text-lg leading-tight block" style={{ fontFamily: "var(--font-display)" }}>
                  BREATHE
                </span>
                <span className="text-xs text-breathe-gray leading-tight block">
                  NASA Science Activation
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-breathe-dark hover:text-nasa-blue hover:bg-breathe-sky-light rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Secondary nav + CTA */}
            <div className="hidden lg:flex items-center gap-3">
              {secondaryNav.slice(0, 2).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-breathe-gray hover:text-nasa-blue transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/about"
                className="text-sm text-breathe-gray hover:text-nasa-blue transition-colors"
              >
                About
              </Link>
              <Link
                href="/modules"
                className="ml-2 px-4 py-2 bg-nasa-blue text-white text-sm font-medium rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Start Learning
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-breathe-sky-light transition-colors"
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-breathe-border bg-white">
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-3 rounded-lg hover:bg-breathe-sky-light transition-colors"
                >
                  <span className="font-medium text-breathe-dark block">{item.label}</span>
                  <span className="text-sm text-breathe-gray">{item.description}</span>
                </Link>
              ))}
              <hr className="my-3 border-breathe-border" />
              {secondaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm text-breathe-gray hover:text-nasa-blue transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/modules"
                onClick={() => setMobileOpen(false)}
                className="block mt-3 px-4 py-3 bg-nasa-blue text-white text-center font-medium rounded-lg"
              >
                Start Learning
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
