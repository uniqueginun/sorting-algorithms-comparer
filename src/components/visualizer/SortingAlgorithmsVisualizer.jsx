import React, { useState, useEffect } from "react";
import { getArrayOfRandomIntegers } from "../../utils/utilities";
import * as SortingAlgorithms from "../algorithms";

export default function SortingAlgorithmsVisualizer({ choosen }) {

  const [algorithms, setAlgorithms] = useState([]);

  useEffect(() => {
    setAlgorithms(choosen);
  }, [choosen]);

  const renderComparer = () => {
    return algorithms.map((algorithm) => {
      let AlgoComponent = SortingAlgorithms[algorithm];
      return <AlgoComponent items={[...getArrayOfRandomIntegers(5, 350)]} key={algorithm} />;
    });
  };

  return (
    <div className="flex flex-col p-3 bg-gray-100 w-full h-full">
      {renderComparer()}
    </div>
  );
}
