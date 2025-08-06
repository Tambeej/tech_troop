import { useState } from "react";

const Exercise2 = () => {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");
  
  const handleFruitChange = (e) => {
    const selectedFruit = e.target.value;
    setFruit(selectedFruit);

    console.log(`${name} selected ${selectedFruit}`);
  };

  return (
    <div>
      <input
        id="name-input"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <select id="select-input" onChange={handleFruitChange} value={fruit}>
        <option value="grapes">Grapes</option>
        <option value="date">Date</option>
        <option value="mango">Mango</option>
        <option value="banana">Banana</option>
      </select>
    </div>
  );
};
export default Exercise2;
