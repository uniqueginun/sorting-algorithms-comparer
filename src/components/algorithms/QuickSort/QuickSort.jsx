import React, { useState } from "react";
import "./QuickSort.css";
import VisualItem from "../../visualizer/VisualItem";

export default function QuickSort({ items }) {
  const [unsortedItems, setUnsortedItems] = useState(items);
  return (
    <div className="h-half">
      <VisualItem title="Quick sort algorithm" unsortedItems={unsortedItems} />
    </div>
  );
}
