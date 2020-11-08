// IMPORTS
import React, { useState, useEffect, useRef } from "react";
import SimpleBar from "simplebar-react";

import "./Canvas.css";

// COMPONENTS
import ZoomOptions from "./Canvas/ZoomOptions";
import PickOptions from "./Canvas/PickOptions";
import ImageOptions from "./Canvas/ImageOptions";
import MainCanvas from "./Canvas/MainCanvas";

// CANVAS
function Canvas({
  activeTool,
  selectedColors,
  setSelectedColors,
  imageUrl,
  setImageUrl,
  imageSource,
  setImageSource,
}) {
  // useState
  let [currentHoveredColor, setCurrentHoveredColor] = useState("");
  let [zoomed, setZoomed] = useState(100);
  let [mainSize, setMainSize] = useState([]);
  let [canvasWidth, setCanvasWidth] = useState(0);
  let [canvasHeight, setCanvasHeight] = useState(0);

  // useRef
  let refCanvas = useRef(null);
  let refMainImage = useRef(null);

  // useEffect
  useEffect(() => {
    window.addEventListener("load", () => {
      setCanvasWidth(refCanvas.current.offsetWidth);
      setCanvasHeight(refCanvas.current.offsetHeight);
    });

    window.addEventListener("resize", () => {
      setCanvasWidth(refCanvas.current.offsetWidth);
      setCanvasHeight(refCanvas.current.offsetHeight);
    });
  }, []);

  // recalculateMainSize
  function recalculateMainSize() {
    let rect = refMainImage.current.getBoundingClientRect();
    setMainSize([
      rect.width < canvasWidth ? canvasWidth : rect.width,
      rect.height < canvasHeight ? canvasHeight : rect.height,
    ]);
  }

  return (
    <div className="canvas" ref={refCanvas}>
      <div
        className={
          "canvas__toolbar" +
          (activeTool === "pick" ? " canvas__toolbar---pick" : "")
        }
        style={{ display: activeTool !== "cursor" ? "flex" : "none" }}
      >
        <ZoomOptions
          activeTool={activeTool}
          zoomed={zoomed}
          setZoomed={setZoomed}
          recalculateMainSize={recalculateMainSize}
        />
        <PickOptions
          activeTool={activeTool}
          currentHoveredColor={currentHoveredColor}
        />
        <ImageOptions
          activeTool={activeTool}
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          setImageSource={setImageSource}
        />
      </div>

      <SimpleBar style={{ maxHeight: "var(--height)" }} autoHide={false}>
        <MainCanvas
          activeTool={activeTool}
          zoomed={zoomed}
          setZoomed={setZoomed}
          imageSource={imageSource}
          currentHoveredColor={currentHoveredColor}
          setCurrentHoveredColor={setCurrentHoveredColor}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
          mainSize={mainSize}
          refMainImage={refMainImage}
          recalculateMainSize={recalculateMainSize}
        />
      </SimpleBar>
    </div>
  );
}

// EXPORT
export default Canvas;
