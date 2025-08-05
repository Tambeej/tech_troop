import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Company from "./componenets/Company";
import "./App.css";
function App() {
  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 },
  ];

  return <Company name={companies[0].name} revenue={companies[0].revenue} />;
}

export default App;
