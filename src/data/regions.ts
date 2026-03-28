export interface RegionalCaseStudy {
  id: string;
  title: string;
  region: string;
  coordinates: [number, number];
  description: string;
  environmentalChallenges: string[];
  nasaDataUsed: string[];
  communityPartners: string[];
  phase: "year1" | "year2-3" | "year4-5";
  status: "active" | "planned";
}

export const regionalCaseStudies: RegionalCaseStudy[] = [
  {
    id: "houston-industrial",
    title: "Houston Ship Channel: Industrial Emissions and Community Health",
    region: "Houston, TX",
    coordinates: [29.7604, -95.3698],
    description:
      "Houston's Ship Channel corridor is one of the largest petrochemical complexes in the world. Communities living near these facilities face elevated exposures to multiple air pollutants. BREATHE uses TEMPO and MAIA data to help residents visualize and understand pollution patterns in their neighborhoods.",
    environmentalChallenges: [
      "Petrochemical facility emissions",
      "Elevated PM2.5 and NO₂ concentrations",
      "Ozone exceedances",
      "Environmental justice concerns",
      "Hurricane-related chemical releases",
    ],
    nasaDataUsed: ["TEMPO hourly NO₂", "MAIA PM2.5", "MODIS aerosol optical depth"],
    communityPartners: ["Houston Independent School District", "Houston Health Department", "Community organizations"],
    phase: "year1",
    status: "active",
  },
  {
    id: "border-region",
    title: "U.S.–Mexico Border: Cross-Border Air Quality and Dust Events",
    region: "Rio Grande Valley, TX",
    coordinates: [26.2034, -98.2300],
    description:
      "The U.S.–Mexico border region faces unique atmospheric challenges including transboundary pollution, agricultural dust, and limited air quality monitoring infrastructure. BREATHE engages border communities in understanding how NASA satellite observations can fill monitoring gaps.",
    environmentalChallenges: [
      "Transboundary air pollution",
      "Agricultural dust and particulate matter",
      "Limited ground-based monitoring",
      "Extreme heat events",
      "Environmental health disparities",
    ],
    nasaDataUsed: ["MAIA PM2.5 and PM10", "MODIS dust detection", "VIIRS aerosol products"],
    communityPartners: ["Border school districts", "Community health centers", "University partners"],
    phase: "year1",
    status: "active",
  },
  {
    id: "dallas-fort-worth",
    title: "Dallas–Fort Worth: Urban Ozone and Transportation Emissions",
    region: "Dallas–Fort Worth, TX",
    coordinates: [32.7767, -96.7970],
    description:
      "The DFW metroplex frequently exceeds federal ozone standards. BREATHE uses TEMPO's hourly measurements to help students and educators investigate how transportation patterns, industrial activity, and meteorology combine to create ozone episodes.",
    environmentalChallenges: [
      "Ozone non-attainment",
      "Transportation-related emissions",
      "Urban heat island effects",
      "Rapid population growth",
    ],
    nasaDataUsed: ["TEMPO ozone and NO₂", "MODIS land surface temperature", "Landsat urban mapping"],
    communityPartners: ["Dallas ISD", "Regional air quality agencies", "Community colleges"],
    phase: "year2-3",
    status: "planned",
  },
  {
    id: "san-antonio",
    title: "San Antonio: Military Communities and Environmental Exposure",
    region: "San Antonio, TX",
    coordinates: [29.4241, -98.4936],
    description:
      "San Antonio's military bases and surrounding communities provide a context for examining how land use, transportation, and industrial activities affect local air quality. BREATHE engages military-connected families in atmospheric science learning.",
    environmentalChallenges: [
      "Military installation emissions",
      "Urban growth and transportation",
      "Cedar pollen and natural aerosols",
      "Extreme heat exposure",
    ],
    nasaDataUsed: ["TEMPO hourly data", "MAIA aerosol products", "MODIS vegetation and fire"],
    communityPartners: ["Military-connected schools", "Alamo Colleges District", "Local health organizations"],
    phase: "year2-3",
    status: "planned",
  },
  {
    id: "california-wildfires",
    title: "California: Wildfire Smoke and Respiratory Health",
    region: "California",
    coordinates: [36.7783, -119.4179],
    description:
      "California's wildfire seasons produce massive smoke plumes that affect air quality across the western United States. BREATHE helps communities understand how NASA tracks smoke transport and predicts air quality impacts on health.",
    environmentalChallenges: [
      "Wildfire smoke episodes",
      "Agricultural burning",
      "Valley inversions and trapped pollution",
      "Compound heat-smoke events",
    ],
    nasaDataUsed: ["MODIS/VIIRS fire and smoke", "TEMPO pollution monitoring", "MAIA PM2.5"],
    communityPartners: ["California education networks", "Public health departments", "Tribal communities"],
    phase: "year4-5",
    status: "planned",
  },
];

export const phaseInfo = {
  "year1": {
    label: "Year 1 — Texas Pilot",
    description: "Houston and U.S.–Mexico border region pilot communities",
    color: "#FC3D21",
  },
  "year2-3": {
    label: "Years 2–3 — Texas Expansion",
    description: "Expanding across Texas through school district, community college, and public health partnerships",
    color: "#F39C12",
  },
  "year4-5": {
    label: "Years 4–5 — National Expansion",
    description: "Scaling nationally across the contiguous U.S. through education networks and the online platform",
    color: "#2ECC71",
  },
};
