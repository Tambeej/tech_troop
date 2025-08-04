import logo from "./logo.svg";
import "./App.css";

function App() {
  const showCompany = (name, revenue) => {
    return (
      <div id={name} key={name}>{`${name} makes ${revenue} every year`}</div>
    );
  };

  const getClassName = (temperature) => {
    if (temperature < 15) {
      return "freezing";
    } else if (temperature <= 30) {
      return "fair";
    } else {
      return "hell-scape";
    }
  };

  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 },
  ];
  return (
    //ex1.
    // <div className="ex-space">
    //   <h4 className="ex-title">Exercise 1</h4>
    //   <div className="exercise" id="ex-1">
    //     {companies.map((c) => showCompany(c.name, c.revenue))}
    //   </div>
    // </div>
    //ex2.
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        <div id="weatherBox" className={getClassName(40)}></div>
      </div>
    </div>
  );
}

export default App;
