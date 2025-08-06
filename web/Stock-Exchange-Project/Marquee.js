export default class Marquee {
  constructor(container) {
    this.container = container;
  }

  async load() {
    try {
      // const response = await fetch(
      //   "https://financialmodelingprep.com/api/v3/stock/list?limit=20&apikey=qcUtnRSssrsmSFksSYhDaPvCoowkGFAH"
      // );
      // if (!response.ok) throw new Error("Failed to fetch stock data");
      // const data = await response.json();
      let data = [
        {
          symbol: "ESGD",
          name: "iShares ESG Aware MSCI EAFE ETF",
          price: 87.05,
          exchange: "NASDAQ Global Market",
          exchangeShortName: "NASDAQ",
          type: "etf",
        },
        {
          symbol: "ELUT",
          name: "Elutia Inc.",
          price: 2.04,
          exchange: "NASDAQ Capital Market",
          exchangeShortName: "NASDAQ",
          type: "stock",
        },
      ];
      const stocks = data.slice(0, 20).map((stock) => ({
        name: stock.symbol,
        price: stock.price,
      }));
      this.render(stocks);
    } catch (error) {
      console.error("Error loading marquee data:", error);
      this.container.innerHTML = "<div>Error loading stock data</div>";
    }
  }

  render(stocks) {
    this.container.innerHTML = `
      <div class="marquee-container">
        <div class="marquee-content">
          ${stocks
            .map(
              (stock) =>
                `<span class="stock-symbol">${
                  stock.name
                } <span class="stock-price">$${parseFloat(stock.price).toFixed(
                  2
                )}</span></span>`
            )
            .join(" ")}
        </div>
      </div>
    `;
  }
}
