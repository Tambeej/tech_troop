$("#search-btn").on("click", search);
$("#search-input").on("keyup", function (e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    search();
  }
});

function search() {
  const input = $("#search-input").val().trim();
  const loadingSpinner = document.getElementById("loadingSpinner");

  if (input) {
    //Mock data for development
    let data = [
      {
        symbol: "AAL",
        name: "American Airlines Group Inc.",
        currency: "USD",
        stockExchange: "NASDAQ Global Select",
        exchangeShortName: "NASDAQ",
      },
      {
        symbol: "AAXJ",
        name: "iShares MSCI All Country Asia ex Japan ETF",
        currency: "USD",
        stockExchange: "NASDAQ Global Market",
        exchangeShortName: "NASDAQ",
      },
      {
        symbol: "AAWW",
        name: "Atlas Air Worldwide Holdings, Inc.",
        currency: "USD",
        stockExchange: "NASDAQ Global Select",
        exchangeShortName: "NASDAQ",
      },
      {
        symbol: "AAVM",
        name: "Alpha Architect Global Factor Equity ETF",
        currency: "USD",
        stockExchange: "NASDAQ Global Market",
        exchangeShortName: "NASDAQ",
      },
      {
        symbol: "AARD",
        name: "Aardvark Therapeutics, Inc. Common Stock",
        currency: "USD",
        stockExchange: "NASDAQ Global Select",
        exchangeShortName: "NASDAQ",
      },
      {
        symbol: "AAPU",
        name: "Direxion Daily AAPL Bull 1.5X Shares",
        currency: "USD",
        stockExchange: "NASDAQ Global Market",
        exchangeShortName: "NASDAQ",
      },
      {
        symbol: "AAPL",
        name: "Apple Inc.",
        currency: "USD",
        stockExchange: "NASDAQ Global Select",
        exchangeShortName: "NASDAQ",
      },
      {
        symbol: "AAPG",
        name: "Ascentage Pharma Group International",
        currency: "USD",
        stockExchange: "NASDAQ Global Market",
        exchangeShortName: "NASDAQ",
      },
      {
        symbol: "AAPD",
        name: "Direxion Daily AAPL Bear 1X Shares",
        currency: "USD",
        stockExchange: "NASDAQ Global Market",
        exchangeShortName: "NASDAQ",
      },
      {
        symbol: "AAPB",
        name: "GraniteShares ETF Trust - GraniteShares 2x Long Tilray Daily ETF",
        currency: "USD",
        stockExchange: "NASDAQ Global Market",
        exchangeShortName: "NASDAQ",
      },
    ];

    // const url = `https://financialmodelingprep.com/api/v3/search?query=${input}&limit=10&exchange=NASDAQ&apikey=${process.env.API_KEY}`;
    // const url = `https://financialmodelingprep.com/api/v3/search?query=${input}&limit=1&exchange=NASDAQ&apikey=qcUtnRSssrsmSFksSYhDaPvCoowkGFAH`;

    /////Reading real data
    // $.get(url, function (data) {
      loadingSpinner.classList.remove("d-none");
      renderResults(data);
      loadingSpinner.classList.add("d-none");
    // }).fail(function () {
    //   $("#results-list").html(
    //     `<li class="list-group-item text-danger">Failed to load results.</li>`
    //   );
    // });
  }
}

function renderResults(results) {
  const list = $("#results-list");
  list.empty();

  if (results.length === 0) {
    list.append(`<li class="list-group-item">No results found.</li>`);
    return;
  }

  results.forEach((item) => {
    list.append(`
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <strong>${item.name}</strong> (${item.symbol})<br />
          <small class="text-muted">${item.exchangeShortName}</small>
        </div>
      </li>
    `);
  });
}
