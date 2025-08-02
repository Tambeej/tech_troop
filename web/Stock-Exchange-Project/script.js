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

    loadingSpinner.classList.remove("d-none");

    //   fetchData(url)
    // .then((data) => {
    renderResults(data);
    loadingSpinner.classList.add("d-none");
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
  // let url = `https://financialmodelingprep.com/api/v3/company/profile/${symbol}?apikey=qcUtnRSssrsmSFksSYhDaPvCoowkGFAH`;
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
  const website = data?.profile?.website;
  if (website) {
    $("#company-name").attr("href", website);
  }
  const name = data?.profile?.companyName;
  if (name) {
    $("#company-name").text(name);
  }
  const price = data?.profile?.price;
  if (price) {
    $("#price").text(price);
  }
  let changes = data?.profile?.changes;

  if (changes !== undefined && changes !== null) {
    const changeValue = parseFloat(changes); // Get the number
    const percentageText = `(${changeValue}%)`; // Format for display

    const $changeElement = $("#changes-in-percentages");
    $changeElement.text(percentageText);
    $changeElement.removeClass("text-success text-danger");

    if (changeValue > 0) {
      $changeElement.addClass("text-success"); // green
    } else if (changeValue < 0) {
      $changeElement.addClass("text-danger"); // red
    }
  }

  const description = data?.profile?.description;
  if (description) {
    $("#company-description").text(description);
  }
  getChartData(symbol);

  // })
  // .catch((error) => {
  //   $("#results-list").html(
  //     `<li class="list-group-item text-danger">Failed to load company info.</li>`
  //   );
  //   console.error("Error fetching symbol data:", error);
  // });
}

