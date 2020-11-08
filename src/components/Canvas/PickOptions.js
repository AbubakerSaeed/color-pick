// IMPORTS
import React from "react";

import "./PickOptions.css";

// PickOptions
function PickOptions({ activeTool, currentHoveredColor }) {
  return (
    <div
      className="canvas__options pick"
      style={{ display: activeTool === "pick" ? "initial" : "none" }}
    >
      <div
        className="pick__color-preview"
        style={{
          background: `rgb(${currentHoveredColor[0]}, ${currentHoveredColor[1]}, ${currentHoveredColor[2]})`,
        }}
      ></div>
    </div>
  );
}

// EXPORT
export default PickOptions;
