import React, { useState, useEffect } from "react";
import "./QuickSort.css";
import VisualItem from "../../visualizer/VisualItem";
import { sleep } from "../../../utils/utilities";
import QuickSortAlgorithm from "../../../algorithms/QuickSort";

export default function QuickSort({ items }) {
  const [unsortedItems, setUnsortedItems] = useState(items);
  const [stop, setStop] = useState(false);
  useEffect(() => {
    let isMounted = true;
    const run = async () => {
      let sortedArraySteps = QuickSortAlgorithm([...unsortedItems]);
      for (let i = 0; i < sortedArraySteps.length; i++) {
        await sleep(5);
        isMounted && setUnsortedItems(sortedArraySteps[i]);
      }
      setStop(true);
    };

    isMounted && run();

    return () => (isMounted = false);
  }, []);

  return (
    <div className="h-half">
      <VisualItem
        title="Quick sort algorithm"
        unsortedItems={unsortedItems}
        stop={stop}
      />
    </div>
  );
}
