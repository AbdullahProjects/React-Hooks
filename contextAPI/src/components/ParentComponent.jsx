import React from "react";
import DisplayCounter from "./DisplayCounter";

const ParentComponent = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-6 py-4 border border-gray-600 rounded-md">
      <h3 className="text-md font-semibold mb-2">Parent Component</h3>
      <DisplayCounter />
    </div>
  );
};

export default ParentComponent;
