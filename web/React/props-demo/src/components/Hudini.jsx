import React, { useState } from "react";

function Hudini() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div>{show ? "Now you see me" : "Now you don't"}</div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default Hudini;