function getChartData(symbol) {
  const loadingSpinner = document.getElementById("loadingSpinner");

  if (symbol) {
    //Mock data for development
    loadingSpinner.classList.remove("d-none");

    let data = {
      symbol: "AAL",
      historical: [
        {
          date: "2025-07-31",
          close: 11.49,
        },
        {
          date: "2025-07-30",
          close: 11.51,
        },
        {
          date: "2025-07-29",
          close: 11.42,
        },
        {
          date: "2025-07-28",
          close: 11.58,
        },
        {
          date: "2025-07-25",
          close: 11.5,
        },
        {
          date: "2025-07-24",
          close: 11.46,
        },
        {
          date: "2025-07-23",
          close: 12.68,
        },
        {
          date: "2025-07-22",
          close: 12.5,
        },
        {
          date: "2025-07-21",
          close: 12.32,
        },
        {
          date: "2025-07-18",
          close: 12.51,
        },
        {
          date: "2025-07-17",
          close: 12.45,
        },
        {
          date: "2025-07-16",
          close: 12.27,
        },
        {
          date: "2025-07-15",
          close: 12.17,
        },
        {
          date: "2025-07-14",
          close: 12.38,
        },
        {
          date: "2025-07-11",
          close: 12.22,
        },
        {
          date: "2025-07-10",
          close: 12.94,
        },
        {
          date: "2025-07-09",
          close: 11.48,
        },
        {
          date: "2025-07-08",
          close: 11.58,
        },
        {
          date: "2025-07-07",
          close: 11.59,
        },
        {
          date: "2025-07-03",
          close: 11.69,
        },
        {
          date: "2025-07-02",
          close: 11.63,
        },
        {
          date: "2025-07-01",
          close: 11.52,
        },
        {
          date: "2025-06-30",
          close: 11.22,
        },
        {
          date: "2025-06-27",
          close: 11.28,
        },
        {
          date: "2025-06-26",
          close: 11.13,
        },
        {
          date: "2025-06-25",
          close: 11.06,
        },
        {
          date: "2025-06-24",
          close: 11.37,
        },
        {
          date: "2025-06-23",
          close: 10.9,
        },
        {
          date: "2025-06-20",
          close: 10.62,
        },
        {
          date: "2025-06-18",
          close: 10.58,
        },
        {
          date: "2025-06-17",
          close: 10.56,
        },
        {
          date: "2025-06-16",
          close: 10.9,
        },
        {
          date: "2025-06-13",
          close: 10.37,
        },
        {
          date: "2025-06-12",
          close: 10.9,
        },
        {
          date: "2025-06-11",
          close: 11.06,
        },
        {
          date: "2025-06-10",
          close: 11.84,
        },
        {
          date: "2025-06-09",
          close: 11.76,
        },
        {
          date: "2025-06-06",
          close: 11.78,
        },
        {
          date: "2025-06-05",
          close: 11.27,
        },
        {
          date: "2025-06-04",
          close: 11.42,
        },
        {
          date: "2025-06-03",
          close: 11.47,
        },
        {
          date: "2025-06-02",
          close: 11.38,
        },
        {
          date: "2025-05-30",
          close: 11.41,
        },
        {
          date: "2025-05-29",
          close: 11.4,
        },
        {
          date: "2025-05-28",
          close: 11.43,
        },
        {
          date: "2025-05-27",
          close: 11.64,
        },
        {
          date: "2025-05-23",
          close: 11.19,
        },
        {
          date: "2025-05-22",
          close: 11.4,
        },
        {
          date: "2025-05-21",
          close: 11.24,
        },
        {
          date: "2025-05-20",
          close: 11.65,
        },
        {
          date: "2025-05-19",
          close: 11.86,
        },
        {
          date: "2025-05-16",
          close: 11.86,
        },
        {
          date: "2025-05-15",
          close: 11.76,
        },
        {
          date: "2025-05-14",
          close: 11.84,
        },
        {
          date: "2025-05-13",
          close: 12.3,
        },
        {
          date: "2025-05-12",
          close: 11.67,
        },
        {
          date: "2025-05-09",
          close: 11.11,
        },
        {
          date: "2025-05-08",
          close: 11.03,
        },
        {
          date: "2025-05-07",
          close: 10.56,
        },
        {
          date: "2025-05-06",
          close: 10.43,
        },
        {
          date: "2025-05-05",
          close: 10.66,
        },
        {
          date: "2025-05-02",
          close: 10.52,
        },
        {
          date: "2025-05-01",
          close: 10.03,
        },
        {
          date: "2025-04-30",
          close: 9.95,
        },
        {
          date: "2025-04-29",
          close: 9.9,
        },
        {
          date: "2025-04-28",
          close: 9.85,
        },
        {
          date: "2025-04-25",
          close: 9.75,
        },
        {
          date: "2025-04-24",
          close: 9.61,
        },
        {
          date: "2025-04-23",
          close: 9.32,
        },
        {
          date: "2025-04-22",
          close: 9.31,
        },
        {
          date: "2025-04-21",
          close: 9.07,
        },
        {
          date: "2025-04-17",
          close: 9.46,
        },
        {
          date: "2025-04-16",
          close: 9.42,
        },
        {
          date: "2025-04-15",
          close: 9.85,
        },
        {
          date: "2025-04-14",
          close: 9.58,
        },
        {
          date: "2025-04-11",
          close: 9.67,
        },
        {
          date: "2025-04-10",
          close: 9.51,
        },
        {
          date: "2025-04-09",
          close: 11.12,
        },
        {
          date: "2025-04-08",
          close: 9.07,
        },
        {
          date: "2025-04-07",
          close: 9.71,
        },
        {
          date: "2025-04-04",
          close: 9.46,
        },
        {
          date: "2025-04-03",
          close: 9.51,
        },
        {
          date: "2025-04-02",
          close: 10.59,
        },
        {
          date: "2025-04-01",
          close: 10.3,
        },
        {
          date: "2025-03-31",
          close: 10.55,
        },
        {
          date: "2025-03-28",
          close: 10.7,
        },
        {
          date: "2025-03-27",
          close: 11.14,
        },
        {
          date: "2025-03-26",
          close: 11.44,
        },
        {
          date: "2025-03-25",
          close: 11.51,
        },
        {
          date: "2025-03-24",
          close: 11.83,
        },
        {
          date: "2025-03-21",
          close: 11.39,
        },
        {
          date: "2025-03-20",
          close: 11.26,
        },
        {
          date: "2025-03-19",
          close: 11.48,
        },
        {
          date: "2025-03-18",
          close: 11.07,
        },
        {
          date: "2025-03-17",
          close: 11.32,
        },
        {
          date: "2025-03-14",
          close: 10.87,
        },
        {
          date: "2025-03-13",
          close: 10.67,
        },
        {
          date: "2025-03-12",
          close: 10.93,
        },
        {
          date: "2025-03-11",
          close: 11.46,
        },
        {
          date: "2025-03-10",
          close: 12.5,
        },
        {
          date: "2025-03-07",
          close: 13.03,
        },
        {
          date: "2025-03-06",
          close: 13.25,
        },
        {
          date: "2025-03-05",
          close: 14.09,
        },
        {
          date: "2025-03-04",
          close: 13.35,
        },
        {
          date: "2025-03-03",
          close: 13.87,
        },
        {
          date: "2025-02-28",
          close: 14.35,
        },
        {
          date: "2025-02-27",
          close: 14.53,
        },
        {
          date: "2025-02-26",
          close: 15.18,
        },
        {
          date: "2025-02-25",
          close: 15.13,
        },
        {
          date: "2025-02-24",
          close: 15.31,
        },
        {
          date: "2025-02-21",
          close: 15.23,
        },
        {
          date: "2025-02-20",
          close: 15.86,
        },
        {
          date: "2025-02-19",
          close: 16,
        },
        {
          date: "2025-02-18",
          close: 16.08,
        },
        {
          date: "2025-02-14",
          close: 15.97,
        },
        {
          date: "2025-02-13",
          close: 15.74,
        },
        {
          date: "2025-02-12",
          close: 16.26,
        },
        {
          date: "2025-02-11",
          close: 16.41,
        },
        {
          date: "2025-02-10",
          close: 16.62,
        },
        {
          date: "2025-02-07",
          close: 17.17,
        },
        {
          date: "2025-02-06",
          close: 17.06,
        },
        {
          date: "2025-02-05",
          close: 16.96,
        },
        {
          date: "2025-02-04",
          close: 16.84,
        },
        {
          date: "2025-02-03",
          close: 16.7,
        },
        {
          date: "2025-01-31",
          close: 16.92,
        },
        {
          date: "2025-01-30",
          close: 16.9,
        },
        {
          date: "2025-01-29",
          close: 17.33,
        },
        {
          date: "2025-01-28",
          close: 17.15,
        },
        {
          date: "2025-01-27",
          close: 17.2,
        },
        {
          date: "2025-01-24",
          close: 16.96,
        },
        {
          date: "2025-01-23",
          close: 17.03,
        },
        {
          date: "2025-01-22",
          close: 18.66,
        },
        {
          date: "2025-01-21",
          close: 18.64,
        },
        {
          date: "2025-01-17",
          close: 18.27,
        },
        {
          date: "2025-01-16",
          close: 18.29,
        },
        {
          date: "2025-01-15",
          close: 18.07,
        },
        {
          date: "2025-01-14",
          close: 18.21,
        },
        {
          date: "2025-01-13",
          close: 17.6,
        },
        {
          date: "2025-01-10",
          close: 18.38,
        },
        {
          date: "2025-01-08",
          close: 17.6,
        },
        {
          date: "2025-01-07",
          close: 17.69,
        },
        {
          date: "2025-01-06",
          close: 17.52,
        },
        {
          date: "2025-01-03",
          close: 16.97,
        },
        {
          date: "2025-01-02",
          close: 17,
        },
        {
          date: "2024-12-31",
          close: 17.43,
        },
        {
          date: "2024-12-30",
          close: 17.62,
        },
        {
          date: "2024-12-27",
          close: 17.35,
        },
        {
          date: "2024-12-26",
          close: 17.35,
        },
        {
          date: "2024-12-24",
          close: 17.35,
        },
        {
          date: "2024-12-23",
          close: 17.25,
        },
        {
          date: "2024-12-20",
          close: 16.88,
        },
        {
          date: "2024-12-19",
          close: 16.64,
        },
        {
          date: "2024-12-18",
          close: 16.47,
        },
        {
          date: "2024-12-17",
          close: 16.72,
        },
        {
          date: "2024-12-16",
          close: 16.52,
        },
        {
          date: "2024-12-13",
          close: 16.92,
        },
        {
          date: "2024-12-12",
          close: 17.24,
        },
        {
          date: "2024-12-11",
          close: 17.58,
        },
        {
          date: "2024-12-10",
          close: 17.49,
        },
        {
          date: "2024-12-09",
          close: 17.16,
        },
        {
          date: "2024-12-06",
          close: 17.4,
        },
        {
          date: "2024-12-05",
          close: 17.38,
        },
        {
          date: "2024-12-04",
          close: 14.88,
        },
        {
          date: "2024-12-03",
          close: 14.47,
        },
        {
          date: "2024-12-02",
          close: 14.61,
        },
        {
          date: "2024-11-29",
          close: 14.52,
        },
        {
          date: "2024-11-27",
          close: 14.64,
        },
        {
          date: "2024-11-26",
          close: 14.64,
        },
        {
          date: "2024-11-25",
          close: 14.92,
        },
        {
          date: "2024-11-22",
          close: 14.38,
        },
        {
          date: "2024-11-21",
          close: 14.2,
        },
        {
          date: "2024-11-20",
          close: 14.46,
        },
        {
          date: "2024-11-19",
          close: 14.33,
        },
        {
          date: "2024-11-18",
          close: 14.29,
        },
        {
          date: "2024-11-15",
          close: 14.39,
        },
        {
          date: "2024-11-14",
          close: 14.26,
        },
        {
          date: "2024-11-13",
          close: 14.01,
        },
      ],
    };
    // url = `https://financialmodelingprep.com//api/v3/historical-price-full/${symbol}?serietype=line&apikey=${process.env.API_KEY}`;
    // let url = `https://financialmodelingprep.com//api/v3/historical-price-full/${symbol}?serietype=line&apikey=qcUtnRSssrsmSFksSYhDaPvCoowkGFAH`;
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    if (!data.historical) return;

    const labels = data.historical.map((e) => e.date).reverse();
    const prices = data.historical.map((e) => e.close).reverse();

    const ctx = document.getElementById("chart").getContext("2d");
    loadingSpinner.classList.add("d-none");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: `${symbol} Stock Price`,
            data: prices,
            borderColor: "blue",
            fill: true,
            tension: 0.1,
            borderColor: "#e91e63",
            backgroundColor: "rgba(233,30,99,0.4)",
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "top",
          },
        },
        scales: {
          x: {
            type: "time",
            time: {
              unit: "month",
              tooltipFormat: "yyyy-MM-dd",
              displayFormats: { month: "yyyy-MM" },
            },
            title: { display: true, text: "Year-Month" },
          },
          y: {
            title: { display: true, text: "Price (USD)" },
            beginAtZero: true,
          },
        },
      },
    });
    // })
    // .catch((err) => console.error(err));
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("company.html")) {
    getSymbol();
  }
});
