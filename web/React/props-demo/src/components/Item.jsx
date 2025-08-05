import React from "react";

const Item = ({ item, price, discount, hasDiscount }) => {
  return (
    <div>
      {hasDiscount ? (
        <span>
          {item} - ${price * (1 - discount)}
        </span>
      ) : (
        <span>
          {item} - ${price}
        </span>
      )}
    </div>
  );
};

export default Item;
