export interface Mission {
  id: string;
  name: string;
  fullName: string;
  description: string;
  relevance: string;
  dataProducts: string[];
  launchYear: string;
  status: string;
  url: string;
  imageAlt: string;
}

export const missions: Mission[] = [
  {
    id: "maia",
    name: "MAIA",
    fullName: "Multi-Angle Imager for Aerosols",
    description:
      "MAIA measures the abundance and properties of airborne particulate matter (PM) in the atmosphere. It provides data on PM2.5 and PM10 concentrations that are directly linked to respiratory and cardiovascular health outcomes.",
    relevance:
      "Central to BREATHE because it connects satellite-measured aerosol properties to particulate matter concentrations at community scales, enabling learners to see how NASA observations relate to the air they breathe.",
    dataProducts: [
      "PM2.5 concentration estimates",
      "PM10 concentration estimates",
      "Aerosol optical depth",
      "Aerosol size distribution",
      "Speciated PM composition",
    ],
    launchYear: "2024",
    status: "Active",
    url: "https://maia.jpl.nasa.gov/",
    imageAlt: "MAIA satellite instrument measuring aerosol particles in Earth's atmosphere",
  },
  {
    id: "tempo",
    name: "TEMPO",
    fullName: "Tropospheric Emissions: Monitoring of Pollution",
    description:
      "TEMPO is the first space-based instrument to monitor major air pollutants across North America on an hourly basis during daytime. It measures ozone, nitrogen dioxide, formaldehyde, and aerosols from a geostationary orbit.",
    relevance:
      "Central to BREATHE because hourly pollution measurements let learners track how air quality changes throughout the day in their communities, connecting atmospheric science to daily health decisions.",
    dataProducts: [
      "Tropospheric ozone",
      "Nitrogen dioxide (NO₂)",
      "Formaldehyde (HCHO)",
      "Aerosol optical depth",
      "UV-B irradiance",
    ],
    launchYear: "2023",
    status: "Active",
    url: "https://tempo.si.edu/",
    imageAlt: "TEMPO instrument monitoring air pollution across North America from geostationary orbit",
  },
  {
    id: "pace",
    name: "PACE",
    fullName: "Plankton, Aerosol, Cloud, ocean Ecosystem",
    description:
      "PACE carries advanced instruments including OCI, SPEXone, and HARP2 to provide hyperspectral ocean color and detailed aerosol characterization. It delivers unprecedented information about aerosol type, size, and light-absorption properties critical for understanding air quality and health impacts.",
    relevance:
      "Enhances BREATHE by providing detailed aerosol characterization — distinguishing dust, smoke, and urban pollution — so learners can understand not just how much particulate matter is present, but what kind it is and where it comes from.",
    dataProducts: [
      "Aerosol type and absorption properties",
      "UV aerosol index",
      "Fine-mode aerosol optical depth",
      "Cloud droplet properties",
      "Polarimetric aerosol retrievals",
    ],
    launchYear: "2024",
    status: "Active",
    url: "https://pace.gsfc.nasa.gov/",
    imageAlt: "PACE satellite observing ocean color and atmospheric aerosols from orbit",
  },
  {
    id: "modis",
    name: "MODIS",
    fullName: "Moderate Resolution Imaging Spectroradiometer",
    description:
      "MODIS aboard Terra and Aqua satellites provides global observations of land, ocean, and atmosphere. Its long data record supports tracking changes in aerosol loading, fire activity, and land surface conditions over decades.",
    relevance:
      "Provides long-term context for BREATHE learners to understand how atmospheric conditions and pollution events have changed over time in their regions.",
    dataProducts: [
      "Aerosol optical depth",
      "Fire and thermal anomalies",
      "Vegetation indices (NDVI)",
      "Land surface temperature",
      "Cloud properties",
    ],
    launchYear: "1999/2002",
    status: "Active",
    url: "https://modis.gsfc.nasa.gov/",
    imageAlt: "MODIS instruments on Terra and Aqua satellites observing Earth",
  },
  {
    id: "viirs",
    name: "VIIRS",
    fullName: "Visible Infrared Imaging Radiometer Suite",
    description:
      "VIIRS continues and extends the MODIS data record on Suomi NPP and NOAA-20 satellites. It provides daily global observations of aerosols, fires, vegetation, and surface properties relevant to environmental exposure assessment.",
    relevance:
      "Supports BREATHE with near-real-time observations of wildfire smoke, dust events, and other pollution episodes that affect community air quality and health.",
    dataProducts: [
      "Aerosol products",
      "Active fire detection",
      "Nighttime lights",
      "Vegetation health",
      "Sea surface temperature",
    ],
    launchYear: "2011",
    status: "Active",
    url: "https://www.nesdis.noaa.gov/current-satellite-missions/currently-flying/joint-polar-satellite-system/visible-infrared-imaging",
    imageAlt: "VIIRS instrument providing daily observations from polar orbit",
  },
];

export const nasaDataTools = [
  {
    name: "NASA Worldview",
    description: "Interactive browser for near-real-time satellite imagery",
    url: "https://worldview.earthdata.nasa.gov/",
    category: "Visualization",
  },
  {
    name: "NASA Earthdata",
    description: "Gateway to NASA Earth observation data products",
    url: "https://earthdata.nasa.gov/",
    category: "Data Access",
  },
  {
    name: "Giovanni",
    description: "Online tool for visualization and analysis of Earth science data",
    url: "https://giovanni.gsfc.nasa.gov/giovanni/",
    category: "Analysis",
  },
  {
    name: "FIRMS",
    description: "Fire Information for Resource Management System",
    url: "https://firms.modaps.eosdis.nasa.gov/",
    category: "Applications",
  },
  {
    name: "AirNow",
    description: "Real-time air quality observations and forecasts (EPA partnership)",
    url: "https://www.airnow.gov/",
    category: "Air Quality",
  },
];
