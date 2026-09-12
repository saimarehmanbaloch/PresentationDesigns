/**
 * DECK LIBRARY DATA
 * -----------------
 * This is the only file you need to edit to add, remove, or update a
 * portfolio piece. Everything on the page is generated from this array
 * by js/main.js — you never need to touch the HTML or CSS to add a deck.
 *
 * TO ADD A NEW DECK:
 *   1. Drop a thumbnail image into img/thumbnails/ (16:9 works best,
 *      e.g. 1280x720px, .jpg/.png/.webp — or use an .svg like the samples).
 *   2. Copy one of the objects below and edit every field.
 *   3. Give it a unique "id".
 *   4. Add real links under "assets" (a PDF in this repo, a Google Slides
 *      link, a Behance/Dribbble link, whatever you use to share it).
 *   5. Save the file — that's it, no other changes needed.
 *
 * FIELD REFERENCE:
 *   id          - unique short string, no spaces (used internally)
 *   title       - deck / presentation title
 *   client      - who it was made for (or "Personal project")
 *   year        - year completed, as a string
 *   category    - one short label, used to build the filter pills
 *                 (reuse an existing category to group work together)
 *   description - 1-3 sentences on the brief, the approach, or the result
 *   thumbnail   - path to the thumbnail image
 *   tags        - short skill/format tags shown on the card
 *   assets      - array of { label, url, type } for related files/links
 *                 "type" controls the icon: "pdf" | "slides" | "link" | "image"
 */

const portfolioItems = [
  {
    id: "brand-strategy",
    title: "Brand Strategy for Northline",
    client: "Northline Goods",
    year: "2025",
    category: "Brand & Strategy",
    description:
      "A 38-slide positioning deck built to align a founding team around a new brand platform, from market read to visual identity direction.",
    thumbnail: "img/thumbnails/brand-strategy.svg",
    tags: ["Strategy deck", "Keynote", "Data viz"],
    assets: [
      { label: "View PDF", url: "#", type: "pdf" },
      { label: "Open slides", url: "#", type: "slides" }
    ]
  },
  {
    id: "investor-pitch",
    title: "Series A Pitch Deck",
    client: "Loomwork",
    year: "2025",
    category: "Investor Decks",
    description:
      "Redesigned a 16-slide fundraising deck to lead with traction, simplify the market story, and give the numbers room to breathe.",
    thumbnail: "img/thumbnails/investor-pitch.svg",
    tags: ["Pitch deck", "PowerPoint", "Charts"],
    assets: [
      { label: "View PDF", url: "#", type: "pdf" }
    ]
  },
  {
    id: "product-launch",
    title: "Product Launch Keynote: Halo",
    client: "Halo Devices",
    year: "2024",
    category: "Keynotes",
    description:
      "A 42-slide launch keynote for a hardware reveal, designed for a live stage presentation with a large screen and low ambient light.",
    thumbnail: "img/thumbnails/product-launch.svg",
    tags: ["Keynote", "Stage deck", "Motion"],
    assets: [
      { label: "Open slides", url: "#", type: "slides" },
      { label: "Watch recording", url: "#", type: "link" }
    ]
  },
  {
    id: "conference-talk",
    title: "The Future of Async Work",
    client: "RemoteConf 2025",
    year: "2025",
    category: "Conference Talks",
    description:
      "A conference talk deck built around one idea per slide, designed to hold its own on a shared screen from the back of the room.",
    thumbnail: "img/thumbnails/conference-talk.svg",
    tags: ["Talk deck", "Google Slides"],
    assets: [
      { label: "Open slides", url: "#", type: "slides" }
    ]
  },
  {
    id: "workshop-slides",
    title: "Design Sprint Workshop Kit",
    client: "Internal / facilitation",
    year: "2024",
    category: "Workshops",
    description:
      "A modular facilitation deck for a 5-day design sprint, with reusable timer slides, activity instructions, and templated worksheets.",
    thumbnail: "img/thumbnails/workshop-slides.svg",
    tags: ["Facilitation", "Template system"],
    assets: [
      { label: "View PDF", url: "#", type: "pdf" },
      { label: "Get template", url: "#", type: "link" }
    ]
  },
  {
    id: "annual-report",
    title: "FY25 Annual Report Deck",
    client: "Board & stakeholder review",
    year: "2025",
    category: "Reports",
    description:
      "A 60-slide year-in-review deck translating a dense financial report into a clear, presentable narrative for a board audience.",
    thumbnail: "img/thumbnails/annual-report.svg",
    tags: ["Report deck", "Charts", "PowerPoint"],
    assets: [
      { label: "View PDF", url: "#", type: "pdf" }
    ]
  }
];
