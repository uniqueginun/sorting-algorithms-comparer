import React from "react";
import "./QuickSort.css";

export default function QuickSort({ items }) {
  return (
    <div className="h-half">
      <h3>Quick sort algorithm</h3>
      <div className="text-blue-400">[{items.join(", ")}]</div>
    </div>
  );
}
