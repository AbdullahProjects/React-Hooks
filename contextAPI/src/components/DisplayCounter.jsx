import React, { useContext } from "react";
import Button from "./Button";
import { CounterContext } from "../context/CounterContext";

const DisplayCounter = () => {
  const counter = useContext(CounterContext);

  return (
    <>
      <div>Counter Value: {counter.count}</div>
      <Button />
    </>
  );
};

export default DisplayCounter;
