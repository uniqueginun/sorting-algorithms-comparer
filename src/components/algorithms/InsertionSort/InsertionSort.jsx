import React, { useState, useEffect } from "react";
import "./InsertionSort.css";
import VisualItem from "../../visualizer/VisualItem";
import insertionSort from "../../../algorithms/InsetionSort";
import { sleep } from "../../../utils/utilities";

export default function InsertionSort({ items }) {
  const [unsortedItems, setUnsortedItems] = useState(items);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const run = async () => {
      let sortedArraySteps = insertionSort([...unsortedItems]);
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
        title="Insertion sort algorithm"
        unsortedItems={unsortedItems}
        stop={stop}
      />
    </div>
  );
}
