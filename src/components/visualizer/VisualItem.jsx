import React from "react";
import Timer from "./Timer";

export default function VisualItem({ unsortedItems, title, stop }) {

  const itemStyle = (height) => {
    return { width: 3, height: height / 2, marginRight: 1 };
  };

  return (
    <>
      <div className="w-full flex flex-row items-center justify-between mb-3">
        <h3>{title}</h3>
        <Timer stop={stop} />
      </div>
      <div className="flex mt-2">
        {unsortedItems.map((h, index) => (
          <div className="bg-gray-800" key={index} style={itemStyle(h)}></div>
        ))}
      </div>
    </>
  );
}
