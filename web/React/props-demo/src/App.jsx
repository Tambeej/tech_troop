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

  function generateCompanyTags(companies) {
    let companyTags = [];
    for (let c of companies) {
      companyTags.push(<Company name={c.name} revenue={c.revenue} />);
    }
    return companyTags;
  }

  return <div>{generateCompanyTags(companies)}</div>;
}

export default App;
