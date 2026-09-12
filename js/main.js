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

function monogram(title) {
  return title.split(' ').filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('');
}

function cardHTML(deck) {
  const thumb = deck.thumb
    ? `<div class="deck-thumb"><img src="${deck.thumb}" alt=""></div>`
    : `<div class="deck-thumb">${monogram(deck.title)}</div>`;
  return `
    <article class="deck-card">
      ${thumb}
      <div class="deck-body">
        <p class="deck-cat">${deck.category}</p>
        <h3 class="deck-title">${deck.title}</h3>
        <p class="deck-desc">${deck.description}</p>
        <a class="deck-link" href="${deck.link}">View project →</a>
      </div>
    </article>`;
}

function renderDecks(filter = 'All') {
  if (!grid) return;
  const list = filter === 'All' ? decks : decks.filter(d => d.category === filter);
  grid.innerHTML = list.map(cardHTML).join('');
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