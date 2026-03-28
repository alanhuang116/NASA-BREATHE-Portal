export interface LearningModule {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  gradeLevel: string;
  duration: string;
  nasaAssets: string[];
  objectives: string[];
  engagementLevel: "awareness" | "learning" | "experience" | "contribution";
  tags: string[];
  status: "available" | "coming-soon" | "in-development";
  standards: string[];
}

export const learningModules: LearningModule[] = [
  {
    id: "what-is-air-quality",
    title: "What's in the Air?",
    subtitle: "Introduction to Air Quality and NASA Observations",
    description:
      "Discover what air quality means, why it matters for health, and how NASA satellites like TEMPO and MAIA observe the atmosphere from space. Explore real satellite imagery and compare air quality across different communities.",
    gradeLevel: "Grades 6-8",
    duration: "45-60 minutes",
    nasaAssets: ["TEMPO NO₂ data", "NASA Worldview", "MAIA aerosol imagery"],
    objectives: [
      "Define key air pollutants (PM2.5, ozone, NO₂) and their health effects",
      "Explain how satellites measure atmospheric composition from orbit",
      "Use NASA Worldview to explore air quality data for a region of interest",
      "Compare air quality between two communities using satellite data",
    ],
    engagementLevel: "awareness",
    tags: ["air quality", "satellites", "health", "introductory"],
    status: "available",
    standards: ["NGSS MS-ESS3-3", "NGSS MS-ESS3-4"],
  },
  {
    id: "tempo-hourly-pollution",
    title: "Pollution Around the Clock",
    subtitle: "Tracking Hourly Air Quality Changes with TEMPO",
    description:
      "Use TEMPO's hourly pollution measurements to investigate how air quality changes throughout the day. Analyze NO₂ patterns related to traffic, industry, and weather, and connect these patterns to community health decisions.",
    gradeLevel: "Grades 8-12",
    duration: "60-90 minutes",
    nasaAssets: ["TEMPO hourly NO₂", "TEMPO formaldehyde", "TEMPO ozone"],
    objectives: [
      "Interpret hourly changes in nitrogen dioxide concentration from TEMPO data",
      "Identify sources of pollution that cause daily air quality variations",
      "Analyze how weather conditions affect pollutant concentrations",
      "Propose evidence-based recommendations for reducing pollution exposure",
    ],
    engagementLevel: "learning",
    tags: ["TEMPO", "NO₂", "daily patterns", "data analysis"],
    status: "available",
    standards: ["NGSS HS-ESS3-4", "NGSS HS-ESS3-6"],
  },
  {
    id: "maia-particulate-matter",
    title: "Particles That Matter",
    subtitle: "Understanding PM2.5 with MAIA Satellite Data",
    description:
      "Investigate how MAIA measures particulate matter from space and why PM2.5 is one of the most significant air pollutants for human health. Analyze MAIA data products to map PM concentrations and explore environmental justice dimensions.",
    gradeLevel: "Grades 9-12",
    duration: "90 minutes (2 class periods)",
    nasaAssets: ["MAIA PM2.5 estimates", "MAIA aerosol optical depth", "EPA AirNow ground data"],
    objectives: [
      "Explain how multi-angle imaging retrieves aerosol properties from space",
      "Interpret PM2.5 concentration maps from MAIA data",
      "Compare satellite-derived PM estimates with ground-based measurements",
      "Analyze spatial patterns of PM exposure across communities",
    ],
    engagementLevel: "experience",
    tags: ["MAIA", "PM2.5", "aerosols", "environmental justice"],
    status: "available",
    standards: ["NGSS HS-ESS2-4", "NGSS HS-ESS3-4", "NGSS HS-ESS3-6"],
  },
  {
    id: "wildfire-smoke-tracking",
    title: "Smoke Signals from Space",
    subtitle: "Tracking Wildfire Smoke with NASA Earth Observations",
    description:
      "Investigate how NASA tracks wildfire smoke across North America using multiple satellite instruments. Follow a real smoke event from ignition to community exposure, and learn how atmospheric transport models predict smoke movement.",
    gradeLevel: "Grades 7-12",
    duration: "60-90 minutes",
    nasaAssets: ["MODIS/VIIRS fire detection", "FIRMS", "NASA Worldview aerosol layers", "HRRR-Smoke"],
    objectives: [
      "Identify active fires using NASA FIRMS data",
      "Track smoke plume transport using satellite imagery time series",
      "Analyze the health impacts of wildfire smoke on downwind communities",
      "Evaluate how air quality forecasts can protect public health",
    ],
    engagementLevel: "learning",
    tags: ["wildfires", "smoke", "MODIS", "VIIRS", "extreme weather"],
    status: "available",
    standards: ["NGSS MS-ESS3-2", "NGSS HS-ESS3-1"],
  },
  {
    id: "community-air-monitoring",
    title: "Be a Community Air Monitor",
    subtitle: "Building and Deploying Low-Cost Air Quality Sensors",
    description:
      "Design, build, and deploy a low-cost air quality sensor in your community. Learn sensor science, data collection methods, and how to compare your ground-based measurements with NASA satellite observations to validate and contextualize your findings.",
    gradeLevel: "Grades 8-12 / Community",
    duration: "Multi-session project (4-6 hours total)",
    nasaAssets: ["MAIA PM2.5 data", "TEMPO NO₂ data", "NASA citizen science protocols"],
    objectives: [
      "Assemble and calibrate a low-cost particulate matter sensor",
      "Design a sampling strategy for community air quality monitoring",
      "Collect and quality-check air quality time series data",
      "Compare ground-based sensor data with satellite observations",
      "Communicate findings to community stakeholders",
    ],
    engagementLevel: "contribution",
    tags: ["citizen science", "sensors", "hands-on", "community"],
    status: "available",
    standards: ["NGSS HS-ESS3-4", "NGSS HS-ETS1-1", "NGSS HS-ETS1-3"],
  },
  {
    id: "heat-and-health",
    title: "Urban Heat and Health",
    subtitle: "Mapping Heat Exposure with NASA Land Surface Temperature Data",
    description:
      "Use NASA land surface temperature data to investigate urban heat islands and their health implications. Map heat exposure patterns in your community and identify vulnerable populations and areas.",
    gradeLevel: "Grades 9-12 / Community",
    duration: "90 minutes",
    nasaAssets: ["MODIS/VIIRS land surface temperature", "Landsat thermal", "SEDAC population data"],
    objectives: [
      "Explain the urban heat island effect using satellite thermal data",
      "Map land surface temperature variations across a metro area",
      "Identify relationships between heat exposure and land use",
      "Assess heat vulnerability in different neighborhoods",
    ],
    engagementLevel: "experience",
    tags: ["heat", "urban", "health", "environmental justice", "LST"],
    status: "coming-soon",
    standards: ["NGSS HS-ESS3-3", "NGSS HS-ESS3-4"],
  },
];

export const engagementLevels = {
  awareness: {
    label: "Awareness",
    description: "Discover how NASA observes the atmosphere and why air quality matters for health",
    color: "#1B98E0",
    icon: "eye",
  },
  learning: {
    label: "Learning",
    description: "Build understanding of atmospheric science, satellite data, and environmental exposure",
    color: "#4ECDC4",
    icon: "book-open",
  },
  experience: {
    label: "Experience",
    description: "Work hands-on with real NASA data to investigate environmental health questions",
    color: "#F39C12",
    icon: "flask-conical",
  },
  contribution: {
    label: "Contribution",
    description: "Contribute observations, data, and community knowledge back to the scientific enterprise",
    color: "#2ECC71",
    icon: "hand-helping",
  },
};
