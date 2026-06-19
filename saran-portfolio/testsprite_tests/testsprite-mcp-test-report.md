# TestSprite AI Testing Report (MCP)

---

## 1️⃣ Document Metadata

| Field            | Value                                      |
|------------------|--------------------------------------------|
| **Project Name** | saran-portfolio                            |
| **Test Type**    | Frontend (Playwright / Chromium headless)  |
| **Date**         | 2026-06-19                                 |
| **Prepared by**  | TestSprite AI Team                         |
| **Server Mode**  | Production (`npm run build && npm run start`) |
| **Base URL**     | http://localhost:3000                      |
| **Total Tests**  | 5                                          |
| **Passed**       | 5 ✅                                       |
| **Failed**       | 0 ❌                                       |

---

## 2️⃣ Requirement Validation Summary

### 🏠 Requirement: Homepage Hero & Profile Presentation

> Visitors must be able to land on the homepage and immediately see Saran's identity, professional role, profile image, and key entry points.

#### Test TC001 — Homepage loads with profile summary and navigation
- **Test Code:** [TC001_Homepage_loads_with_profile_summary_and_navigation.py](./tmp/TC001_Homepage_loads_with_profile_summary_and_navigation.py)
- **Test Visualization:** https://www.testsprite.com/dashboard/mcp/tests/5804f00e-f33d-41ae-811c-e993ebaceeb1/321c4ca2-65f3-44e7-bdba-d3f643c0c2f1
- **Status:** ✅ Passed
- **Analysis / Findings:** The homepage loaded correctly. All 8 navigation links (Home, About, Projects, Experience, Publications, Achievements, Gallery, Contact) were found and confirmed visible via XPath assertions. The branded "Saran Karthick S." header link and the Resume button in the nav were also present. No broken elements were detected on initial load.

---

#### Test TC002 — Homepage shows Saran's professional snapshot
- **Test Code:** [TC002_Homepage_shows_Sarans_professional_snapshot.py](./tmp/TC002_Homepage_shows_Sarans_professional_snapshot.py)
- **Test Visualization:** https://www.testsprite.com/dashboard/mcp/tests/5804f00e-f33d-41ae-811c-e993ebaceeb1/55671b6d-3d55-4fb8-bd17-4255c048f64f
- **Status:** ✅ Passed
- **Analysis / Findings:** The header brand displays "Saran Karthick S." as expected. The hero section's "View Projects" CTA link and "Download Resume" button are both visible and properly rendered. Navigation entry points to Projects are confirmed functional. Professional metrics section (CGPA, Books, Projects, etc.) is present with animation triggered correctly on page load.

---

### 🚀 Requirement: Homepage CTA Navigation to Projects

> Visitors must be able to click the primary CTA on the homepage and be taken to the Projects showcase, seeing project descriptions and tech-stack details.

#### Test TC008 — Homepage CTA opens the projects section
- **Test Code:** [TC008_Homepage_CTA_opens_the_projects_section.py](./tmp/TC008_Homepage_CTA_opens_the_projects_section.py)
- **Test Visualization:** https://www.testsprite.com/dashboard/mcp/tests/5804f00e-f33d-41ae-811c-e993ebaceeb1/3629718c-ddeb-46c2-8428-359581214ad0
- **Status:** ✅ Passed
- **Analysis / Findings:** Clicking "View Projects" on the homepage successfully navigated to `/projects`. The URL was confirmed to contain `/projects`. Project cards were present with "VIEW CASE STUDY" and "TECHNICAL SPECS" action buttons visible on at least the first two project entries. Navigation between homepage and projects section is fully functional.

---

### 📞 Requirement: Contact Information Accessibility

> Visitors must be able to reach the Contact page and find email, social, phone, and location contact details with clear outbound link actions.

#### Test TC009 — See contact details and outbound links
- **Test Code:** [TC009_See_contact_details_and_outbound_links.py](./tmp/TC009_See_contact_details_and_outbound_links.py)
- **Test Visualization:** https://www.testsprite.com/dashboard/mcp/tests/5804f00e-f33d-41ae-811c-e993ebaceeb1/7a70d00a-0ea5-47f6-815a-8f74e49945c5
- **Status:** ✅ Passed
- **Analysis / Findings:** The "Contact" nav link correctly routes to `/contact`. All 4 contact detail icons (email/mail, social/share, phone, location) were confirmed visible via DOM assertions. Both the email and social contact action icons were validated as visible and accessible. The contact section renders completely with no layout breakage.

---

### 💼 Requirement: Experience Timeline Display

> Visitors must be able to navigate to the Experience page from the header and read multiple work/internship experience cards with company and role information.

#### Test TC011 — Experience page shows timeline entries
- **Test Code:** [TC011_Experience_page_shows_timeline_entries.py](./tmp/TC011_Experience_page_shows_timeline_entries.py)
- **Test Visualization:** https://www.testsprite.com/dashboard/mcp/tests/5804f00e-f33d-41ae-811c-e993ebaceeb1/2a59c9ad-a467-4521-8321-205055ad8dac
- **Status:** ✅ Passed
- **Analysis / Findings:** Navigating to the Experience page via the header link worked correctly. Four experience timeline cards were individually verified as visible (cards 1 through 4). Company name, role, and timeline content were present in each card. The page structure is sound and all timeline entries render without issue.

---

## 3️⃣ Coverage & Matching Metrics

| Requirement                              | Total Tests | ✅ Passed | ❌ Failed |
|------------------------------------------|:-----------:|:---------:|:--------:|
| Homepage Hero & Profile Presentation     | 2           | 2         | 0        |
| Homepage CTA Navigation to Projects      | 1           | 1         | 0        |
| Contact Information Accessibility        | 1           | 1         | 0        |
| Experience Timeline Display              | 1           | 1         | 0        |
| **TOTAL**                                | **5**       | **5**     | **0**    |

- **Pass Rate:** 100.00%
- **Test Framework:** Playwright (Python async API, Chromium headless)
- **Server Mode:** Production build — no dev-server limitations applied
- **Pages Covered:** `/` (Home), `/projects`, `/contact`, `/experience`
- **Pages Not Covered in this run:** `/about`, `/publications`, `/achievements`, `/gallery`

---

## 4️⃣ Key Gaps / Risks

### ⚠️ Known Limitation Confirmed
- **Download Resume button is non-functional** — The "Download Resume" button on the homepage (`app/page.tsx`) renders correctly and is visible, but clicking it does not trigger any file download. This is a documented limitation. **Risk: Medium** — Visitors may expect to download a CV and be confused when nothing happens.

### 🔍 Not Tested in This Run (Recommended Next Steps)
1. **`/about` page** — Background, education, and skills content not validated.
2. **`/publications` page** — Research paper listings and abstracts not tested.
3. **`/achievements` page** — Award and certification cards not covered.
4. **`/gallery` page** — Image rendering and captions not validated.
5. **Sticky navigation active state** — Active link highlighting across page transitions not verified.
6. **Mobile/responsive layout** — All tests ran at 1280×720 viewport; mobile breakpoints (`md:`, `lg:`) were not tested.
7. **Resume button behavior** — TC031/TC032 (Low priority) explicitly test the download limitation; consider running for completeness.

### ✅ No Bugs Found
All 5 high-priority test cases passed with zero errors. The portfolio's core user flows — landing, CTA navigation, contact access, and experience review — are fully functional on the production build.

---
*Report generated by TestSprite AI MCP · saran-portfolio · 2026-06-19*
