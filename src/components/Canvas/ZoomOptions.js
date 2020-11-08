// IMPORTS
import React from "react";

import "./ZoomOptions.css";
import { ReactComponent as IconMinimize } from "./../svg/icon-minimize.svg";

// ZoomOptions
function ZoomOptions({ activeTool, zoomed, setZoomed, recalculateMainSize }) {
  return (
    <div
      className="canvas__options zoom"
      style={{ display: activeTool === "zoom" ? "flex" : "none" }}
    >
      <div className="zoom__input-wrapper">
        <input
          type="range"
          min="5"
          max="300"
          value={zoomed}
          onChange={(e) => {
            setZoomed(e.target.value * 1);
            recalculateMainSize();
          }}
          className="zoom__input"
          style={{ "--zoomed": `${zoomed / 3}%` }}
        />
        <span className="zoom__value-wrapper">
          <strong className="zoom__value">{zoomed}%</strong>
          <strong className="zoom__value-hidden">300%</strong>
        </span>
      </div>
      <button
        className="zoom__recalculate"
        onClick={() => recalculateMainSize()}
      >
        <IconMinimize />
        <span>Recalculate Size</span>
      </button>
    </div>
  );
}

// EXPORT
export default ZoomOptions;
