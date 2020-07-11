import React, { useState, useEffect } from "react";
import "./QuickSort.css";
import VisualItem from "../../visualizer/VisualItem";
import { sleep } from "../../../utils/utilities";
import QuickSortAlgorithm from "../../../algorithms/QuickSort";

export default function QuickSort({ items }) {
  const [unsortedItems, setUnsortedItems] = useState(items);

  useEffect(() => {
    const run = async () => {
      let sortedArraySteps = QuickSortAlgorithm([...unsortedItems]);
      for (let i = 0; i < sortedArraySteps.length; i++) {
        await sleep(5);
        setUnsortedItems(sortedArraySteps[i]);
      }
    };
    run();
  }, []);

  return (
    <div className="h-half">
      <VisualItem title="Quick sort algorithm" unsortedItems={unsortedItems} />
    </div>
  );
}
