import React, { useState } from "react";
import "./App.css";
import { algorithms, mapAlgorithmNameToComponent } from "./utils/utilities";

import ControlComponent from "./components/control/ControlComponent";
import SortingAlgorithmsVisualizer from "./components/visualizer/SortingAlgorithmsVisualizer";

const App = () => {
  const [choosen, setChoosen] = useState([]);

  const renderVisualizer = (params) => {
    setChoosen(mapAlgorithmNameToComponent(params));
  };

  return (
    <div className="flex flex-col px-2 py-1 h-full">
      <ControlComponent algorithms={algorithms} onSubmit={renderVisualizer} />
      <div className="my-3 visualizer">
        {!choosen.length ? null : (
          <SortingAlgorithmsVisualizer choosen={choosen} />
        )}
      </div>
    </div>
  );
};

export default App;
