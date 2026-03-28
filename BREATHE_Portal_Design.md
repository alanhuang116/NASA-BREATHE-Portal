# BREATHE Portal Design Document

**BRidging Education on Atmosphere, Technology, and HEalth**
NASA Science Activation Program

**Document Version:** 1.0
**Date:** March 2026
**Purpose:** Comprehensive portal design specification for proposal planning and Year 1 development

---

## Table of Contents

- [A. Portal Vision](#a-portal-vision)
- [B. Primary User Groups](#b-primary-user-groups)
- [C. Information Architecture](#c-information-architecture)
- [D. Core User Flows](#d-core-user-flows)
- [E. Page-by-Page Design Concept](#e-page-by-page-design-concept)
- [F. Interactive Features](#f-interactive-features)
- [G. Learning and Engagement Model](#g-learning-and-engagement-model)
- [H. Evaluation-Ready Design](#h-evaluation-ready-design)
- [I. Content Strategy](#i-content-strategy)
- [J. Technical and Platform Recommendations](#j-technical-and-platform-recommendations)
- [K. Sustainability Strategy](#k-sustainability-strategy)
- [L. Visual Identity Direction](#l-visual-identity-direction)
- [M. Deliverables for Proposal Team](#m-deliverables-for-proposal-team)

---

## A. Portal Vision

### Design Vision Statement

The BREATHE portal is a public gateway connecting NASA Earth observation science with the lived experiences of communities facing air pollution, extreme weather, and environmental health challenges. It translates data from the MAIA and TEMPO satellite missions, combined with ground-level monitoring and citizen observations, into learning experiences, educator resources, community tools, and pathways for authentic scientific contribution. The portal is designed to serve a diverse public — from middle-school students in Houston classrooms to community health advocates along the Texas-Mexico border — making NASA science not only accessible but actionable in the places where it matters most.

The portal does not merely present information. It operationalizes the NASA Science Activation model by embedding learning progressions, contribution pathways, and partnership scaffolds directly into the user experience, enabling every visitor to move from awareness toward meaningful engagement with Earth science.

### Design Principles

The following principles govern every design and development decision. Each is rooted in NASA Science Activation priorities and the specific demands of the BREATHE project.

**1. Science Made Local**
Every data visualization, learning module, and case study anchors NASA satellite observations to specific communities, neighborhoods, and health outcomes. MAIA aerosol data and TEMPO air quality readings are presented not as abstract datasets but as information about the air people breathe in identifiable places. This principle ensures that NASA Earth science feels relevant to users who may not see themselves as part of the space science community. *(SciAct priority: broadening participation and relevance.)*

**2. Contribution Over Consumption**
The portal is designed around pathways that move users from viewing content to generating observations, submitting data, sharing stories, and co-creating knowledge. Citizen science workflows, student data collection activities, and community reporting tools are first-class features, not afterthoughts. This supports the SciAct emphasis on authentic STEM experiences and public contribution to NASA science. *(SciAct priority: enabling learners to experience the full process of science.)*

**3. Trusted, Not Simplified**
Content maintains scientific accuracy and credits NASA data sources, mission teams, and peer-reviewed research explicitly. The portal does not dilute science for accessibility; instead, it layers explanation so that users at different levels can engage with the same underlying data at appropriate depth. Visual and editorial design reinforces NASA institutional credibility while remaining warm and community-oriented. *(SciAct priority: leveraging unique NASA assets and expertise.)*

**4. Equity by Design**
Multilingual content (English and Spanish from Year 1), low-bandwidth compatibility, mobile-first field tools, WCAG 2.1 AA accessibility, and culturally responsive imagery and framing are structural requirements, not optional enhancements. The Texas pilot communities — including predominantly Latino border communities and environmentally overburdened neighborhoods in Houston — demand that equity be embedded in the technical architecture, not bolted on later. *(SciAct priority: reaching underserved and underrepresented communities.)*

**5. Built to Hand Off**
Every feature is designed for eventual maintenance by partners, educators, and community organizations with modest technical capacity. Content templates, partner-managed workflows, and modular architecture ensure that the portal can sustain impact beyond the five-year project period without requiring continuous developer support. *(SciAct priority: sustainability and lasting impact.)*

---

## B. Primary User Groups

### 1. K-12 Students (Grades 5-12, with emphasis on middle school)

**What they come to do:** Students arrive at the BREATHE portal primarily through classroom assignments or educator-directed activities. They come to explore interactive air quality maps centered on their own community, complete guided learning modules that connect satellite data to health and environment topics, participate in citizen science data collection using low-cost sensors or observational protocols, and see their own contributions reflected in real data displays. A middle-school student in Houston should be able to type in a zip code, see TEMPO-derived air quality information for that area, compare it with other regions, and understand what the data means for respiratory health — all within a single class period. Older students (grades 9-12) may engage with more complex data analysis tools and contribute to structured citizen science projects with publishable data quality standards.

**Key needs:** Age-appropriate language without condescension, visual-first interfaces, clear task structure, mobile compatibility for field activities, immediate feedback on contributions, connection to NGSS and Texas TEKS standards.

### 2. Educators (Formal K-12 Teachers and Pre-Service Teachers)

**What they come to do:** Teachers visit the portal to find standards-aligned lesson plans and learning modules they can integrate into existing science, health, or environmental studies curricula. They need downloadable and adaptable materials — not locked-in digital-only experiences. They come to register for BREATHE professional development workshops, access facilitator guides for running classroom citizen science activities, track student progress through modules (where classroom dashboards are available), and find background science content that builds their own confidence teaching air quality and remote sensing topics. A high school environmental science teacher in the Rio Grande Valley should be able to find a two-week unit on satellite-based air quality monitoring, download it, see which TEKS and NGSS standards it addresses, and access a facilitator video — all in under ten minutes.

**Key needs:** Standards alignment metadata, downloadable/printable formats, facilitator guides, editable materials, professional development registration, clear scope-and-sequence information, evidence of NASA credibility for administrator buy-in.

### 3. Community Members (General Public, Families, Local Residents)

**What they come to do:** Community members come to understand the air quality and environmental health conditions in their neighborhoods using NASA data presented in accessible, non-technical formats. They may arrive via a local news story, a community partner organization, or a BREATHE workshop. They want to see whether air quality in their area is improving or worsening, learn what causes poor air quality days, understand connections between air pollution and health (especially for children and elderly family members), and find community events or workshops where they can learn more. A parent in Houston's East End should be able to view a simple, map-based air quality summary for their neighborhood, read a plain-language explainer in English or Spanish, and sign up for a local BREATHE community workshop.

**Key needs:** Plain language (Flesch-Kincaid grade 8 or below for primary content), Spanish-language parity, mobile-friendly design, local relevance, clear connections to health and family well-being, no requirement for scientific background.

### 4. Citizen Science Participants

**What they come to do:** These users — who may also be students, community members, or educators — come specifically to contribute observational data to BREATHE research. They register for citizen science protocols, learn data collection procedures, submit observations (air quality readings from low-cost sensors, sky condition observations, symptom or exposure reports), view how their data appears alongside NASA satellite data, and track their contribution history. An engaged community member in Brownsville should be able to log in, follow a step-by-step protocol for a PurpleAir sensor reading, submit the observation with location and time metadata, and see it appear on a community data map within the same session.

**Key needs:** Clear protocols with visual instructions, mobile-optimized submission forms, offline-capable data entry for field conditions, confirmation and feedback on submissions, contribution tracking, data quality guidance, privacy protections for health-related observations.

### 5. Informal Learning Organizations (Museums, Libraries, After-School Programs, Community Centers)

**What they come to do:** Staff and educators at informal learning institutions come to find facilitated activity kits, exhibit-ready content, and workshop materials they can adapt for their venues and audiences. They need turn-key resources — activity guides, printable materials, presentation decks, and short videos — that they can deploy in a Saturday science program, a library maker event, or a museum gallery. They also come to register as BREATHE partner sites and access training for facilitating BREATHE activities.

**Key needs:** Downloadable facilitation kits with clear time/materials/audience specifications, adaptable formats, co-branding guidelines, partner registration, facilitator training videos, promotional materials for advertising BREATHE events to their communities.

### 6. Public Health and Community Partner Organizations

**What they come to do:** Public health departments, community health workers (promotoras), environmental justice organizations, and tribal health programs come to access BREATHE data and tools that support their own missions. They want community-level air quality data summaries they can use in health communications, environmental assessments, or advocacy. They come to find workshop materials for community health education, register as BREATHE delivery partners, access co-branded materials, and report on activities conducted under the BREATHE partnership. A promotora network in the Lower Rio Grande Valley should be able to download a bilingual presentation on air quality and asthma, report that they delivered it to 40 families, and see their organization listed in the BREATHE partner network.

**Key needs:** Co-brandable materials, data export in common formats (CSV, PDF reports), community-level data summaries, activity reporting tools, partnership agreements and MOUs, bilingual resources, health-literacy-appropriate content.

### 7. NASA Scientists and Subject Matter Experts (SMEs)

**What they come to do:** MAIA and TEMPO mission scientists, NASA Goddard and JPL researchers, and other SMEs come to the portal to review how their data is being presented to the public, contribute to content review and accuracy checks, view engagement and impact metrics, participate in "Ask a Scientist" features or recorded Q&A sessions, and see how citizen science contributions connect with satellite validation efforts. A TEMPO science team member should be able to view the latest data story published on the portal, verify the accuracy of the data presentation, and see metrics on how many educators and students engaged with TEMPO-related modules.

**Key needs:** Content review workflows, data accuracy verification tools, engagement dashboards, streamlined contribution pathways (e.g., recording a two-minute video explainer), recognition and attribution for their missions and work.

---

## C. Information Architecture

### Full Sitemap

The following sitemap defines the primary navigation structure and content organization. Each section is described with its purpose and the user groups it primarily serves.

---

#### 1. Home

**Purpose:** The homepage serves as the primary landing experience and orientation point. It communicates the BREATHE mission in under ten seconds, surfaces timely content (current air quality conditions, recent data stories, upcoming events), and provides clear pathways to the four primary user journeys: explore data, learn, contribute, and partner. It establishes NASA credibility and visual identity immediately.

**Primary audiences:** All user groups; first-time visitors especially.

---

#### 2. Explore NASA Air & Health Data

**Purpose:** This section is the portal's interactive data exploration hub. It houses the map-based data explorer, allowing users to view MAIA aerosol optical depth data, TEMPO tropospheric air quality readings (NO2, ozone, formaldehyde), EPA ground monitoring data, BREATHE citizen science observations, and community health indicators — all on a single, layered map interface. Users can search by location, toggle data layers, view time series, and compare communities. Guided "data tours" provide scaffolded entry points for users unfamiliar with geospatial data.

**Primary audiences:** Community members, students, educators, public health partners, citizen science participants.

**Sub-pages:**
- Interactive Map Explorer (main tool)
- Guided Data Tours (scaffolded walkthroughs for specific questions, e.g., "How is air quality near my school?")
- MAIA Mission Spotlight (what MAIA measures, how data gets from satellite to portal)
- TEMPO Mission Spotlight (real-time air quality from geostationary orbit, what makes TEMPO unique)
- Data Sources and Methods (technical documentation for advanced users and partners)
- Download Data (CSV/GeoJSON exports for partner use)

---

#### 3. Learning Modules

**Purpose:** Standards-aligned, interactive learning experiences organized by topic, grade band, and complexity. Each module combines NASA data exploration with guided inquiry, background science content, and hands-on or digital activities. Modules are designed for both formal classroom use and self-directed learning. Each includes estimated time, prerequisites, standards alignment, and available languages.

**Primary audiences:** Students, educators, informal learning organizations.

**Sub-pages:**
- Module Library (filterable catalog by topic, grade, duration, language, standard)
- Featured Module (rotating highlight with editorial context)
- Individual Module Pages (self-contained learning experience with embedded data tools)
- Module Pathways (suggested sequences for multi-week units)
- Student Portfolio / Progress Tracker (optional, for registered students)

**Topic clusters (Year 1 MVP):**
- What Is Air Quality? (introductory, grades 5-8)
- Seeing the Invisible: How Satellites Measure Air Pollution (grades 6-10)
- Air Quality and Your Health (grades 5-9, with health literacy focus)
- Your Community's Air: A Local Investigation (grades 6-12, data inquiry)

---

#### 4. Citizen Science / Community Observations

**Purpose:** The hub for all participatory science activities. Users register for protocols, learn collection procedures, submit observations, track contributions, and see how their data integrates with NASA satellite measurements. This section makes the "contribution" promise of BREATHE tangible — users generate data that has scientific value and community relevance.

**Primary audiences:** Citizen science participants, students (in classroom projects), community members, educators (facilitating student participation).

**Sub-pages:**
- Active Projects (current protocols accepting data)
- How to Participate (registration, equipment needs, training)
- Submit an Observation (mobile-optimized form with geolocation, photo upload, structured fields)
- My Contributions (personal dashboard for registered participants)
- Community Data Map (aggregated view of all citizen science observations alongside satellite data)
- Data Quality and Protocols (detailed methodology documentation)
- Frequently Asked Questions

---

#### 5. Educator Hub

**Purpose:** A dedicated space for teachers and facilitators that centralizes lesson plans, professional development opportunities, classroom management tools, and peer community features. The Educator Hub respects teachers' time constraints by providing clear, scannable resource descriptions with standards metadata, download options, and adaptation guidance.

**Primary audiences:** K-12 educators, pre-service teachers, informal education facilitators.

**Sub-pages:**
- Lesson Plan Library (filterable by standard, grade, topic, duration, format)
- Professional Development (workshop calendar, registration, recorded sessions, micro-credentials)
- Facilitator Guides (step-by-step instructions for running BREATHE activities)
- Classroom Dashboard (track student module progress, manage class citizen science projects — later phase)
- Standards Alignment Guide (comprehensive mapping to NGSS, Texas TEKS, and health education standards)
- Teacher Stories (profiles of BREATHE educators, implementation examples)
- Request Support (contact form for implementation help)

---

#### 6. Community Workshops & Events

**Purpose:** Calendar and registration hub for all BREATHE in-person and virtual events, including community workshops, educator professional development sessions, partner training, citizen science field days, and public presentations. Enables event discovery by location, date, audience, and topic. Supports partner organizations in listing events they deliver under the BREATHE umbrella.

**Primary audiences:** Community members, educators, partner organizations, informal learning organizations.

**Sub-pages:**
- Event Calendar (filterable, map-enabled)
- Register for an Event
- Host a Workshop (guide and application for partner organizations)
- Workshop Toolkits (downloadable materials for partner-delivered events)
- Past Events Archive (recordings, materials, attendance summaries)

---

#### 7. Data Stories / Regional Case Studies

**Purpose:** Narrative-driven content that connects NASA data to specific communities, events, and health outcomes. Each data story combines satellite imagery, ground-level data, community context, and expert commentary to tell a compelling, scientifically grounded story. These are the portal's primary vehicle for demonstrating relevance and building public understanding. Case studies are organized by region, with the Texas pilot regions featured prominently in Years 1-3.

**Primary audiences:** Community members, educators (as teaching resources), public health partners, media, general public.

**Sub-pages:**
- Story Library (browsable, filterable by region, topic, date)
- Featured Story (homepage-promoted, editorially curated)
- Houston Region Stories
- Texas Border Region Stories
- National Stories (Years 4-5)
- Submit a Community Story (partner and community contribution pathway)

**Example Year 1 stories:**
- "What TEMPO Sees Over Houston's Ship Channel" — satellite and ground data on industrial corridor air quality
- "Breathing at the Border" — MAIA aerosol data and cross-border pollution dynamics in the Rio Grande Valley
- "Wildfire Smoke in Texas" — tracking smoke plumes with NASA data and community sensor readings

---

#### 8. Partner Network

**Purpose:** Directory and engagement hub for BREATHE institutional partners. Lists partner organizations with descriptions, roles, and contact information. Provides tools for partners to report activities, access co-branded materials, and communicate with the BREATHE team. Serves as both a public-facing showcase of the collaboration network and a functional workspace for active partners.

**Primary audiences:** Partner organizations (current and prospective), public health departments, informal learning organizations, school districts.

**Sub-pages:**
- Partner Directory (searchable map and list)
- Become a Partner (information and application)
- Partner Resources (co-branded templates, reporting tools, MOUs)
- Partner Activity Dashboard (logged-in access for reporting deliveries, accessing materials)
- Partner Spotlight Stories

---

#### 9. About BREATHE

**Purpose:** Institutional information establishing the project's credibility, team, funding, and scientific basis. Provides the "who, what, why, and how" for visitors evaluating whether to trust and engage with the project.

**Primary audiences:** All groups, especially first-time visitors, potential partners, media, and NASA reviewers.

**Sub-pages:**
- Project Overview (mission, goals, timeline, geographic scope)
- Our Team (PI, Co-Is, institutional partners, advisory board)
- NASA Science Activation Program (context about the funding program)
- MAIA and TEMPO Missions (accessible overviews with links to mission sites)
- Publications and Presentations
- Contact Us
- Media Kit

---

#### 10. Evaluation / Impact

**Purpose:** Transparently communicates BREATHE's progress, reach, and impact. Hosts public-facing evaluation summaries, annual reports, and impact dashboards. Also provides secure access for the external evaluation team to project metrics and data. Demonstrates accountability to NASA, partners, and the public.

**Primary audiences:** NASA program officers, evaluation team, partner organizations, project leadership.

**Sub-pages:**
- Impact Dashboard (public summary metrics: participants reached, workshops delivered, data contributed, geographic coverage)
- Annual Reports
- Evaluation Approach (overview of evaluation framework and methods)
- Evaluator Portal (authenticated access to detailed metrics, survey data, analytics)

---

#### 11. Resource Library

**Purpose:** A unified, searchable repository of all downloadable assets across the portal — lesson plans, data files, workshop toolkits, facilitator guides, fact sheets, infographics, videos, and presentation materials. Serves as a "one-stop shop" for users who know they want to download something but are not sure which section to find it in. Every resource is tagged with audience, format, language, topic, and standards alignment.

**Primary audiences:** Educators, informal learning organizations, partner organizations, community health workers.

**Sub-pages:**
- Search and Filter Interface
- Resource Detail Pages (description, preview, download, related resources)
- Collections (curated bundles, e.g., "Complete Classroom Kit for Air Quality Unit")

---

#### 12. News / Updates

**Purpose:** Blog-style content stream for project announcements, mission updates, event recaps, new resource releases, partner highlights, and timely air quality news connected to NASA data. Keeps the portal feeling current and gives returning visitors new content to engage with. Supports email newsletter distribution.

**Primary audiences:** All groups, especially returning visitors and newsletter subscribers.

**Sub-pages:**
- News Feed (reverse-chronological, categorized)
- Newsletter Archive
- Subscribe to Updates

---

### Navigation Structure

**Primary navigation (persistent header):**
Explore Data | Learn | Contribute | Educators | Community | About

**Utility navigation (top bar):**
Language Toggle (EN/ES) | Search | Login/Register | Contact

**Footer navigation:**
All section links | NASA logo and link | Accessibility statement | Privacy policy | Partner logos | Social media links | Newsletter signup

---

## D. Core User Flows

### Flow 1: Middle-School Student Exploring an Air Quality Module

**Context:** A 7th-grade science class in Houston. The teacher has assigned the "What Is Air Quality?" module. Students access the portal on classroom Chromebooks.

1. Student opens the BREATHE portal homepage on their school Chromebook.
2. Student clicks "Learn" in the primary navigation (or follows a direct link shared by the teacher via Google Classroom).
3. Student arrives at the Learning Modules library page. The assigned module, "What Is Air Quality?", is visible in the featured area (or the student searches by name).
4. Student clicks into the module landing page, which shows: title, estimated time (45 minutes), a short video hook (90 seconds, showing satellite footage of air pollution over Houston), and a "Start Module" button.
5. Student clicks "Start Module" and enters the guided experience:
   - **Section 1: What's in the Air?** — Interactive infographic showing common air pollutants. Student clicks on pollutant icons to learn sources and health effects. Brief embedded quiz: "Which of these pollutants is measured by the TEMPO satellite?"
   - **Section 2: Seeing Air from Space** — Simplified explanation of how MAIA and TEMPO detect pollutants. Animated diagram of satellite → data → map pipeline. Student watches a 60-second clip of a NASA scientist explaining what TEMPO observes.
   - **Section 3: Your Community's Air** — The map explorer opens, pre-zoomed to the Houston region. Student is prompted to enter their school's zip code. The map displays color-coded air quality data. Guided questions: "What color is your neighborhood? What does that mean? How does it compare to another part of the city?"
   - **Section 4: Why It Matters** — Connection to health outcomes. Simple, age-appropriate data on asthma rates and air quality. Student reads a short community story from a Houston resident.
   - **Section 5: What Can You Do?** — Introduction to citizen science. Student sees an invitation to participate in the BREATHE sky observation protocol. Optional: student submits a practice observation.
6. Student completes an end-of-module reflection (three short-answer questions) and sees a completion badge.
7. If the teacher has set up a classroom dashboard, completion is logged. If not, the student can screenshot or print the completion screen.

**Total time:** 35-50 minutes.

---

### Flow 2: Teacher Downloading and Preparing Materials

**Context:** A high school environmental science teacher in the Rio Grande Valley preparing a two-week unit on satellite remote sensing and air quality.

1. Teacher navigates to the Educator Hub from the primary navigation.
2. Teacher uses the Lesson Plan Library filter: Grade = "9-12", Topic = "Remote Sensing + Air Quality", Duration = "Multi-week unit."
3. Results show the "Seeing the Invisible: Satellites and Air Pollution" module pathway, tagged with NGSS standards (ESS3.C, ETS1.B) and Texas TEKS alignment.
4. Teacher clicks into the module pathway overview page, which shows:
   - Unit summary and learning objectives
   - Session-by-session breakdown (8 sessions, 50 minutes each)
   - Materials list (including optional low-cost sensor equipment)
   - Standards alignment table
   - Available languages (English, Spanish)
   - Facilitator guide link
   - "Download Complete Unit" button (ZIP file: lesson plans as editable DOCX/Google Docs, presentation slides, student handouts, answer keys, rubrics)
5. Teacher clicks "Download Complete Unit" — ZIP file downloads. Teacher also clicks "View Facilitator Guide" and bookmarks it.
6. Teacher notices a banner for an upcoming BREATHE professional development webinar: "Teaching Air Quality with NASA Data." Teacher clicks through and registers (name, email, school, district).
7. Teacher returns to the unit page and clicks "Preview Student Module" to walk through the interactive experience students will see.
8. Teacher adapts the downloaded lesson plan (editable Word document) to fit their bell schedule and adds local context for their community near the border.

**Total time for preparation:** 15-25 minutes.

---

### Flow 3: Community Member Using Local Air Quality Visualizations

**Context:** A Spanish-speaking parent in Houston's Magnolia Park neighborhood heard about BREATHE at a community health fair and wants to check air quality near their child's school.

1. Community member opens the BREATHE portal on their phone (link from a bilingual flyer received at the health fair). The portal detects the phone's language setting (Spanish) and displays the Spanish-language version. A language toggle is visible for switching.
2. The homepage features a prominent "Check Your Air / Revisa Tu Aire" search box with a simple prompt: "Enter your zip code or address / Ingresa tu codigo postal o direccion."
3. Community member types in their zip code. The page transitions to the Interactive Map Explorer, centered on Magnolia Park.
4. The map shows a color-coded air quality summary with a plain-language label: "Air quality today: Moderate / Calidad del aire hoy: Moderada." Below the map, a brief explanation: "What does this mean for your family? / Que significa esto para tu familia?" with health guidance appropriate to the level.
5. Community member scrolls down to see:
   - A 7-day trend chart for their area
   - A "How does NASA measure this?" expandable section with a simple TEMPO satellite explanation and image
   - A link to the regional case study: "Air Quality in Houston's East End"
   - Upcoming BREATHE community workshops in the Houston area
6. Community member taps "Talleres cerca de mi / Workshops near me" and sees a workshop listed at a local library in two weeks. They tap "Register / Registrarse" and complete a brief form (name, email or phone, language preference).
7. Community member receives a confirmation text/email in Spanish.

**Total time:** 3-5 minutes.

---

### Flow 4: Citizen Science Participant Submitting an Observation

**Context:** A BREATHE-trained community volunteer in Brownsville uses a PurpleAir sensor and the BREATHE mobile-optimized submission form to report an air quality observation.

1. Participant opens the BREATHE portal on their smartphone and navigates to Citizen Science > Submit an Observation. (Alternatively, they access a bookmarked direct link or use a future progressive web app shortcut.)
2. Participant logs in with their BREATHE account (created during training).
3. The submission form loads with fields pre-populated where possible:
   - **Location:** Auto-detected via phone GPS; participant confirms or adjusts on a map pin.
   - **Date and time:** Auto-filled; participant confirms.
   - **Observation type:** Participant selects "PurpleAir Sensor Reading" from a dropdown (other options: Sky Observation, Odor Report, Health Symptom Log).
   - **Sensor reading:** Participant enters PM2.5 value from their PurpleAir display (with visual guide showing where to read the number).
   - **Sky condition:** Participant selects from a visual grid (clear, hazy, smoky, cloudy, etc.) — supports the GLOBE Observer protocol alignment.
   - **Photo (optional):** Participant takes or uploads a sky/horizon photo.
   - **Notes (optional):** Free-text field for context (e.g., "Noticeable smell from nearby facility," "Brush fire smoke visible").
4. Participant taps "Submit / Enviar."
5. Confirmation screen: "Thank you! Your observation has been recorded. / Gracias. Tu observacion ha sido registrada." The screen shows:
   - The submitted data point on a mini-map
   - A comparison: "Your reading: PM2.5 = 18 ug/m3. TEMPO satellite estimate for this area today: Moderate."
   - Running total: "You have submitted 14 observations this month."
6. Participant can tap "View Community Map" to see their observation alongside others and satellite data.

**Total time:** 2-4 minutes per observation.

**Offline contingency (later phase):** If the participant has no connectivity in the field, the form stores data locally and syncs when connection is restored.

---

### Flow 5: Partner Organization Finding Workshop Materials

**Context:** A promotora network coordinator in the Rio Grande Valley needs to prepare for a BREATHE community health workshop they are delivering at a local community center.

1. Coordinator logs into the BREATHE portal with their partner account.
2. From the Partner Resources section (accessible via Partner Network > Partner Resources, or via a direct dashboard link), the coordinator sees:
   - Assigned workshop toolkit: "Air Quality and Your Family's Health / La Calidad del Aire y la Salud de Tu Familia"
   - Toolkit status: "Ready to deliver — all materials available"
3. Coordinator clicks into the toolkit, which contains:
   - Facilitator guide (bilingual, PDF and editable DOCX)
   - Presentation slides (bilingual, PowerPoint and Google Slides)
   - Participant handouts (bilingual, PDF, print-ready)
   - Pre/post survey forms (bilingual, paper and digital versions)
   - Promotional flyer template (editable, with space for local event details)
   - Short training video for facilitators (15 minutes, subtitled in English and Spanish)
4. Coordinator downloads the full toolkit as a ZIP file.
5. After delivering the workshop, the coordinator returns to the portal and uses the "Report an Activity" form:
   - Date, location, number of participants, participant demographics (aggregated, not individual), photos (optional), brief narrative summary
6. Submission is confirmed. The coordinator's partner dashboard updates with cumulative delivery statistics.

**Total time for preparation:** 10-15 minutes. Reporting: 5-10 minutes.

---

### Flow 6: Evaluator Accessing Impact Dashboards

**Context:** The external evaluation team lead needs to review Q2 engagement metrics for the Year 2 annual report.

1. Evaluator logs into the BREATHE portal with their evaluator account (role-based access).
2. From the Evaluator Portal (under Evaluation / Impact), the evaluator sees a dashboard with tabs:
   - **Reach:** Total unique visitors, geographic distribution (map), new vs. returning, language breakdown
   - **Engagement:** Module starts and completions by module, average time on module, download counts by resource type, event registrations and attendance
   - **Contribution:** Citizen science observations submitted (by protocol, region, month), data quality metrics, active contributors
   - **Partnership:** Partner organizations active, workshops delivered by partners, partner-reported participant counts
   - **Equity indicators:** Percentage of engagement from target communities (Houston, border region), Spanish-language usage, mobile vs. desktop
3. Evaluator selects date range: Q2 Year 2. Dashboard filters update.
4. Evaluator exports a summary report (PDF) and raw data tables (CSV) for integration into the annual evaluation report.
5. Evaluator also accesses de-identified survey response data (pre/post surveys from modules and workshops) through a secure download link.

**Data privacy:** All metrics are aggregated. No individual user data is accessible without IRB-approved protocols. Citizen science participants' personal information is separated from their observation data in the evaluator view.

---

## E. Page-by-Page Design Concept

### General Design Notes

All pages share a consistent layout framework: persistent header with primary navigation, utility bar (language toggle, search, login), and a comprehensive footer. The design is responsive, with mobile breakpoints at 768px and 480px. All interactive elements meet WCAG 2.1 AA contrast and target-size requirements. NASA identity elements (logo, institutional color accents) are present on every page per NASA branding guidelines.

---

### E1. Homepage

**Hero Area (top of page):**
- Full-width visual: animated or slowly rotating satellite view of Earth's atmosphere, with subtle overlay of air quality data colors. On mobile, a static high-quality image to preserve performance.
- Headline: "NASA Science. Your Community's Air. / Ciencia de la NASA. El Aire de Tu Comunidad." (language-responsive)
- Sub-headline (one sentence): "Explore satellite data, learn about air quality and health, and contribute to science where you live."
- Primary CTA button: "Check Your Air" (opens zip code/address search that leads to the data explorer)
- Secondary CTA: "Start Learning" (links to module library)

**Quick Access Bar (below hero):**
- Four icon-and-label cards in a horizontal row:
  - "Explore Data" (map icon) — links to Interactive Map Explorer
  - "Learn" (lightbulb/book icon) — links to Learning Modules
  - "Contribute" (hand/data icon) — links to Citizen Science
  - "For Educators" (classroom icon) — links to Educator Hub
- On mobile, these stack into a 2x2 grid.

**Current Conditions Snapshot:**
- A compact, auto-updating widget showing today's air quality summary for the pilot regions (Houston, Rio Grande Valley). Uses TEMPO data where available, EPA AQI as fallback. Color-coded with plain-language labels. Link to full data explorer.

**Featured Content Row:**
- Three cards: Featured Data Story, Featured Learning Module, Upcoming Event. Each card has a thumbnail image, title, one-sentence description, and a link. Editorially curated, updated weekly or biweekly.

**Mission Spotlight Strip:**
- Horizontal band with MAIA and TEMPO satellite images/icons, brief one-line descriptions ("MAIA: Mapping aerosols and health from space" / "TEMPO: Hourly air quality from geostationary orbit"), and links to mission spotlight pages. NASA logos and mission badges displayed prominently.

**Community Stories Carousel:**
- Three to five rotating cards featuring short community voices: a student quote, a teacher testimonial, a community member's story. Photo, name (with consent), location, and a two-sentence quote. Link to full story.

**Partner Logos Bar:**
- Horizontal scrolling or grid display of institutional partner logos (universities, school districts, community organizations, NASA centers). Reinforces collaboration breadth.

**Newsletter Signup:**
- Compact inline form: "Stay connected with BREATHE. / Mantente conectado con BREATHE." Email input + subscribe button. Language preference checkbox.

**Footer:**
- Full sitemap links, NASA logo and required disclaimer text, accessibility statement link, privacy policy link, social media icons, BREATHE project contact email, funding acknowledgment (NASA Science Activation cooperative agreement number).

**NASA Trust Elements:**
- NASA meatball logo in header and footer
- "A NASA Science Activation Project" badge near the hero
- Data source attribution visible wherever data is displayed
- Institutional partner logos

**Accessibility:**
- All images have descriptive alt text
- Hero animation has a pause control
- Skip-to-content link as first focusable element
- Color-coded elements have accompanying text labels
- Minimum 4.5:1 contrast ratio on all text

---

### E2. Interactive Data Exploration Page

**Hero Area:**
- Reduced-height hero with page title: "Explore NASA Air and Health Data"
- Brief explanatory text (two sentences): "See what NASA satellites reveal about the air in your community. Combine satellite data, ground monitors, and community observations on one map."
- Prominent search bar: "Enter a zip code, city, or address" with auto-complete

**Map Explorer (primary interactive element, occupying ~70% of viewport):**
- Large interactive map (Mapbox GL JS or similar) centered on the user's searched location or defaulting to the Texas pilot region
- **Layer controls (left sidebar or collapsible panel):**
  - TEMPO Air Quality (NO2, Ozone, Formaldehyde — selectable)
  - MAIA Aerosol Data (AOD, PM2.5 estimates)
  - EPA Ground Monitors (AQI stations)
  - BREATHE Citizen Science Observations
  - Community Health Indicators (asthma prevalence, hospital visits — where available)
  - Base map options (satellite imagery, street map, terrain)
- **Time controls (bottom bar):** Date selector, time-of-day slider (for TEMPO hourly data), animation play/pause for time series
- **Info panel (right sidebar or bottom sheet on mobile):** When a user clicks a location or data point, this panel shows:
  - Location name and coordinates
  - Current and historical values for active layers
  - Plain-language interpretation ("This area has moderate NO2 levels, typical for urban areas with heavy traffic.")
  - "Learn more" links to relevant data stories or modules
  - Data source attribution with links

**Guided Data Tours (below or alongside map):**
- Three to four clickable cards: "How is the air near my school?", "What happened during the last wildfire?", "Compare two neighborhoods", "What does MAIA see vs. TEMPO?"
- Each tour pre-configures the map layers, location, and time range, then walks the user through a narrated sequence with callout boxes

**Data Download Section:**
- For advanced users and partners: "Download data for this area" with format options (CSV, GeoJSON, PDF summary report)
- Requires acknowledgment of data use terms

**Contextual Help:**
- Floating "?" button opens a brief overlay: "How to use this map" with annotated screenshot
- Tooltips on all layer toggle labels explaining what each dataset represents

**NASA Trust Elements:**
- Each data layer labeled with its source (e.g., "Source: NASA TEMPO, Level 2, retrieved [date]")
- "About this data" expandable sections with methodology links
- NASA and mission logos in the data attribution area

**Accessibility:**
- Map has a text-based alternative: "View data as a table" option that presents the same information in a sortable, screen-reader-compatible table
- Color palettes are colorblind-safe (using established palettes like viridis or cividis)
- All controls keyboard-navigable
- ARIA labels on all interactive map elements

**Mobile Adaptation:**
- Map fills screen width; layer controls collapse into a bottom sheet
- Info panel slides up from bottom
- Guided tours use a step-by-step card-swipe interface

---

### E3. Learning Module Page

**Hero Area:**
- Module title, topic tags, and a visually engaging header image (satellite imagery or relevant photography)
- Metadata bar: Grade level, estimated time, language options, standards addressed (clickable to expand), prerequisite modules (if any)
- Two buttons: "Start Module" and "Download Offline Version" (PDF/print-friendly)

**Module Progress Bar:**
- Horizontal progress indicator showing sections completed. Persistent across the page as the student scrolls.

**Module Content Area (main column, ~65% width):**
- Content delivered in sequential sections, each clearly numbered and titled
- Section types:
  - **Text and image blocks:** Short paragraphs (3-5 sentences) with embedded images, diagrams, and captioned satellite imagery
  - **Embedded video:** Short clips (60-120 seconds) of NASA scientists, satellite animations, or community voices. Captioned, with transcript toggle.
  - **Interactive elements:** Embedded mini-map explorers, drag-and-drop activities, clickable infographics, slider-based comparisons (e.g., "before and after a pollution event")
  - **Check-your-understanding:** Inline formative assessment — multiple choice, short answer, or matching. Immediate feedback with explanations.
  - **Reflection prompts:** Open-ended questions that encourage students to connect content to their own experience ("How does this data relate to what you observe in your neighborhood?")

**Sidebar (right column, ~35% width):**
- "Key Vocabulary" glossary for the current section (terms are also linked inline)
- "NASA Connection" callout boxes: brief notes connecting the content to specific NASA missions, scientists, or discoveries
- "Try This" suggested extension activities (optional, for early finishers or home exploration)
- "Teacher Note" callouts (visible only to educator accounts or when accessed via educator hub): pedagogical tips, discussion facilitation suggestions, common misconceptions

**End-of-Module Section:**
- Summary of key concepts (bulleted)
- Summative assessment or reflection activity
- "What's Next?" — links to the next module in the pathway, citizen science participation, or related data stories
- Completion badge or certificate (downloadable image for student portfolios)
- Feedback prompt: "How was this module?" (simple 1-5 star rating + optional comment)

**Navigation:**
- "Previous Section" / "Next Section" buttons at the bottom of each section
- Clickable table of contents in the sidebar (scrolls to section)

**NASA Trust Elements:**
- Data source citations within every data-driven section
- NASA mission badges next to relevant content
- "Reviewed by [NASA SME name and title]" attribution where applicable

**Accessibility:**
- All images have alt text; complex diagrams have long descriptions
- Videos have captions and transcripts
- Interactive elements have keyboard alternatives
- Reading level indicators and a "simplified version" toggle for key content blocks (stretch goal)

---

### E4. Educator Hub Page

**Hero Area:**
- Welcoming headline: "Teaching Air Quality and Earth Science with NASA Data"
- Brief description of the Educator Hub's purpose and what teachers can find here
- Two primary CTAs: "Find Lesson Plans" and "Register for Professional Development"
- Background image: classroom or workshop setting with diverse students engaging with BREATHE materials (authentic, not stock)

**Quick Filters Bar:**
- Horizontal filter row: Grade Band (K-2, 3-5, 6-8, 9-12), Subject (Science, Health, Math, ELA Integration), Format (Lesson Plan, Activity, Assessment, Presentation), Duration (Single class, Multi-day, Multi-week unit)
- "Clear Filters" and result count displayed

**Lesson Plan Grid:**
- Card-based grid layout. Each card shows:
  - Thumbnail image
  - Title
  - Grade band badge
  - Duration
  - Standards tags (NGSS codes, TEKS codes)
  - Language availability (EN, ES icons)
  - Download button (direct download without leaving the page)
  - "Preview" button (opens module in a new tab)
- Sort options: Newest, Most Downloaded, Grade Level, Topic

**Professional Development Section:**
- Upcoming PD events listed as cards with date, title, format (in-person / virtual / self-paced), location, and "Register" button
- Past PD recordings available with thumbnails and descriptions
- Micro-credential pathway overview: visual roadmap of PD offerings and how they build toward a BREATHE Educator Certification (stretch goal)

**Educator Toolkit Callout:**
- Prominent banner: "Download the Complete BREATHE Classroom Kit" — a curated bundle of the most essential resources for getting started
- Includes: introductory lesson plan, student handout, facilitator guide, standards alignment table, and a one-page "Pitch to Your Principal" document

**Teacher Spotlight Section:**
- Two to three profile cards featuring BREATHE educators: photo, name, school/district, subject, a brief quote about their experience, and a link to their full story

**Implementation Support:**
- "Need help getting started?" block with links to: FAQ, email support form, peer community forum (later phase), and scheduled office hours with the BREATHE education team

**NASA Trust Elements:**
- "Developed in collaboration with NASA scientists and education specialists" statement
- NASA and university partner logos
- Standards alignment displayed prominently — teachers need this for administrative justification

**Accessibility:**
- All resources available in multiple formats (web, PDF, DOCX)
- Filter interface is keyboard-navigable
- Card layout linearizes cleanly on screen readers

---

### E5. Citizen Science Page

**Hero Area:**
- Headline: "Contribute to NASA Science from Your Community"
- Engaging image: community member or student using a sensor or making a sky observation
- Sub-headline: "Your observations help NASA scientists understand air quality where satellites can't reach alone."
- Primary CTA: "Get Started" (scrolls to How to Participate)
- Secondary CTA: "Submit an Observation" (for returning participants)

**Active Projects Grid:**
- Cards for each active citizen science protocol:
  - **BREATHE Air Quality Watch:** PurpleAir sensor readings + sky observations. Year-round, all pilot regions.
  - **Sky and Haze Observations:** Visual sky condition reports aligned with GLOBE Observer. No equipment needed.
  - **Community Environment Reports:** Structured reports on local pollution sources, odors, and visible emissions. Qualitative.
- Each card shows: protocol name, brief description, equipment needed, time commitment, difficulty level, active participants count, and "Join This Project" button

**How to Participate Section:**
- Step-by-step visual process:
  1. Create a BREATHE Account (link to registration)
  2. Choose a Protocol (link back to project grid)
  3. Complete Training (short online training module, 10-15 minutes, with quiz)
  4. Collect and Submit Data (link to submission form)
  5. See Your Impact (link to community data map and personal dashboard)

**Community Data Map (embedded):**
- Compact version of the map explorer, pre-filtered to show only citizen science observations
- Color-coded by observation type and recency
- Clicking a data point shows: date, observer (anonymized or display name per preference), reading, and corresponding satellite data for context

**Leaderboard / Recognition:**
- "Top Contributors This Month" — displays anonymized or opted-in display names, observation counts, and badges
- Badge system: Beginner (1 observation), Observer (10), Scientist (50), Community Champion (100+)
- Not competitive — framed as collective progress: "Together, BREATHE participants have submitted [N] observations covering [N] communities."

**Data Quality and Protocols:**
- Expandable section with detailed methodology documentation
- PDF downloads of each protocol
- FAQ on data quality, calibration, and how citizen science data is used alongside satellite data

**NASA Trust Elements:**
- Explanation of how citizen observations complement satellite data (validation, gap-filling, spatial resolution enhancement)
- Attribution: "This citizen science program is part of NASA's BREATHE Science Activation project"
- Link to relevant publications or conference presentations using BREATHE citizen science data (as they become available)

**Accessibility:**
- Submission form tested for screen reader compatibility
- Photo upload has text alternative option (describe the sky in words)
- All training materials captioned and transcribed

**Mobile Optimization:**
- Submission form is the highest-priority mobile experience; designed for one-handed outdoor use
- Large touch targets on all form elements
- GPS auto-detection with manual override
- Camera integration for photo capture

---

### E6. Regional Case Study Page

**Hero Area:**
- Full-width satellite image of the featured region with data overlay (e.g., TEMPO NO2 map over Houston Ship Channel)
- Story title in large text over the image: "What TEMPO Sees Over Houston's Ship Channel"
- Byline: Author name, date published, estimated reading time
- Language toggle prominently displayed

**Narrative Content Area:**
- Long-form narrative (1,500-2,500 words) structured as a scrollytelling experience:
  - Text blocks alternate with embedded maps, satellite images, charts, and community photographs
  - As the reader scrolls, the embedded map zooms, pans, or changes layers to match the narrative progression
  - Pull quotes from community members, scientists, or health professionals are visually highlighted
  - Key data points are called out in large-format "stat blocks" (e.g., "PM2.5 levels in this neighborhood are 40% above the city average")

**Embedded Interactive Elements:**
- Before/after satellite image slider (e.g., clear day vs. high-pollution day)
- Time-lapse animation of air quality changes over a day or season
- Clickable map with the specific locations mentioned in the story

**Sidebar / Contextual Information:**
- "About the Data" box: which NASA datasets are used, time period, resolution, caveats
- "Related Modules" links: learning modules that teach the science behind this story
- "Take Action" box: links to citizen science participation, upcoming local events, health resources
- "Related Stories" links to other case studies in the same region or on the same topic

**Community Voice Section (bottom):**
- Two to three short testimonials or perspectives from community members in the featured region
- Photo, name (with consent), affiliation, and a two to four sentence quote
- Optional embedded short video clip

**Share and Engage Bar:**
- Social sharing buttons (designed to generate preview cards with the story image and title)
- "Print This Story" button (generates a clean print layout)
- "Use This Story in Your Classroom" button (links to a companion lesson plan in the Educator Hub)
- Comment or feedback form (moderated)

**NASA Trust Elements:**
- Full data attribution with links to NASA data sources
- "Reviewed by [scientist name], [institution]" statement
- NASA and mission logos in the data attribution area

**Accessibility:**
- Scrollytelling effects degrade gracefully: without JavaScript, the page displays as a standard long-form article with static images
- All satellite images have detailed alt text describing what the data shows
- Charts have text-based data tables as alternatives

---

### E7. Partner / Community Page

**Hero Area:**
- Headline: "BREATHE Partners: Building a Network for Science and Community Health"
- Sub-headline: "Educators, health organizations, community groups, and NASA scientists working together."
- Background: mosaic of partner logos or a group photo from a BREATHE partner event
- CTA: "Become a Partner"

**Partner Directory:**
- Searchable, filterable list and map of all BREATHE partners
- Filters: Organization type (school district, university, community org, health department, museum/library, NASA center), Region, Role (content delivery, data collection, evaluation, scientific advisory)
- Each partner entry shows: logo, name, type, region, brief description of role, website link
- Map view shows partner locations as pins; clicking opens the partner info card

**Become a Partner Section:**
- Clear description of what partnership entails: expectations, benefits, support provided
- Partnership tiers (if applicable): e.g., Delivery Partner, Data Partner, Community Advocate, Scientific Advisor
- Online application form (organization name, contact person, type, region, proposed role, capacity description)
- Timeline for application review and onboarding

**Partner Resources (authenticated access):**
- Visible to all but clearly labeled as "For Current Partners — Log In to Access"
- Description of available resources: workshop toolkits, co-branded templates, reporting tools, training videos
- Login button

**Partner Spotlight:**
- Rotating feature of one partner organization: logo, photo, narrative description of their BREATHE work, impact metrics, quote from a representative
- Archive of past spotlights

**Community Engagement Philosophy:**
- Brief section (200-300 words) articulating BREATHE's approach to community partnership: co-creation, cultural responsiveness, mutual benefit, capacity building
- Connects to NASA SciAct equity commitments

**NASA Trust Elements:**
- NASA center logos (Goddard, JPL, etc.) displayed alongside community partner logos — signaling that NASA is a peer in the partnership, not just a funder
- Cooperative agreement acknowledgment

**Accessibility:**
- Directory is navigable by keyboard and screen reader
- Map has a list-based alternative
- Application form is fully accessible with labeled fields and error messaging

---

## F. Interactive Features

### F1. Map-Based Data Explorer

**Description:** The centerpiece interactive tool of the BREATHE portal. A web-based geospatial application allowing users to view, layer, and query multiple air quality and health datasets on a single interactive map. Supports NASA satellite data (MAIA, TEMPO), EPA ground monitoring, BREATHE citizen science observations, and community health indicators.

**Pedagogical rationale:** Spatial data literacy is a core competency in modern STEM education and environmental health. By placing NASA satellite data alongside local ground-truth observations and health information, the explorer teaches users to think across scales — from orbital to neighborhood — and to critically evaluate what different data sources reveal and conceal. This directly supports NGSS practices of analyzing and interpreting data.

**Strategic rationale:** The data explorer is the primary vehicle for demonstrating the unique value of MAIA and TEMPO missions to the public. It is also the most visible proof-of-concept for BREATHE's data integration approach, which is central to the project's scientific contribution.

**MVP (Year 1):** TEMPO NO2 and ozone layers, EPA AQI stations, basic citizen science observation display, location search, single-date view, Houston and Rio Grande Valley coverage.

**Later phases:** MAIA aerosol layers (pending mission data availability), time-series animation, community health indicator overlays, comparison tools, data download, national coverage.

---

### F2. Guided Story Maps

**Description:** Narrated, step-by-step geospatial experiences that walk users through a specific data story using the map explorer as the canvas. Each story map pre-configures the map (location, layers, time) and presents a sequence of annotated views with explanatory text, images, and questions.

**Pedagogical rationale:** Story maps lower the barrier to entry for geospatial data exploration. Research on guided inquiry shows that scaffolded experiences with gradual release of control improve learning outcomes for novice data users. Story maps serve as "training wheels" that build user confidence before they explore data independently.

**Strategic rationale:** Story maps are highly shareable, making them effective for outreach and media coverage. They also serve as templates that partner organizations and educators can adapt for their own communities.

**MVP (Year 1):** Three story maps aligned with Texas pilot regions and Year 1 data stories.

**Later phases:** Story map builder tool for educators and partners to create custom story maps using BREATHE data layers.

---

### F3. Compare-Your-Community Views

**Description:** A side-by-side or split-screen comparison interface that lets users view air quality data for two different locations, time periods, or data layers simultaneously. Users can compare their own community with a distant location, compare current conditions with historical data, or compare satellite-derived estimates with ground-based measurements.

**Pedagogical rationale:** Comparison is a fundamental scientific reasoning skill. By structuring the comparison as a tool rather than a static graphic, the portal encourages users to formulate their own questions ("Is air quality worse near the highway or near the park?") and investigate them with real data — a hallmark of authentic STEM practice.

**Strategic rationale:** Comparison views directly demonstrate the spatial and temporal resolution advantages of MAIA and TEMPO over previous missions, reinforcing the scientific value proposition of these investments.

**MVP (Year 1):** Basic two-location comparison using the same data layer and time period.

**Later phases:** Multi-variable comparison, temporal comparison (same location, different dates), and exportable comparison reports.

---

### F4. MAIA/TEMPO Mission Spotlights

**Description:** Dedicated interactive pages for the MAIA and TEMPO satellite missions. Each spotlight includes a mission overview, animated orbital diagrams, instrument explanations, sample data imagery, "A Day in the Life of [Mission] Data" interactive timeline (from photon to portal), and links to official NASA mission pages.

**Pedagogical rationale:** Understanding where data comes from — and the engineering and science behind remote sensing — is essential for data literacy. These spotlights connect the portal's air quality content to the broader NASA Earth science enterprise, showing students that the data they explore is the product of decades of scientific and engineering effort.

**Strategic rationale:** Mission spotlights fulfill NASA's mandate to communicate the value and capabilities of its missions to the public. They also serve as entry points for students interested in aerospace engineering, atmospheric science, or data science careers.

**MVP (Year 1):** TEMPO spotlight (mission operational, data flowing). MAIA spotlight with mission overview and anticipated data products.

**Later phases:** Updated MAIA spotlight with live data when available. Interactive "Build Your Own Satellite Instrument" activity. Career profiles of mission team members.

---

### F5. Low-Cost Monitoring Activity Builder

**Description:** A guided tool that helps educators and community organizations plan and execute air quality monitoring activities using low-cost sensors (PurpleAir, AirBeam) and observational protocols. The builder walks users through: selecting a monitoring approach, identifying equipment and costs, planning deployment locations, setting up data collection schedules, training participants, and connecting collected data to the BREATHE citizen science platform.

**Pedagogical rationale:** Hands-on data collection with real instruments is the most powerful form of authentic STEM experience the portal can enable. Research consistently shows that student engagement and learning outcomes improve dramatically when learners generate their own data rather than analyzing pre-packaged datasets. The activity builder removes the planning burden that otherwise prevents educators from attempting these activities.

**Strategic rationale:** Low-cost monitoring networks generate ground-truth data that validates and complements MAIA and TEMPO satellite observations. Expanding these networks through BREATHE activities directly serves the project's scientific goals while engaging communities as co-producers of knowledge.

**MVP (Year 1):** Static guide (downloadable PDF) for PurpleAir-based classroom monitoring, with links to relevant citizen science protocols.

**Later phases:** Interactive builder with equipment recommendation engine, budget calculator, deployment map planner, and integration with the citizen science submission workflow.

---

### F6. Citizen Science Submission Workflow

**Description:** A mobile-optimized, multi-protocol data submission system that allows registered participants to submit air quality observations from the field. The workflow includes protocol selection, structured data entry forms with validation, GPS-based geolocation, photo capture, real-time feedback (comparison with satellite data), and contribution tracking.

**Pedagogical rationale:** The act of submitting a scientific observation — following a protocol, recording data carefully, seeing your contribution in context — is the portal's most direct instantiation of the "experience the process of science" SciAct priority. The immediate feedback loop (your reading vs. the satellite estimate) teaches data comparison and critical thinking.

**Strategic rationale:** Citizen science data is a core BREATHE research output. The submission workflow must be frictionless enough to sustain long-term participation, especially among community members who are not scientists by profession.

**MVP (Year 1):** Web-based submission form for PurpleAir readings and sky observations. GPS auto-detection. Basic confirmation and contribution counter.

**Later phases:** Offline-capable progressive web app, additional protocols (odor reports, health symptom logs), automated data quality checks, gamification elements (badges, milestones), integration with GLOBE Observer.

---

### F7. Educator Dashboards

**Description:** Authenticated dashboards for teachers who use BREATHE modules in their classrooms. Dashboards show: which students have started and completed modules, formative assessment responses (aggregated and individual), class-level citizen science contribution statistics, and recommended next steps.

**Pedagogical rationale:** Educators need visibility into student progress to differentiate instruction and identify students who need support. Without dashboards, teachers must rely on self-reporting, which is unreliable, or manual checks, which are time-consuming. Dashboards also allow teachers to use BREATHE module data as formative assessment evidence.

**Strategic rationale:** Educator dashboards increase teacher adoption and retention by reducing administrative friction. They also generate engagement data that feeds the evaluation framework.

**MVP (Year 1):** Not in MVP. Modules function as standalone experiences without progress tracking.

**Later phases (Year 2-3):** Basic dashboard with module completion tracking per class roster. Year 4-5: Assessment analytics, citizen science project management, and integration with LMS platforms (Google Classroom, Canvas) via LTI.

---

### F8. Multilingual Support

**Description:** Full bilingual (English/Spanish) support across all portal content, including navigation, module text, data labels, submission forms, and downloadable resources. Implemented as a true localization (not machine translation), with culturally adapted content reviewed by native Spanish-speaking team members and community partners.

**Pedagogical rationale:** Language barriers are among the most significant obstacles to equitable STEM engagement. In the Texas pilot regions, Spanish is the primary home language for a substantial portion of the target community. Offering superficial translation (e.g., navigation labels only) while leaving core content in English fails to serve these communities meaningfully.

**Strategic rationale:** Bilingual content is a concrete, reviewable demonstration of BREATHE's commitment to the equity requirements of the NASA SciAct solicitation. It also positions the portal for expansion to other regions with significant Spanish-speaking populations in Years 4-5.

**MVP (Year 1):** Full bilingual support for the homepage, data explorer interface, two initial learning modules, citizen science submission workflow, and community-facing event pages. All downloadable resources in both languages. Language toggle persistent across all pages.

**Later phases:** All modules and data stories bilingual. Exploration of additional languages based on expansion regions (Years 4-5). Community-contributed translations workflow.

---

### F9. Mobile Field Data Collection

**Description:** A mobile-optimized interface (responsive web, progressing to a progressive web app) designed specifically for outdoor use during citizen science data collection. Features include: large touch targets, high-contrast display for sunlight readability, GPS integration, camera access for photo observations, offline data caching, and streamlined single-purpose workflow (observe → record → submit).

**Pedagogical rationale:** Field-based science is inherently mobile. If the submission tool is clunky or requires a desktop, participation rates drop sharply. Designing for the field context — where users may be holding a sensor in one hand and a phone in the other, in bright sunlight, with intermittent connectivity — is essential for sustaining citizen science participation.

**Strategic rationale:** Mobile field tools enable the distributed data collection network that generates BREATHE's ground-truth dataset. The quality and volume of citizen science contributions depend directly on the usability of this interface.

**MVP (Year 1):** Mobile-optimized responsive web form with GPS and camera access.

**Later phases:** Progressive web app with offline capability, push notification reminders for scheduled observations, and Bluetooth sensor integration (if supported by sensor hardware).

---

## G. Learning and Engagement Model

### The BREATHE Engagement Ladder

The portal operationalizes a four-stage engagement model that moves users from passive awareness toward active scientific contribution. This model is not a rigid pipeline — users may enter at any stage and move fluidly between them — but it provides the design framework for ensuring that every portal feature serves a clear engagement function.

---

**Stage 1: Awareness**
*"I learned that NASA studies air quality and it affects my community."*

**Portal features serving this stage:**
- Homepage hero and current conditions snapshot
- Data stories and regional case studies (read-only consumption)
- News and updates
- Community event listings and workshop announcements
- Social media-shared content and partner-distributed materials

**How the portal operationalizes this:** The homepage and data stories are designed for zero-commitment engagement. A visitor can arrive, see a compelling air quality visualization of their neighborhood, read a one-paragraph explanation, and leave with a new understanding — all in under two minutes. No login, no registration, no cognitive overhead. The portal's visual design, bilingual content, and community-centered framing ensure that this initial awareness experience resonates with audiences who may not see themselves as "science people."

**Metrics for this stage:** Unique visitors, page views on data stories and homepage, geographic distribution of visitors, bounce rate, social media referral traffic, language toggle usage.

---

**Stage 2: Learning**
*"I understand how NASA satellites measure air quality and why it matters for health."*

**Portal features serving this stage:**
- Learning modules (guided, standards-aligned)
- Guided data tours on the map explorer
- MAIA and TEMPO mission spotlights
- Educator-facilitated classroom activities
- Workshop participation (in-person and virtual)
- Resource library exploration

**How the portal operationalizes this:** Learning modules are the primary vehicle for moving users from awareness to structured understanding. Each module is designed using backward design principles: starting from clearly defined learning objectives (aligned with NGSS and TEKS), proceeding through scaffolded inquiry, and concluding with formative assessment. The key pedagogical move is embedding real NASA data exploration within the learning sequence — students do not learn about data in the abstract and then separately use a data tool; the data tool is the learning environment. Guided data tours on the map explorer serve the same function for informal learners who do not engage through classroom modules.

**Where authentic STEM experiences occur:** When a student enters their zip code in a module and sees real TEMPO-derived NO2 data for their neighborhood, interprets the color scale, compares their area to another, and formulates a hypothesis about why levels differ — that is authentic data analysis, not a simulation. The data is real. The questions are real. The uncertainty is real.

**Metrics for this stage:** Module starts, module completions, time-on-module, formative assessment scores, guided tour starts and completions, workshop attendance, PD registration and completion.

---

**Stage 3: Experience**
*"I collected data, used NASA tools to analyze it, and shared what I found."*

**Portal features serving this stage:**
- Citizen science data collection and submission
- Low-cost monitoring activities (classroom and community)
- Interactive data explorer (self-directed exploration beyond guided tours)
- Compare-your-community tool
- Classroom citizen science projects (teacher-facilitated)
- Student or community data presentations at BREATHE events

**How the portal operationalizes this:** This stage represents the transition from consuming content to generating knowledge. The citizen science workflow is designed to make this transition as low-friction as possible: a user who has completed a learning module and understands basic air quality concepts can register for a protocol, complete a 15-minute online training, and submit their first observation in the same session. The portal's immediate feedback mechanism — showing the user's observation alongside satellite data — reinforces the connection between their contribution and NASA science.

**Where authentic STEM experiences occur:** A community member using a PurpleAir sensor follows a data collection protocol, records a PM2.5 reading, submits it through the portal, and sees their data point on the community map alongside TEMPO estimates. They notice a discrepancy — the satellite shows moderate air quality, but their ground reading is elevated. They look at the time stamps and realize the satellite overpass was at a different time of day. This is authentic scientific reasoning: comparing data sources, identifying discrepancies, hypothesizing explanations.

**Metrics for this stage:** Citizen science observations submitted, repeat submissions (returning contributors), data quality scores, self-directed map explorer sessions (without guided tour), student data analysis artifacts, event presentations.

---

**Stage 4: Contribution**
*"My data and my voice are part of NASA's understanding of air quality and health."*

**Portal features serving this stage:**
- Sustained citizen science participation (long-term contributors)
- Community story submissions
- Partner-delivered workshops and events
- Peer mentoring and community science leadership
- Student science fair projects using BREATHE data
- Co-authored publications and conference presentations (for highly engaged participants)
- Advisory roles (community advisory board, youth council)

**How the portal operationalizes this:** The portal supports Stage 4 through recognition systems (contribution dashboards, badges, and public acknowledgment), community story submission pathways, and partner-managed activity reporting. However, Stage 4 is not primarily a portal experience — it is a relationship experience. The portal's role is to make the transition from Stage 3 to Stage 4 visible and to provide the tools that sustained contributors need (data export, activity reporting, presentation materials). The deeper work of Stage 4 — mentoring new participants, presenting at community events, advising the project team — happens in person and through the partner network, with the portal serving as the connective infrastructure.

**Where authentic STEM experiences occur:** A long-term citizen science contributor in Houston's East End has submitted 200+ observations over two years. They notice a seasonal pattern in their data and bring it to a BREATHE community meeting. A NASA scientist on the call confirms that TEMPO data shows a similar pattern and explains the atmospheric chemistry behind it. The contributor's observation history becomes a local case study used in a BREATHE data story and a peer-reviewed publication. The contributor is credited by name. This is not a simulation of science — it is science.

**Metrics for this stage:** Sustained contributors (active for 6+ months), community stories submitted, partner workshops delivered, science fair projects registered, co-authored outputs, advisory participation.

---

### Model Integration

The engagement ladder is not a separate program running alongside the portal — it is the organizing logic of the portal itself. Navigation pathways, CTAs, and content recommendations are designed to gently advance users toward the next stage:

- A data story (Stage 1) ends with a "Learn more in this module" link (Stage 2).
- A learning module (Stage 2) culminates in an invitation to submit a citizen science observation (Stage 3).
- A citizen science submission confirmation (Stage 3) shows the user's cumulative contributions and invites them to share their story (Stage 4).
- Partner dashboards (Stage 4) display the full engagement funnel, showing how their community events feed participants into the learning and contribution pipeline.

This progression ensures that the portal is not merely an information repository but an active engine for deepening public engagement with NASA Earth science.

---

## H. Evaluation-Ready Design

### Principles

The BREATHE portal is designed to generate evaluation data as a natural byproduct of use, without requiring intrusive tracking or compromising user trust. Every metric is tied to a specific evaluation question, and every data collection mechanism is implemented with privacy protections appropriate for the audiences served — including minors, community members, and health-related observations.

### Core Metrics Framework

#### Reach Metrics
| Metric | Source | Evaluation Question |
|--------|--------|-------------------|
| Unique visitors (monthly, annual) | Web analytics (privacy-respecting, e.g., Plausible or Matomo) | How many people does BREATHE reach? |
| Geographic distribution of visitors | Analytics (city/state level, not IP-precise) | Is BREATHE reaching target communities? |
| Language selection (EN vs. ES) | Analytics event | Is bilingual content being used? |
| Device type (mobile vs. desktop) | Analytics | Are mobile-dependent communities accessing the portal? |
| Referral sources | Analytics | How are users finding BREATHE? |

#### Engagement Metrics
| Metric | Source | Evaluation Question |
|--------|--------|-------------------|
| Module starts | Module tracking (anonymized) | Are learning modules attracting users? |
| Module completions | Module tracking | Are users completing the learning experience? |
| Module completion rate | Derived (completions / starts) | Are modules appropriately designed for the audience? |
| Average time on module | Module tracking | Are users engaging deeply or skimming? |
| Formative assessment scores | Module tracking (aggregated only) | Are learning objectives being met? |
| Guided data tour completions | Analytics event | Are scaffolded data experiences effective? |
| Map explorer sessions | Analytics event | Are users exploring data independently? |
| Repeat visits (30-day, 90-day return rate) | Analytics | Is BREATHE building a returning audience? |

#### Resource Metrics
| Metric | Source | Evaluation Question |
|--------|--------|-------------------|
| Resource downloads (by type, topic, language) | Download tracking | Which resources are most valued? |
| Educator lesson plan downloads | Download tracking | Is BREATHE penetrating formal education? |
| Workshop toolkit downloads | Download tracking (partner-authenticated) | Are partners using provided materials? |

#### Contribution Metrics
| Metric | Source | Evaluation Question |
|--------|--------|-------------------|
| Citizen science observations submitted | Submission database | Is the citizen science program generating data? |
| Unique citizen science contributors | Registration database | How many individuals are contributing? |
| Repeat contributors (3+ submissions) | Submission database | Is participation sustained? |
| Data quality scores | Automated quality checks | Is citizen science data scientifically useful? |
| Community stories submitted | Submission tracking | Are communities contributing narratives? |

#### Partnership Metrics
| Metric | Source | Evaluation Question |
|--------|--------|-------------------|
| Partner organizations registered | Partner database | Is the network growing? |
| Workshops delivered by partners | Partner activity reports | Are partners actively delivering? |
| Participants reached through partner events | Partner reports (aggregated) | What is the partner-mediated reach? |
| Workshop registration and attendance | Event registration system | Are community events attracting participants? |

#### Teacher Adoption Metrics
| Metric | Source | Evaluation Question |
|--------|--------|-------------------|
| Educator account registrations | Registration database | Are teachers finding and joining BREATHE? |
| PD workshop registrations and completions | Event/PD tracking | Are teachers investing in BREATHE training? |
| Repeat educator visits (quarterly) | Analytics | Are teachers returning to use resources? |
| School districts represented | Registration data | Is BREATHE reaching institutional scale? |

#### Equity Metrics
| Metric | Source | Evaluation Question |
|--------|--------|-------------------|
| % engagement from target zip codes (Houston, border region) | Analytics (zip-code level) | Is BREATHE reaching intended communities? |
| % Spanish-language sessions | Analytics | Is bilingual content serving its purpose? |
| % mobile sessions from target regions | Analytics | Is the portal accessible to mobile-dependent users? |
| Demographic representation in citizen science contributors | Optional self-report at registration | Is citizen science participation equitable? |

### Privacy-Aware Implementation

**For all users (including unregistered visitors):**
- Web analytics use a privacy-respecting platform (Plausible, Matomo self-hosted, or similar) that does not use cookies for tracking, does not collect personal data, and complies with COPPA and FERPA.
- No individual-level browsing data is stored or shared.
- Geographic data is collected at city or zip-code level only — no IP address logging.

**For registered users (citizen science participants, educators):**
- Registration collects only information necessary for the account function (name or pseudonym, email, role, approximate location).
- Citizen science observations are stored with user ID for contribution tracking but are de-identified before any evaluation or research use.
- Health-related observations (e.g., symptom reports, if implemented) are handled under IRB-approved protocols with explicit informed consent.
- Users can delete their accounts and associated data at any time.

**For minors (K-12 students):**
- Student-facing modules do not require accounts for basic use.
- If student accounts are implemented (for progress tracking), they are created under educator supervision with parental notification per COPPA/FERPA requirements.
- No student-identifiable data is used for evaluation without appropriate consent and IRB approval.
- Aggregated, de-identified classroom-level data may be used for program evaluation.

**For evaluation team access:**
- The Evaluator Portal provides aggregated dashboards and de-identified data exports.
- Individual-level data (e.g., survey responses) is accessible only under IRB-approved protocols.
- All evaluation data exports are logged for audit purposes.

### Dashboard Implementation

**Public Impact Dashboard (unauthenticated):**
Displays high-level summary statistics updated monthly: total participants reached, citizen science observations submitted, workshops delivered, states and communities served. Designed to communicate impact to stakeholders, funders, and the public. No sensitive or individual data.

**Internal Project Dashboard (authenticated, project team):**
Detailed, near-real-time metrics across all categories above. Filterable by date range, region, user group, and content type. Alerts for anomalies (e.g., sudden drop in module completions, spike in registration). Used for project management and continuous improvement.

**Evaluator Dashboard (authenticated, evaluation team):**
All metrics from the internal dashboard plus: de-identified survey response data, longitudinal engagement patterns, cohort analysis tools, and data export (CSV, JSON) for external analysis. Access logged and auditable.

---

## I. Content Strategy

### Content Types

The BREATHE portal produces and maintains the following content types. Each is defined with its purpose, audience, format, update cadence, and production responsibility.

---

**1. Mission Explainers**
- **Purpose:** Explain how MAIA, TEMPO, and other NASA missions relevant to air quality work, in language accessible to non-scientists.
- **Audience:** All users, especially students and community members.
- **Format:** Web page with embedded diagrams, animations, and short video clips. Downloadable as PDF fact sheets.
- **Update cadence:** Created once per mission, updated when significant mission milestones occur (e.g., new data products released, instrument changes).
- **Production:** BREATHE science team, reviewed by mission scientists.

**2. Guided Learning Modules**
- **Purpose:** Deliver standards-aligned learning experiences that build understanding of air quality, remote sensing, and health connections.
- **Audience:** Students (grades 5-12), with educator facilitation guides for classroom use.
- **Format:** Interactive web experience with embedded data tools, multimedia, and assessments. Companion downloadable materials (PDF, DOCX).
- **Update cadence:** New modules released quarterly in Years 1-2, then annually. Existing modules updated for data currency and standards alignment changes.
- **Production:** BREATHE education team, with science review and educator pilot testing.

**3. Lesson Plans and Educator Resources**
- **Purpose:** Provide teachers with ready-to-use or adaptable materials for integrating BREATHE content into their curricula.
- **Audience:** K-12 educators and informal education facilitators.
- **Format:** Downloadable bundles (lesson plan DOCX, student handouts PDF, presentation slides, rubrics, answer keys). Standards alignment metadata.
- **Update cadence:** Aligned with module releases. Updated for standards changes.
- **Production:** BREATHE education team, with teacher co-development and pilot feedback.

**4. Data Stories and Regional Case Studies**
- **Purpose:** Connect NASA data to specific communities, events, and health outcomes through narrative-driven content.
- **Audience:** Community members, educators (as teaching resources), general public, media.
- **Format:** Long-form web narrative with embedded maps, images, data visualizations, and community voices. Optimized for sharing.
- **Update cadence:** One to two new stories per quarter. Timely stories in response to air quality events (wildfires, industrial incidents).
- **Production:** BREATHE communications team, with science review and community input.

**5. Data Visualizations**
- **Purpose:** Make NASA satellite and ground-based data visually comprehensible for non-expert audiences.
- **Audience:** All users.
- **Format:** Interactive web maps, charts, and comparison tools. Static versions (PNG, PDF) for download and print.
- **Update cadence:** Data layers updated as new satellite data becomes available (daily for TEMPO, periodic for MAIA). Visualization tools updated for new features on a quarterly release cycle.
- **Production:** BREATHE data and technology team, with science review for accuracy.

**6. Workshop Toolkits**
- **Purpose:** Enable partner organizations to deliver BREATHE community workshops independently.
- **Audience:** Partner organization staff (promotoras, librarians, museum educators, community health workers).
- **Format:** Downloadable ZIP bundles containing: facilitator guide (bilingual), presentation slides (bilingual), participant handouts, pre/post surveys, promotional flyer template, short facilitator training video.
- **Update cadence:** New toolkits aligned with new workshop topics (two to three per year). Existing toolkits updated annually based on partner feedback.
- **Production:** BREATHE education and community engagement teams, with partner co-development.

**7. FAQs**
- **Purpose:** Address common questions about BREATHE, air quality, the portal, citizen science protocols, and data interpretation.
- **Audience:** All users.
- **Format:** Searchable, categorized web page. Bilingual.
- **Update cadence:** Updated continuously as new questions emerge from user feedback, workshop evaluations, and support requests.
- **Production:** BREATHE communications team, with input from all program areas.

**8. Partner Stories**
- **Purpose:** Highlight the work and impact of BREATHE partner organizations, building community and motivating continued engagement.
- **Audience:** Current and prospective partners, general public, funders.
- **Format:** Short web profiles (300-500 words) with photo, quotes, and impact metrics. Featured on the Partner Network page and in the News feed.
- **Update cadence:** One to two new stories per month.
- **Production:** BREATHE communications team, from partner interviews.

**9. Youth Explainers**
- **Purpose:** Provide accessible, age-appropriate explanations of air quality, health, and satellite science topics specifically designed for younger audiences (grades 5-8).
- **Audience:** Middle school students, families.
- **Format:** Short web pages (200-400 words) with large illustrations, simple language (Flesch-Kincaid grade 6 or below), and embedded interactive elements (e.g., clickable diagrams, simple quizzes). Bilingual.
- **Update cadence:** Created to accompany each new learning module.
- **Production:** BREATHE education team, tested with youth advisory group.

**10. Community Action Content**
- **Purpose:** Provide actionable guidance connecting air quality knowledge to personal and community health decisions.
- **Audience:** Community members, families, community health workers.
- **Format:** Short web pages and downloadable one-pagers (bilingual). Topics include: "What to do on high-pollution days," "How to talk to your doctor about air quality," "Reducing exposure at home," "Community air quality advocacy resources."
- **Update cadence:** Core set created in Year 1, expanded based on community partner input.
- **Production:** BREATHE community engagement and health science teams, reviewed by public health partners.
- **Important note:** All health-related content is reviewed by public health professionals and clearly distinguished from medical advice. Content directs users to healthcare providers for personal health questions.

---

### Editorial Tone and Voice

The BREATHE portal's editorial voice is defined by five principles, each responding to a specific communication challenge:

**Scientifically credible:**
Content uses precise scientific language where appropriate, always defines technical terms, and cites data sources explicitly. We do not say "studies show" without identifying the study. We do not round numbers in ways that misrepresent findings. We attribute data to specific NASA missions and instruments. When uncertainty exists — as it does in all Earth science observations — we name it honestly rather than hiding it. This credibility is the foundation of public trust.

**Inspiring without overhyping:**
We communicate the significance of NASA Earth science without sensationalism. We do not describe routine data as "stunning" or "groundbreaking." We let the data speak through clear, well-designed visualizations and let community impact stories carry emotional weight. When we highlight achievements, we are specific: "BREATHE participants in Houston collected 2,400 air quality observations in six months" is more powerful and more honest than "BREATHE is transforming how communities understand their air."

**Community-centered:**
Content is written from the perspective of the communities BREATHE serves, not from the perspective of the institutions that manage it. "Your neighborhood's air quality" rather than "our project's data product." Community members' voices, stories, and questions are prominently featured and presented with dignity. Partner organizations are recognized as co-creators, not as recipients of NASA largesse.

**Health and environment-aware:**
Air quality content inherently involves health implications, and many BREATHE communities face disproportionate environmental burdens. Content acknowledges these realities without being alarmist, and it never trivializes the lived experience of communities dealing with pollution, respiratory illness, or environmental injustice. Health information is presented with appropriate context and caveats. Content avoids blaming individuals for environmental exposures that have systemic causes.

**Accessible:**
Primary community-facing content targets a Flesch-Kincaid reading level of grade 8 or below, without being condescending. Technical content (e.g., data methodology documentation) is written at a higher level but is clearly labeled as such. Jargon is defined on first use and collected in glossaries. Sentence structure is direct and active. Visual design supports readability (adequate line length, spacing, font size). All content is available in both English and Spanish, with culturally adapted — not merely translated — Spanish versions.

---

## J. Technical and Platform Recommendations

### Front-End Framework

**Recommendation:** Next.js (React-based) with static site generation for content pages and server-side rendering for dynamic features.

**Rationale:** Next.js provides the performance characteristics needed for a content-heavy, public-facing portal (fast initial loads, SEO-friendly rendering) while supporting the complex interactive features (map explorer, data visualizations, authenticated dashboards) that BREATHE requires. The React ecosystem has the largest pool of geospatial and data visualization libraries. Next.js's incremental static regeneration allows content pages to be pre-built for speed while data-driven pages stay current.

**Alternatives considered:** Astro (lighter weight but less mature ecosystem for complex interactivity), Gatsby (similar to Next.js but declining community support), custom SPA (unnecessary complexity for content-heavy site).

### Content Management System (CMS)

**Recommendation:** Headless CMS (Strapi self-hosted, or Sanity cloud-hosted) for editorial content, coupled with a Git-based content pipeline for structured data (modules, lesson plans).

**Rationale:** A headless CMS separates content management from front-end presentation, allowing the BREATHE editorial team (who may not be developers) to create and update data stories, news posts, event listings, and partner profiles without code changes. Strapi (open source, self-hosted) minimizes long-term licensing costs and keeps data within project-controlled infrastructure. Sanity is a cloud alternative with excellent multilingual support if self-hosting capacity is limited. Structured educational content (modules with embedded assessments) is better managed through a version-controlled content pipeline (Markdown/MDX in Git) that allows technical review and quality assurance processes.

**MVP (Year 1):** Strapi or Sanity for editorial content; Markdown files in Git for modules.

**Later phases:** Custom CMS workflows for partner content submission and review, module authoring interface for the education team.

### Geospatial and Visualization Components

**Recommendation:**
- **Mapping:** MapLibre GL JS (open-source fork of Mapbox GL JS) or Mapbox GL JS (if budget allows commercial license). Both support vector tiles, custom styling, performant rendering of large datasets, and the interaction patterns (hover, click, layer toggle) the data explorer requires.
- **Data visualization:** Observable Plot or D3.js for charts and data graphics. Vega-Lite for standardized, reproducible data visualization specifications.
- **Satellite data tiling:** Integration with NASA Worldview / GIBS (Global Imagery Browse Services) for satellite imagery layers. Custom tile server (TiTiler or similar) for MAIA and TEMPO data products that are not yet in GIBS.

**Rationale:** The map explorer is the portal's most technically demanding feature. MapLibre/Mapbox GL provides the WebGL-based rendering performance needed for smooth interaction with multiple data layers. NASA's GIBS service provides pre-tiled satellite imagery optimized for web display, reducing the need for custom data processing infrastructure. D3.js is the standard for custom, accessible data visualizations in the browser.

### Accessibility

**Standard:** WCAG 2.1 Level AA compliance across all portal pages and features.

**Implementation:**
- Automated accessibility testing integrated into the development pipeline (axe-core, Lighthouse)
- Manual screen reader testing (NVDA, VoiceOver) for all interactive features before release
- Color palette validated for colorblind accessibility (all data visualizations use colorblind-safe palettes)
- Keyboard navigation support for all interactive elements, including the map explorer
- Text alternatives for all non-text content (alt text, long descriptions, data tables as map alternatives)
- Focus management for single-page-application navigation
- Reduced motion support (prefers-reduced-motion media query) for animations
- Minimum text size of 16px for body content, 14px for captions and metadata

### Analytics

**Recommendation:** Plausible Analytics (self-hosted or cloud) as the primary analytics platform.

**Rationale:** Plausible is privacy-respecting (no cookies, no personal data collection), GDPR/COPPA-compliant by design, lightweight (under 1KB script), and provides the core metrics BREATHE needs (page views, unique visitors, referrals, geographic distribution, device type, custom events) without the ethical and legal complications of Google Analytics. For detailed funnel analysis and event tracking (module starts/completions, downloads, citizen science submissions), custom event tracking integrated with the application code supplements Plausible's built-in capabilities.

**MVP (Year 1):** Plausible for web analytics; custom event tracking for module and citizen science workflows.

**Later phases:** Integration with evaluation dashboard for longitudinal analysis.

### Role-Based Access Management

**Recommendation:** Auth.js (NextAuth.js) with role-based access control (RBAC).

**Roles:**
- **Public (unauthenticated):** Access to all public content, data explorer, learning modules, resource library.
- **Registered User:** Public access plus citizen science submission, contribution tracking, newsletter preferences.
- **Educator:** Registered User access plus classroom dashboard (later phase), PD tracking, educator-only resources.
- **Partner:** Registered User access plus partner resources, activity reporting, co-branded materials.
- **Evaluator:** Authenticated access to evaluation dashboards and de-identified data exports.
- **Content Editor:** CMS access for editorial content creation and updates.
- **Administrator:** Full access including user management, system configuration, and analytics.

**Authentication:** Email/password with email verification. Social login (Google) as convenience option. No authentication required for core public content.

### Scalability

**Recommendation:** Static-first architecture with serverless functions for dynamic features. Hosting on a platform that supports automatic scaling (Vercel, AWS Amplify, or NASA-approved cloud infrastructure).

**Rationale:** The portal will experience variable traffic — spikes during air quality events, school year patterns, post-media-coverage surges. A static-first architecture serves pre-built pages from a CDN with near-zero marginal cost per visitor, while serverless functions handle dynamic requests (data queries, form submissions, authentication) with automatic scaling. This approach avoids the cost and complexity of maintaining always-on server infrastructure.

**Expected traffic:** Year 1: 5,000-20,000 monthly visitors. Year 5: 50,000-200,000 monthly visitors. Architecture should handle 10x spikes without degradation.

### Multilingual Architecture

**Recommendation:** Internationalized routing (e.g., `/en/explore-data` and `/es/explorar-datos`) with locale-aware content delivery from the CMS.

**Implementation:**
- Next.js built-in i18n routing for URL structure and language detection
- CMS content stored with locale variants (not separate pages — single content object with English and Spanish fields)
- UI strings managed through a translation file (JSON) in the codebase, reviewed by native speakers
- Language toggle persists user preference via a cookie or localStorage (no account required)
- Default language detected from browser settings, with easy override
- RTL support architecture in place (not needed for EN/ES but prepares for future languages)

### Low-Bandwidth Optimization

**Rationale:** Many BREATHE target communities, particularly in rural border regions, have limited internet bandwidth. The portal must be functional and useful on connections as slow as 3G.

**Implementation:**
- Static page generation minimizes server round-trips
- Images served in modern formats (WebP, AVIF) with responsive sizing
- Map explorer uses vector tiles (small file sizes compared to raster tiles)
- Critical CSS inlined; non-critical CSS and JavaScript lazy-loaded
- Data stories progressively load media as the user scrolls (intersection observer)
- Offline-capable citizen science submission (progressive web app, later phase)
- "Lite mode" toggle that disables animations and reduces image quality (stretch goal)
- Target: Lighthouse performance score of 90+ on simulated 3G connection

### NASA Interoperability

**Data sources and integration points:**
- **NASA GIBS (Global Imagery Browse Services):** Primary source for satellite imagery tiles in the map explorer. Standard WMTS/tile protocol.
- **NASA Earthdata / CMR (Common Metadata Repository):** For discovering and linking to MAIA and TEMPO data products.
- **NASA TEMPO Data (ASDC):** Level 2 and Level 3 data products accessed via OpenDAP or S3 (depending on distribution method). Custom processing pipeline to generate web-optimized tiles.
- **NASA MAIA Data:** Similar pipeline, timeline dependent on mission data availability.
- **GLOBE Observer:** API integration for GLOBE-aligned citizen science protocols, enabling BREATHE observations to flow into the GLOBE database.
- **NASA Open APIs:** For supplementary content (Astronomy Picture of the Day, NASA Image Library) if used in educational context.

**Standards compliance:**
- Metadata follows NASA/EOSDIS standards where applicable
- Data citations follow NASA data citation guidelines
- Portal acknowledges NASA funding per cooperative agreement requirements
- Accessibility meets Section 508 standards (aligned with WCAG 2.1 AA)

---

## K. Sustainability Strategy

### Design for Longevity

The BREATHE portal is designed from the outset to remain useful and maintainable beyond the five-year project period. Sustainability is not a Year 5 concern — it is a structural requirement embedded in every technical and content decision.

### Modular Content Architecture

All content is created in self-contained, modular units that can be individually updated, archived, or replaced without affecting the rest of the portal.

- **Learning modules** are standalone units with their own data dependencies clearly documented. If a satellite data product is retired or updated, only the affected module needs revision — not the entire module library.
- **Data stories** are timestamped and archived rather than deleted. Old stories remain accessible as historical records.
- **Workshop toolkits** are versioned, with clear indicators of currency ("Last updated: [date]").
- **Data layers** in the map explorer are individually configurable. If a data source becomes unavailable, the layer can be disabled with a user-facing explanation without breaking the explorer.

### Reusable Templates

Content templates reduce the effort required to produce new materials and ensure consistency:

- **Data story template:** Standardized structure (hook, data, community voice, context, action) with embedded map/chart placeholders. A trained content editor can produce a new data story in one to two days.
- **Learning module template:** Standardized section types (introduction, exploration, assessment, reflection) with pre-built interactive component library. A curriculum developer can build a new module in two to three weeks.
- **Workshop toolkit template:** Standardized package structure with bilingual facilitator guide, slides, and handout templates. A community engagement specialist can produce a new toolkit in one to two weeks.
- **Partner profile template:** Standardized web profile with structured fields. Partners can self-submit content for editorial review.

### Partner-Managed Workflows

Key portal activities are designed for partner self-service, reducing dependence on the central BREATHE team:

- **Event listing:** Partner organizations can submit events for display on the portal calendar, subject to editorial approval.
- **Activity reporting:** Partners submit workshop delivery reports through structured web forms, generating evaluation data without staff intervention.
- **Resource access:** Partners download materials directly from authenticated portal sections without requesting files from staff.
- **Community story submission:** Partners and community members can submit story ideas and draft content through web forms.

### Lightweight Maintenance Model

The portal's technical architecture minimizes ongoing maintenance burden:

- **Static-first architecture** means most pages are pre-built files served from a CDN — no database to maintain for content pages.
- **Headless CMS** separates content updates from code deployments. Content editors can publish new stories, events, and resources without developer involvement.
- **Automated dependency updates** (Dependabot or similar) flag security patches. Quarterly dependency review cycle.
- **Monitoring and alerting** (uptime monitoring, error tracking) enables reactive maintenance rather than constant oversight.

### Archiving Strategy

When the BREATHE project period ends:

- **Content preservation:** All portal content is exportable as static HTML files that can be hosted indefinitely on a minimal server or archived on NASA's web archive.
- **Data preservation:** All citizen science data, module content, and evaluation data are archived in standard formats (CSV, JSON, PDF) with metadata documentation.
- **Partner transition:** Workshop toolkits and educator resources are packaged for distribution through partner channels independent of the portal.
- **Domain and hosting:** Plan includes two to three years of post-project hosting budget or transition to a partner institution's infrastructure.

### Minimum Viable Budget Scenario

If funding is reduced or the portal must operate on minimal budget after the project period, the following tiered approach applies:

**Tier 1 — Archive Mode (near-zero cost):**
The portal is exported as a static site and hosted on a minimal server (e.g., GitHub Pages, Netlify free tier, or NASA web archive). All content remains accessible. Interactive features that require server-side processing (citizen science submission, authenticated dashboards) are disabled. Data explorer functions in a reduced capacity using pre-generated static map images rather than live data queries. No new content is produced.

**Tier 2 — Maintenance Mode ($5,000-$15,000/year):**
Static hosting plus a minimal server for the data explorer (using cached/archived data rather than live feeds) and citizen science submission (basic form with manual data handling). Content is not updated but remains accessible. A part-time staff member or graduate assistant provides quarterly maintenance.

**Tier 3 — Reduced Operations ($30,000-$60,000/year):**
Full portal functionality maintained with reduced content production (four to six new data stories per year, one to two new modules). No new feature development. Citizen science platform continues to accept submissions. Partner self-service features remain operational. One part-time staff member manages content and maintenance.

---

## L. Visual Identity Direction

### Overarching Aesthetic

The BREATHE portal's visual identity evokes the intersection of atmospheric science, Earth observation, public health, and community trust. The design feels like looking at Earth from space and then zooming in to a neighborhood — a sense of scale that connects the global to the personal. It is clean, professional, and credible without being clinical. It is warm and community-oriented without being informal or whimsical. It is a NASA project's portal, and it looks like one — but one designed for the public, not for scientists.

### Color Logic

**Primary palette:**

- **Atmosphere Blue (#1A5276 or similar deep blue):** The dominant brand color, evoking sky, atmosphere, and NASA institutional identity. Used for headers, primary navigation, and key CTAs. Dark enough for strong contrast with white text.
- **Clean Air Teal (#2ECC71 shifting to #1ABC9C range):** A secondary accent evoking breathable air, health, and environmental well-being. Used for positive indicators, success states, and community-focused content sections.
- **Alert Warm (#E67E22 to #E74C3C range):** A warm amber-to-red spectrum used sparingly and specifically for air quality alert levels and health caution indicators. Never used decoratively — reserved for meaning-carrying contexts.

**Neutral palette:**

- **Deep Navy (#0B1F3A):** For body text and headings. Softer than pure black, maintaining readability without harshness.
- **Warm Gray (#F2F3F4 to #D5D8DC range):** For backgrounds, card surfaces, and secondary UI elements. Avoids cold, sterile feeling.
- **White (#FFFFFF):** For content areas, ensuring maximum readability.

**Data visualization palette:**

- Air quality data uses established, colorblind-safe sequential palettes (viridis or cividis family) for continuous data, ensuring that meaning is conveyed by position and lightness, not only by hue.
- Categorical data uses a limited, distinguishable palette validated with colorblindness simulators.

**Color usage principles:**

- Color always carries meaning or structure; it is never purely decorative.
- All color-coded information has an accompanying text label or pattern alternative.
- Minimum 4.5:1 contrast ratio for text; 3:1 for large text and UI components.

### Typography

**Headings:** A clean sans-serif with presence and clarity. Recommended: Inter, Source Sans Pro, or Public Sans (the U.S. government open-source typeface, which signals institutional credibility and is freely licensed). Weight range: Semibold (600) for primary headings, Medium (500) for subheadings.

**Body text:** The same typeface family at Regular (400) weight, ensuring visual consistency. 16px minimum for body text on desktop, 15px on mobile. Line height of 1.5-1.6 for comfortable reading.

**Data labels and captions:** Same family at 13-14px, Medium weight. Used for map labels, chart axes, metadata, and timestamps.

**Monospace (for data values):** A complementary monospace typeface (e.g., JetBrains Mono, IBM Plex Mono) used only for displaying raw data values, sensor readings, and code-like content. Reinforces the precision and authenticity of data.

**Typography principles:**

- Maximum two typeface families across the entire portal.
- Type hierarchy is established through size, weight, and spacing — not through variety of typefaces.
- Spanish and English text use the same typefaces (chosen typefaces must have full Latin Extended character support including accented characters and Spanish punctuation).

### Visual Hierarchy

The portal uses a consistent hierarchy to help users orient themselves on any page:

1. **Page hero/header:** Full-width, visually prominent, establishes context. Contains page title, brief description, and primary CTA.
2. **Section headings:** Large (24-28px), semibold, with generous top margin (40-60px) creating clear content breaks.
3. **Content blocks:** Card-based layout for collections (modules, resources, events). Cards have consistent structure: image/icon, title, brief description, metadata tags, action link.
4. **Body content:** Comfortable measure (60-75 characters per line), adequate paragraph spacing, pull quotes and callout boxes for emphasis.
5. **Metadata and labels:** Small, understated, consistently positioned. Standards tags, dates, languages, durations — always present but never competing with primary content.

### Icon Style

- Line-based, consistent stroke weight (2px), rounded terminals.
- Simple and immediately recognizable at small sizes (24x24px minimum).
- Custom icons for key BREATHE concepts: satellite, air quality sensor, lungs/health, community group, data chart, map pin.
- Standard icons (from an open-source library like Lucide or Heroicons) for generic actions: download, search, filter, expand, close, menu.
- Icons always accompanied by text labels in navigation and primary UI. Icons alone may be used only in contexts where meaning is unambiguous (e.g., close button, language toggle).

### Imagery

**Photography:**
- Authentic imagery of BREATHE communities, participants, and activities — not stock photography. Budget for professional photography in Houston and border region communities during Year 1 pilot activities.
- When stock or library images are necessary (before original photography is available), select images that represent the demographic and geographic reality of the Texas pilot communities.
- All photographs of people require model releases and are used with consent. Community members are identified by name (with permission) or described respectfully.

**Satellite imagery:**
- NASA satellite imagery (MODIS, VIIRS, Landsat, Sentinel, TEMPO, MAIA) is used throughout the portal for visual identity and as data content.
- Full-resolution satellite images are used as hero backgrounds and section dividers, often with a subtle overlay or gradient to ensure text readability.
- Satellite imagery is always captioned with the instrument, date, and what is being shown.

**Illustrations and diagrams:**
- Clean, flat-style technical illustrations for explaining scientific concepts (how a satellite measures aerosols, how PM2.5 enters lungs, the nitrogen dioxide cycle).
- Consistent visual style across all illustrations: limited color palette (matching brand colors), clean lines, labeled components.
- Avoid cartoonish or overly simplified illustrations that might undermine scientific credibility.

**Maps:**
- Maps use a restrained base style (light gray or muted terrain) that foregrounds data layers rather than competing with them.
- NASA Blue Marble imagery used as an option for satellite base map view.

### Design Restraint

The BREATHE portal is not a technology demonstration or a design award entry. It is a tool for public engagement with science. Every visual choice serves communication, credibility, and usability. When in doubt, the design errs toward clarity over flair, consistency over novelty, and readability over visual density. The design should feel like a trusted public resource — not a startup landing page or a science museum exhibit.

---

## M. Deliverables for Proposal Team

### M1. One-Paragraph Portal Concept for NASA Proposal

The BREATHE portal (breathe.nasa-sciact.org or similar) is the project's primary digital platform for connecting NASA Earth observation science with public learning, community engagement, and citizen science participation. The portal integrates near-real-time data from the MAIA and TEMPO satellite missions with EPA ground monitoring and community-contributed observations in an interactive, map-based explorer that allows users — from middle-school students to community health workers — to investigate air quality conditions in their own neighborhoods. Standards-aligned learning modules guide students through the science of atmospheric remote sensing and its connections to human health, while a bilingual (English/Spanish) citizen science platform enables community members to contribute ground-truth observations that complement satellite measurements. The portal's educator hub provides downloadable, adaptable lesson plans and professional development resources, and its partner network tools support community organizations in delivering BREATHE workshops and reporting impact. Designed for equity — with mobile-first interfaces, low-bandwidth optimization, and culturally responsive bilingual content — the portal serves as the connective infrastructure for BREATHE's phased rollout from Texas pilot communities (Houston and the border region in Year 1) to national reach in Years 4-5, operationalizing the NASA Science Activation engagement model from awareness through learning, experience, and sustained scientific contribution.

### M2. Feature List for Figure/Diagram

The following feature list is formatted for use in a proposal figure or system architecture diagram:

**Data and Exploration**
- Interactive map-based data explorer (MAIA, TEMPO, EPA, citizen science layers)
- Guided data tours and story maps
- Compare-your-community tool
- MAIA and TEMPO mission spotlights
- Data download for partners (CSV, GeoJSON, PDF)

**Learning**
- Standards-aligned interactive learning modules (NGSS, TEKS)
- Youth explainers and glossaries
- Facilitator guides and educator resources
- Module pathways and progress tracking
- Professional development registration and micro-credentials

**Contribution**
- Citizen science observation submission (mobile-optimized)
- Multiple protocols (sensor readings, sky observations, community reports)
- Contribution tracking and recognition
- Community story submission
- Low-cost monitoring activity builder

**Community and Partnership**
- Bilingual content (English/Spanish)
- Event calendar and workshop registration
- Workshop toolkits for partner delivery
- Partner directory and activity reporting
- Community action resources

**Evaluation and Impact**
- Public impact dashboard
- Evaluator portal with analytics and data export
- Privacy-respecting web analytics
- Module completion and engagement tracking
- Geographic reach and equity indicators

**Technical Foundation**
- Mobile-first responsive design
- WCAG 2.1 AA accessibility
- Low-bandwidth optimization
- NASA data interoperability (GIBS, Earthdata, GLOBE)
- Role-based access (public, educator, partner, evaluator, admin)

### M3. Phased Build Plan (Years 1-5)

---

**Year 1: Foundation and Texas Pilot (MVP)**

*Q1-Q2: Core Build*
- Portal architecture, hosting, and CMS deployment
- Homepage, About BREATHE, and navigation framework
- Interactive map explorer (MVP: TEMPO NO2 and ozone, EPA AQI stations, Houston and RGV coverage)
- Bilingual framework (English/Spanish) implemented across all pages
- Two initial learning modules launched ("What Is Air Quality?", "Seeing the Invisible")
- Educator hub with initial lesson plan library (four to six lesson plans)
- Citizen science submission workflow (MVP: PurpleAir readings, sky observations)
- Privacy-respecting analytics deployed

*Q3-Q4: Content and Community*
- Two additional learning modules launched
- First three regional data stories published (Houston Ship Channel, border air quality, wildfire smoke)
- Community workshop and event calendar
- Partner network page with initial partner profiles
- Workshop toolkit for first community workshop
- Resource library with search and filter
- User testing with Texas pilot communities; accessibility audit and remediation
- Public impact dashboard (basic version)

**Deliverables by end of Year 1:** Functional bilingual portal with data explorer, four learning modules, six+ lesson plans, citizen science submission, three data stories, event calendar, partner directory, and resource library. Tested with Houston and border region pilot users.

---

**Year 2: Texas Expansion and Feature Depth**

*Q1-Q2:*
- MAIA data layer integration (pending mission data availability)
- Guided data tours (three to four tours covering key Texas pilot questions)
- Compare-your-community tool (basic two-location comparison)
- Four additional learning modules
- Educator professional development platform (registration, recorded sessions)
- Two additional workshop toolkits
- Partner activity reporting workflow
- Enhanced citizen science features (contribution tracking dashboard, badges)

*Q3-Q4:*
- Six additional data stories (expanding Texas coverage)
- Community story submission pathway
- Low-cost monitoring activity guide (static, downloadable)
- Educator classroom dashboard (basic: module completion tracking)
- Evaluator portal with detailed metrics dashboards
- MAIA mission spotlight page (updated with real data)
- Performance and accessibility optimization based on Year 1 analytics
- Additional lesson plans and educator resources based on teacher feedback

**Deliverables by end of Year 2:** Eight+ learning modules, twelve+ lesson plans, four+ workshop toolkits, nine+ data stories, compare tool, guided tours, educator dashboards, evaluator portal, partner reporting.

---

**Year 3: Maturation and Scale Preparation**

- Full integration of MAIA and TEMPO data layers with time-series capabilities
- Interactive story map builder for educators and partners
- Low-cost monitoring activity builder (interactive, web-based)
- Citizen science protocol expansion (odor reports, community environment reports)
- LMS integration pilot (Google Classroom, Canvas) for educator dashboard
- Mobile progressive web app for field data collection (offline capable)
- Content expansion: modules covering advanced topics (environmental justice, health disparities, atmospheric chemistry)
- National expansion content planning (identifying Year 4-5 pilot regions)
- Comprehensive accessibility audit and remediation
- Partner self-service content submission workflows
- Annual evaluation integration and reporting features

**Deliverables by end of Year 3:** 12+ modules, comprehensive educator and partner toolkits, offline-capable mobile submission, story map builder, mature evaluation infrastructure. Portal ready for national expansion.

---

**Year 4: National Pilot Expansion**

- Portal content expanded to cover two to three new regions beyond Texas
- Regional data stories and case studies for new regions
- New learning modules reflecting expanded geographic and scientific scope
- Partner onboarding and training for new regions
- Citizen science protocols adapted for new geographic contexts
- Multilingual exploration (additional languages based on expansion regions, if warranted)
- Advanced data analysis tools for engaged citizen scientists
- Integration with additional NASA data products as available
- Educator micro-credential program launch
- Public API for partner data access (if demand warrants)

---

**Year 5: National Scale and Sustainability**

- Full national coverage in data explorer and content
- Sustainability transition planning: partner capacity building, content archiving, maintenance handoff documentation
- Static site export and archiving preparation
- Final evaluation data collection and reporting features
- Legacy content packaging for long-term accessibility
- Partner network self-governance tools
- Documentation of all systems, workflows, and content standards for post-project maintenance
- Celebration and recognition content (five-year impact retrospective)

---

### M4. Risks and Pitfalls to Avoid

**1. Building too much portal, too early.**
The most common failure mode for NASA education portals is over-building in Year 1 — launching with dozens of features that are each half-finished rather than a focused set that works well. The phased plan above deliberately constrains Year 1 to a functional MVP. The temptation to add "just one more feature" before launch must be resisted. A polished portal with four excellent modules is vastly more valuable than a sprawling portal with twelve mediocre ones.

**2. Treating bilingual content as translation rather than localization.**
Passing English content through a translator — even a skilled human translator — and calling it "bilingual" is a well-documented failure pattern. Spanish-language content must be culturally adapted, not just linguistically translated. This means Spanish-speaking team members and community partners involved in content creation from the start, not brought in for review after English content is finalized. Budget and timeline must account for true bilingual content production, which takes roughly 1.5 times the effort of monolingual production (not 2x, because shared assets like data visualizations and images transfer across languages).

**3. Satellite data latency and availability assumptions.**
The portal design assumes that MAIA and TEMPO data will be available for integration on specific timelines. Satellite missions experience delays, instrument anomalies, and data product revisions. The portal architecture must gracefully handle missing or delayed data layers — showing EPA ground data and citizen science observations as the primary data while satellite layers are labeled "coming soon" or "temporarily unavailable." Never promise real-time satellite data in public-facing content; use "near-real-time" or specify the actual latency.

**4. Citizen science participation drop-off.**
Initial enthusiasm for citizen science protocols typically produces a burst of contributions followed by steep decline. The portal design addresses this with contribution tracking, badges, community maps, and feedback loops — but these are not sufficient alone. Sustained participation requires ongoing community relationships managed by partner organizations, not by portal features. The portal supports retention; it does not drive it. Budget for community engagement staff accordingly.

**5. Accessibility as afterthought.**
Retrofitting accessibility into a launched portal is three to five times more expensive than building it in from the start. Accessibility testing must be integrated into the development pipeline from Day 1. This means: automated testing in CI/CD, manual screen reader testing before every major release, and user testing with people who use assistive technologies. The accessibility budget is not a separate line item — it is embedded in every development task.

**6. Data visualization complexity for non-expert users.**
The map explorer is the portal's flagship feature, but complex geospatial tools routinely fail usability testing with general public audiences. The guided data tours exist specifically to address this — they are not optional niceties but essential scaffolding. Plan for multiple rounds of usability testing with representative community members (not just scientists and educators) and be prepared to simplify the default map view substantially based on testing results. The most common user complaint with data portals is "I don't know what I'm looking at."

**7. Scope creep from stakeholder enthusiasm.**
BREATHE involves multiple institutions, NASA centers, community partners, and advisory boards. Each stakeholder will have ideas for portal features. Without disciplined scope management, the portal will accumulate commitments that exceed development capacity. Establish a clear feature request and prioritization process early, and communicate the phased build plan to all stakeholders so they understand that their idea may be a Year 3 feature, not a Year 1 feature.

**8. Neglecting content maintenance after launch.**
A portal with outdated event listings, broken data links, or stale "featured" content from six months ago communicates neglect and erodes trust. The content strategy must include realistic maintenance commitments: who updates the event calendar weekly, who publishes new data stories monthly, who checks for broken links quarterly. These are editorial roles, not development roles, and they must be staffed throughout the project.

**9. Over-reliance on the portal as the primary engagement channel.**
The portal is critical infrastructure, but BREATHE's impact depends on human relationships — between educators and students, between promotoras and families, between scientists and community members. The portal supports these relationships; it does not replace them. Proposal language should position the portal as the connective infrastructure for a network of human-centered programs, not as the program itself.

**10. Ignoring mobile-first design in practice.**
Stating "mobile-friendly" in a proposal is easy; actually designing and testing for mobile use is hard. In BREATHE's target communities, smartphones are often the primary or only internet-connected device. The citizen science submission workflow, community air quality viewer, and event registration must be designed for mobile first and desktop second — not the reverse. This requires mobile-specific wireframes, touch-target testing, and field testing on actual mid-range Android devices (not just the latest iPhones in the development team's pockets).

---

*This document is prepared for the BREATHE proposal team and is intended to support NASA Science Activation proposal development, Year 1 planning, and stakeholder alignment. It should be treated as a living document, updated as project decisions are made and community input is integrated.*

*Prepared March 2026.*
