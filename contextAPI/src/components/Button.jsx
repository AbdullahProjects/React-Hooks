import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Button = () => {
  const {count, setCount} = useContext(CounterContext);

  return (
    <div className="button" onClick={() => setCount(count + 1)}>
      I am Nested Button
    </div>
  );
};

export default Button;
