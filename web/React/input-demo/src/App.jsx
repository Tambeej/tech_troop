import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Exercise1 from "./components/Exersice1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Exercise1 />
      </div>
    </>
  );
}

export default App;
