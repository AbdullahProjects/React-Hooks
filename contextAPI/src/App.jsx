import React, { useState } from "react";
import { CounterContext } from "./context/CounterContext";
import ParentComponent from "./components/ParentComponent";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <CounterContext.Provider value={{ count, setCount }}>
        <div className="flex flex-col gap-4 justify-center items-center h-screen">
          <h1>Count : {count}</h1>
          <button className="button" onClick={() => setCount(count + 1)}>
            Click Me
          </button>
          <ParentComponent />
        </div>
      </CounterContext.Provider>
    </>
  );
};

export default App;
