import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "BREATHE — NASA Science Activation | Air Quality, Atmosphere & Health Education",
  description:
    "BREATHE connects NASA Earth science with STEM education and community learning on air pollution, extreme weather, and human health. Explore satellite data, learning modules, and citizen science opportunities.",
  keywords: [
    "NASA", "air quality", "STEM education", "MAIA", "TEMPO", "PACE", "atmosphere",
    "environmental health", "citizen science", "satellite data", "Science Activation",
  ],
  openGraph: {
    title: "BREATHE — NASA Science Activation",
    description: "Bridging Education on Atmosphere, Technology, and Health",
    type: "website",
    siteName: "BREATHE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
