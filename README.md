# Presentation Design Portfolio

A responsive portfolio site for showcasing presentation/slide design work,
built for GitHub Pages. No build step, no framework — just HTML, CSS, and
vanilla JS, so it will run directly on GitHub Pages as-is.

## File structure

```
index.html            The page itself (hero, about, deck library, contact)
css/style.css          All styling and the color/type "design tokens"
js/data.js             ← THE FILE YOU EDIT to add/update/remove decks
js/main.js              Renders the filters + grid from data.js (no need to edit)
img/thumbnails/         Deck thumbnail images (placeholders included)
img/profile-placeholder.svg   Your profile photo (replace this)
```

## Publish it on GitHub Pages

1. Copy all files in this folder into the root of your
   `PresentationDesigns` repository (or a `docs/` folder if you'd rather
   serve from there — just update the Pages source setting to match).
2. Commit and push.
3. In the repo's **Settings → Pages**, make sure the source is set to the
   branch/folder you pushed to. Your site is already live at
   `https://saimarehmanbaloch.github.io/PresentationDesigns/`, so it will
   update automatically after a push.

## Add a new deck to the portfolio

You only need to edit **`js/data.js`**. Everything else regenerates itself.

1. Add a thumbnail image to `img/thumbnails/` — 16:9 works best
   (e.g. 1280×720px `.jpg`/`.png`/`.webp`, or an `.svg`).
2. Open `js/data.js` and copy one of the existing objects in the
   `portfolioItems` array.
3. Fill in the fields:
   - `id` — a unique short string, no spaces
   - `title`, `client`, `year`
   - `category` — reuse an existing category to group related work
     together, or add a new one (a new filter pill appears automatically)
   - `description` — 1–3 sentences
   - `thumbnail` — path to the image you added in step 1
   - `tags` — a few short skill/format labels
   - `assets` — links to the actual files people can view/download, e.g.:
     ```js
     assets: [
       { label: "View PDF", url: "files/my-deck.pdf", type: "pdf" },
       { label: "Open slides", url: "https://docs.google.com/...", type: "slides" }
     ]
     ```
     `type` controls which icon is shown: `"pdf"`, `"slides"`, `"link"`, or `"image"`.
4. Save. Refresh the page (or push to GitHub) — the new deck appears in
   the grid and its category shows up as a filter pill automatically.

### Hosting the actual deck files

- **PDFs**: drop them in a folder like `/files/` in this repo and link to
  `files/your-file.pdf` — GitHub Pages will serve it directly.
- **Editable slides**: link out to Google Slides ("Anyone with the link
  can view"), or a shared PowerPoint/Keynote link.
- Keep files reasonably small — GitHub has a 100MB per-file limit and
  Pages sites are meant for static content, not large media hosting.

## Placeholders to replace before launch

- `img/profile-placeholder.svg` → your real photo (used in the About section)
- The six sample decks in `js/data.js` → your real work (or delete the
  ones you don't need — the grid re-flows automatically)
- Email address and LinkedIn/GitHub links in `index.html` (appears in the
  About section, the Contact section, and the footer)
- The bio text in the `<section class="about">` block in `index.html`

## Customizing the look

All colors and fonts are defined as CSS custom properties at the top of
`css/style.css`, under `:root`. Changing a value there (e.g. `--gold`)
updates it everywhere on the page.
