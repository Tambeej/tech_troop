class SearchResult {
  constructor(container) {
    this.container = container;
  }

  renderResults(companies) {
    this.container.innerHTML = '';
    if (!companies.length) {
      this.container.textContent = 'No results found.';
      return;
    }

    const list = document.createElement('ul');
    companies.forEach(c => {
      const li = document.createElement('li');
      li.textContent = `${c.name} (${c.symbol})`;
      list.appendChild(li);
    });
    this.container.appendChild(list);
  }
}
