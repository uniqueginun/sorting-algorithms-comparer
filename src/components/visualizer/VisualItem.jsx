import React from "react";

export default function VisualItem({ unsortedItems, title }) {
  const itemStyle = (height) => {
    return { width: 6, height: height };
  };

  return (
    <>
      <h3>{title}</h3>
      <div className="flex mt-2">
        {unsortedItems.map((h, index) => (
          <div className="bg-gray-800" key={index} style={itemStyle(h)}></div>
        ))}
      </div>
    </>
  );
}
