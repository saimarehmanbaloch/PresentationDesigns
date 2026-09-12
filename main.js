/**
 * Renders the filter pills and deck grid from the `portfolioItems` array
 * defined in js/data.js. You should not need to edit this file to add
 * new portfolio pieces — just edit js/data.js.
 */

const ICONS = {
  pdf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/><path d="M9 15h6M9 11h6"/></svg>',
  slides: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="13" rx="1.5"/><path d="M8 21h8"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 15l6-6"/><path d="M11 6l1-1a4 4 0 015.5 5.5l-1 1"/><path d="M13 18l-1 1A4 4 0 016.5 13.5l1-1"/></svg>',
  image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="1.5"/><path d="M21 15l-5-5-9 9"/></svg>'
};

function assetIcon(type){
  return ICONS[type] || ICONS.link;
}

function renderDeckCard(item, index){
  const number = String(index + 1).padStart(2, "0");

  const tags = item.tags
    .map(t => `<span class="tag">${t}</span>`)
    .join("");

  const assets = item.assets
    .map(a => `<a class="asset-link" href="${a.url}" target="_blank" rel="noopener">${assetIcon(a.type)}${a.label}</a>`)
    .join("");

  return `
    <article class="deck-card" data-category="${item.category}">
      <div class="deck-thumb">
        <span class="deck-number">Deck ${number}</span>
        <img src="${item.thumbnail}" alt="Thumbnail for ${item.title}" loading="lazy">
      </div>
      <div class="deck-body">
        <div class="deck-meta"><span>${item.category}</span><span>${item.year}</span></div>
        <h3>${item.title}</h3>
        <p class="deck-client">${item.client}</p>
        <p class="deck-desc">${item.description}</p>
        <div class="deck-tags">${tags}</div>
        <div class="deck-assets">${assets}</div>
      </div>
    </article>
  `;
}

function renderGrid(items){
  const grid = document.getElementById("deckGrid");
  if(!items.length){
    grid.innerHTML = `<p class="empty-state">No decks in this category yet.</p>`;
    return;
  }
  grid.innerHTML = items.map((item, i) => renderDeckCard(item, i)).join("");
}

function renderFilters(items){
  const filterBar = document.getElementById("filters");
  const categories = ["All", ...new Set(items.map(i => i.category))];

  filterBar.innerHTML = categories
    .map((cat, i) => `<button class="filter-btn${i === 0 ? " active" : ""}" data-category="${cat}">${cat}</button>`)
    .join("");

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if(!btn) return;

    filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;
    const filtered = category === "All"
      ? items
      : items.filter(i => i.category === category);

    renderGrid(filtered);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFilters(portfolioItems);
  renderGrid(portfolioItems);

  // Mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const mobileNav = document.getElementById("mobileNav");
  navToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();
});
