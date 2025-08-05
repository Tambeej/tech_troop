import "./App.css";
import React, { useState } from "react";

import Home from "./components/Home";
import Landing from "./components/Landing";

function App() {
  const [user] = useState("Robyn");
  const [store] = useState([
    { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
    { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
    {
      item: "Surround Sound Pelican",
      price: 3099,
      discount: 0.05,
      hottest: true,
    },
  ]);
  const [shouldDiscount] = useState(false);
  const [currentPage, setCurrentPage] = useState("Landing");

  return (
    <div>
      <div>
        {currentPage === "Landing" ? (
          <>
            <Landing
              user={user}
              hottest={store.find((product) => product.hottest)}
            />
            <button onClick={() => setCurrentPage("Home")}>Go to Store</button>
          </>
        ) : (
          <>
            <Home store={store} shouldDiscount={shouldDiscount} />
            <button onClick={() => setCurrentPage("Landing")}>
              Go to Landing
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
