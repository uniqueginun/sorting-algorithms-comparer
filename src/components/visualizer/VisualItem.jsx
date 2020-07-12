import React from "react";
import Timer from "./Timer";

export default function VisualItem({ unsortedItems, title, stop }) {
  const itemStyle = ({ height, isCurrent }) => {
    return {
      width: 3,
      height: height / 2,
      marginRight: 1,
      backgroundColor: isCurrent ? "red" : "black",
    };
  };

  return (
    <>
      <div className="w-full flex flex-row items-center justify-between mb-3">
        <h3>{title}</h3>
        <Timer stop={stop} />
      </div>
      <div className="flex mt-2">
        {unsortedItems.map((element, index) => (
          <div
            className="bg-gray-800"
            key={index}
            style={itemStyle(element)}
          ></div>
        ))}
      </div>
    </>
  );
}
