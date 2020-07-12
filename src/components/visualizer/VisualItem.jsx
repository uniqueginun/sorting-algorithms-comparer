import React from "react";
import Timer from "./Timer";

export default function VisualItem({ unsortedItems, title }) {

  const itemStyle = (height) => {
    return { width: 3, height: height / 2, marginRight: 1 };
  };

  return (
    <>
      <div className="w-full flex flex-row items-center justify-between">
        <h3>{title}</h3>
        <Timer />
      </div>
      <div className="flex mt-2">
        {unsortedItems.map((h, index) => (
          <div className="bg-gray-800" key={index} style={itemStyle(h)}></div>
        ))}
      </div>
    </>
  );
}
