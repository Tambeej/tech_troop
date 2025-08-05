import React from "react";
import Item from "./Item";

function Home(props) {
  return (
    <div>
      <h1>Store </h1>
      {props.store.map((product, index) => (
        <Item
          key={index}
          item={product.item}
          price={product.price}
          discount={product.discount}
          hasDiscount={props.shouldDiscount}
        />
      ))}
    </div>
  );
}

export default Home;
