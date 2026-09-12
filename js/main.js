// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// ---- Mobile nav ----
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');
if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  mobileNav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// ---- Deck library ----
const grid = document.getElementById('deckGrid');
const filtersEl = document.getElementById('filters');

function cardHTML(deck, index) {
  const number = String(index + 1).padStart(2, '0');

  const thumb = deck.thumb
    ? `<div class="deck-thumb"><span class="deck-number">${number}</span><img src="${deck.thumb}" alt="${deck.title}"></div>`
    : `<div class="deck-thumb"><span class="deck-number">${number}</span></div>`;

  const tags = (deck.tags || [])
    .map(t => `<span class="tag">${t}</span>`)
    .join('');

  const assets = (deck.assets || [])
    .map(a => `<a class="asset-link" href="${a.href}">${a.label} →</a>`)
    .join('');

  return `
    <article class="deck-card">
      ${thumb}
      <div class="deck-body">
        <div class="deck-meta">
          <span>${deck.category}</span>
          <span>${deck.year || ''}</span>
        </div>
        <h3>${deck.title}</h3>
        ${deck.client ? `<p class="deck-client">${deck.client}</p>` : ''}
        <p class="deck-desc">${deck.description}</p>
        ${tags ? `<div class="deck-tags">${tags}</div>` : ''}
        ${assets ? `<div class="deck-assets">${assets}</div>` : ''}
      </div>
    </article>`;
}

function renderDecks(filter = 'All') {
  if (!grid) return;
  const list = filter === 'All' ? decks : decks.filter(d => d.category === filter);
  grid.innerHTML = list.map((d, i) => cardHTML(d, i)).join('');
}

function renderFilters() {
  if (!filtersEl) return;
  const cats = ['All', ...new Set(decks.map(d => d.category))];
  filtersEl.innerHTML = cats
    .map((c, i) => `<button class="filter-btn${i === 0 ? ' active' : ''}" data-cat="${c}">${c}</button>`)
    .join('');
  filtersEl.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filtersEl.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderDecks(btn.dataset.cat);
    });
  });
}

renderFilters();
renderDecks();