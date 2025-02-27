import React from "react";
import { Store } from "./store/sample";

const ZustandSample = () => {
    const bears = Store((state: any) => state.bears);
      const increasePopulation = Store((state: any) => state.increasePopulation);
      const removeAllBears = Store((state: any) => state.removeAllBears);
      const updateBears = Store((state: any) => state.updateBears);
  return (
    <div>
      <p>Bears: {bears}</p>
      <button
        onClick={increasePopulation}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increase Bears
      </button>
      <button
        onClick={removeAllBears}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        removeAllBears
      </button>
      <button
        onClick={() => updateBears(333)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        updateBears
      </button>
    </div>
  );
};

export default ZustandSample;
