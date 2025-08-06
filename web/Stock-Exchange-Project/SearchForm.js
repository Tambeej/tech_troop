class SearchForm {
  constructor(container) {
    this.container = container;
    this.form = document.createElement("form");
    this.input = document.createElement("input");
    this.input.placeholder = "Enter stock name or symbol";
    this.input.type = "text";
    this.button = document.createElement("button");
    this.button.textContent = "Search";
    this.form.appendChild(this.input);
    this.form.appendChild(this.button);
    this.container.appendChild(this.form);
    this.searchHandler = null;
    this.apiKey = process.env.API_KEY; //'qcUtnRSssrsmSFksSYhDaPvCoowkGFAH';

    this.form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const query = this.input.value.trim().toLowerCase();
      if (!query) return;

      const res = await fetch(
        "https://financialmodelingprep.com/api/v3/search?query=" +
          query +
          `&limit=10&exchange=NASDAQ&apikey=${this.apiKey}'`
      );
      const companies = await res.json();
      if (this.searchHandler) this.searchHandler(companies);
    });
  }

  onSearch(cb) {
    this.searchHandler = cb;
  }
}
