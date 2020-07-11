import React from "react";
import { getArrayOfRandomIntegers, algorithms } from "../../utils/utilities";
import * as SortingAlgorithms from "../algorithms";

export default function SortingAlgorithmsVisualizer({ choosen }) {
  const items = getArrayOfRandomIntegers(5, 300);

  const renderComparer = () => {
    return choosen.map((algorithm) => {
      let AlgoComponent = SortingAlgorithms[algorithm];
      return <AlgoComponent items={[...items]} key={algorithm} />;
    });
  };

  return (
    <div className="flex flex-col p-3 bg-gray-100 w-full h-full">
      {renderComparer()}
    </div>
  );
}
