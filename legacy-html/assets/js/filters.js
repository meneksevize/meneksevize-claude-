document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('[data-filter-card]');
  const groups = document.querySelectorAll('[data-filter-group]');
  const noResults = document.getElementById('noResults');
  const state = {};

  if (!cards.length || !groups.length) return;

  groups.forEach((group) => {
    const groupName = group.dataset.filterGroup;
    state[groupName] = 'all';

    group.querySelectorAll('.filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        state[groupName] = btn.dataset.filterValue;
        applyFilters();
      });
    });
  });

  function applyFilters() {
    let visibleCount = 0;

    cards.forEach((card) => {
      const matches = Object.entries(state).every(([group, value]) => {
        if (value === 'all') return true;
        const cardValues = (card.dataset[group] || '').split(' ');
        return cardValues.includes(value);
      });

      card.classList.toggle('is-hidden', !matches);
      if (matches) visibleCount += 1;
    });

    if (noResults) {
      noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }
});
