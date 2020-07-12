import React, { useState } from "react";
import { copyAndRemove } from "../../utils/utilities";

export default function ControlComponent({ algorithms, onSubmit, restart }) {
  const [compare, setCompare] = useState([]);
  const setComparison = async (e) => {
    let arr = await copyAndRemove([...compare], e);
    setCompare(arr);
  };
  const setParamerters = () => {
    if (!compare.length) {
      return;
    }
    onSubmit(compare);
  };
  return (
    <div className="py-6 flex flex-row w-full items-center justify-center">
      <div>
        <div className="flex items-center">
          {algorithms.map((algorithm, index) => (
            <div className="flex items-center mr-3" key={index}>
              <input
                type="checkbox"
                value={algorithm}
                onChange={setComparison}
              />
              <label className="font-bold text-md text-gray-100 ml-1">
                {algorithm.toUpperCase()}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-6">
        <button
          disabled={!compare.length}
          onClick={setParamerters}
          className={`font-bold px-6 bg-gray-100 shadow rounded ${
            !compare.length ? "text-gray-300" : "text-blue-500"
            }`}
        >
          {compare.length > 1 ? "Compare" : "Sort"}
        </button>
        <button onClick={restart} className="font-bold px-6 bg-gray-100 shadow rounded text-red-600 mx-2">
          Start Over
        </button>
      </div>
    </div>
  );
}
