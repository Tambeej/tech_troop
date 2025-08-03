export default class Marquee {
  constructor(containerElement, stocksData) {
    this.container = containerElement;
    this.stocks = stocksData || [];
  }

  async fetchStockData() {
    try {
      const url = `https://financialmodelingprep.com/api/v3/stock/list?limit=20&apikey=qcUtnRSssrsmSFksSYhDaPvCoowkGFAH`;
      const response = await fetch(url);
      const data = await response.json();
      return data
        .filter((stock) => stock.exchangeShortName === "NASDAQ")
        .slice(0, 20);
    } catch (error) {
      console.error("Failed to fetch stock data:", error);
      return [];
    }
  }

  render(stockList) {
    this.container.innerHTML = `
      <div class="marquee-track">
        <div class="marquee-inner" id="marquee-content"></div>
        <div class="marquee-inner" id="marquee-duplicate"></div>
      </div>
    `;

    const contentEl = this.container.querySelector("#marquee-content");
    const duplicateEl = this.container.querySelector("#marquee-duplicate");

    const html = stockList
      .map(
        (stock) => `
      <span class="stock-item">
        <strong class="stock-symbol">${stock.symbol}</strong>:
        <span class="stock-price">($${Number(stock.price).toFixed(2)})</span>
      </span>
    `
      )
      .join("");

    contentEl.innerHTML = html;
    duplicateEl.innerHTML = html;
  }

  async init() {
    const stocks = this.stocks.length
      ? this.stocks
      : await this.fetchStockData();
    this.render(stocks);
  }
}
