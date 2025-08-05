import React from "react";

const Landing = ({ user, hottest }) => {
  return (
    <h2>
      Welcome, {user}! The hottest item is {hottest.item} for {hottest.price}$
    </h2>
  );
};

export default Landing;
