import React from "react";
import "./InsertionSort.css";

export default function InsertionSort({ items }) {
  return (
    <div className="h-half">
      <h3>Insertion sort algorithm</h3>
      <div className="text-blue-400">[{items.join(", ")}]</div>
    </div>
  );
}
