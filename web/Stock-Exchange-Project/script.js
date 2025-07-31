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
    // url = `https://financialmodelingprep.com/api/v3/search?query=${queryVar}&limit=10&exchange=NASDAQ&apikey=${process.env.API_KEY}`;
    // url = `https://financialmodelingprep.com/api/v3/search?query=${queryVar}&limit=10&exchange=NASDAQ&apikey=qcUtnRSssrsmSFksSYhDaPvCoowkGFAH`;
    // let data = getData(url);

    // loadingSpinner.classList.remove("d-none");

    //   fetchData(url)
    // .then((data) => {
    renderResults(data);
    // loadingSpinner.classList.add("d-none");
    // })
    // .catch((error) => {
    //   $("#results-list").html(
    //     `<li class="list-group-item text-danger">Failed to load company info.</li>`
    //   );
    //   console.error("Error fetching symbol data:", error);
    // });
  }
}

function fetchData(url) {
  return new Promise((resolve, reject) => {
    $.get(url)
      .done(function (data) {
        resolve(data);
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        reject(new Error(`Request failed: ${textStatus}`));
      });
  });
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
          <a href="company.html?symbol=${item.symbol}" target="_blank"> 
          <strong>${item.name}</strong> (${item.symbol})</a><br />
        </div>
      </li>
    `);
  });
}

function getSymbol() {
  const urlParams = new URLSearchParams(window.location.search);
  let symbol = urlParams.get("symbol");
  let url = `https://financialmodelingprep.com/api/v3/company/profile/${symbol}?apikey=qcUtnRSssrsmSFksSYhDaPvCoowkGFAH`;
  let data = {
    symbol: "AAL",
    profile: {
      price: 11.49,
      beta: "1.359",
      volAvg: "61022680",
      mktCap: "7581435210",
      lastDiv: "0",
      range: "8.5-19.1",
      changes: -0.02,
      changesPercentage: "-0.17406440382941687",
      companyName: "American Airlines Group Inc.",
      exchange: "NASDAQ Global Select",
      exchangeShortName: "NASDAQ",
      industry: "Airlines, Airports & Air Services",
      website: "https://www.aa.com",
      description:
        "American Airlines Group Inc., through its subsidiaries, operates as a network air carrier. The company provides scheduled air transportation services for passengers and cargo through its hubs in Charlotte, Chicago, Dallas/Fort Worth, Los Angeles, Miami, New York, Philadelphia, Phoenix, and Washington, D.C., as well as through partner gateways in London, Madrid, Seattle/Tacoma, Sydney, and Tokyo. As of December 31, 2021, it operated a mainline fleet of 865 aircraft. The company was formerly known as AMR Corporation and changed its name to American Airlines Group Inc. in December 2013. American Airlines Group Inc. was founded in 1930 and is headquartered in Fort Worth, Texas.",
      ceo: "Robert D. Isom Jr.",
      sector: "Industrials",
      country: "US",
      fullTimeEmployees: "133100",
      phone: "682 278 9000",
      address: "1 Skyview Drive",
      city: "Fort Worth",
      state: "TX",
      zip: "76155",
      ipoDate: "2005-09-27",
      currency: "USD",
      isin: "US02376R1023",
      cusip: "02376R102",
      cik: "0000006201",
      image: "https://images.financialmodelingprep.com/symbol/AAL.png",
      defaultImage: false,
      isEtf: false,
      isActivelyTrading: true,
      isFund: false,
      isAdr: false,
    },
  };
  // fetchData(url)
  //   .then((data) => {
  const logo = data?.profile?.image;
  if (logo) {
    $("#company-symbol").attr("src", logo);
  }
  // })
  // .catch((error) => {
  //   $("#results-list").html(
  //     `<li class="list-group-item text-danger">Failed to load company info.</li>`
  //   );
  //   console.error("Error fetching symbol data:", error);
  // });
}

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("company.html")) {
    getSymbol();
  }
});
