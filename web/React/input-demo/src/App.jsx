import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Exercise1 from "./components/Exersice1";

import Exercise2 from "./components/Exersice2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <Exercise1 /> */}
        <Exercise2 />
      </div>
    </>
  );
}

export default App;
