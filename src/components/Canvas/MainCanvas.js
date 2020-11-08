// IMPORTS
import React, { useState, useEffect, useRef } from "react";

import "./MainCanvas.css";

// MainCanvas
function MainCanvas({
  activeTool,
  zoomed,
  setZoomed,
  imageSource,
  currentHoveredColor,
  setCurrentHoveredColor,
  selectedColors,
  setSelectedColors,
  mainSize,
  refMainImage,
  recalculateMainSize,
}) {
  // useState
  let [activeKey, setActiveKey] = useState("");
  let [imageSizes, setImageSizes] = useState([]);
  let [ctx, setCtx] = useState(null);

  // useRef
  let refMainCanvas = useRef(null);

  // useEffect
  useEffect(() => {
    setCtx(refMainCanvas.current.getContext("2d"));
    window.addEventListener("keydown", (e) => {
      setActiveKey(e.key);
    });
    window.addEventListener("keyup", () => {
      setActiveKey("");
    });
  }, []);

  // imageToMainCanvas
  function imageToMainCanvas() {
    let img = new Image();
    img.crossOrigin = "Anonymous";
    img.addEventListener("load", function () {
      setImageSizes([this.naturalWidth, this.naturalHeight]);
      ctx.drawImage(img, 0, 0);
      setZoomed(100);
    });

    img.src = imageSource;
  }

  // rgbToHex
  // Thanks @css https://css-tricks.com/converting-color-spaces-in-javascript/
  function rgbToHex(value) {
    let r = value[0].toString(16);
    let g = value[1].toString(16);
    let b = value[2].toString(16);

    if (r.length === 1) r = "0" + r;
    if (g.length === 1) g = "0" + g;
    if (b.length === 1) b = "0" + b;

    return r + g + b;
  }

  // handleMainCanvasMouseMove
  function handleMainCanvasMouseMove(e) {
    if (activeTool === "pick") {
      let color = ctx.getImageData(
        e.nativeEvent.offsetX,
        e.nativeEvent.offsetY,
        1,
        1
      ).data;
      setCurrentHoveredColor(color);
    }
  }

  // handleMainCanvasClick
  function handleMainCanvasClick() {
    if (activeTool === "pick") {
      if (selectedColors.length < 7 && selectedColors.length !== 7) {
        let hex = rgbToHex(currentHoveredColor);
        if (selectedColors.indexOf(hex) < 0) {
          setSelectedColors([...selectedColors, hex]);
        }
      }
    }
  }

  return (
    <div
      className="main"
      style={{
        width: mainSize[0] + "px",
        height: mainSize[1] + "px",
      }}
    >
      <div
        className="main__image-wrap"
        style={{
          transform: `scale(${zoomed / 100})`,
          cursor:
            activeTool === "zoom"
              ? activeKey === "Alt"
                ? "zoom-out"
                : "zoom-in"
              : activeTool === "pick"
              ? "crosshair"
              : "default",
        }}
        onClick={() => {
          if (activeTool === "zoom") {
            if (activeKey !== "Alt") {
              if (zoomed + 10 > 300) {
                setZoomed(300);
              } else {
                setZoomed(zoomed + 10);
              }
            } else {
              if (zoomed - 10 < 5) {
                setZoomed(5);
              } else {
                setZoomed(zoomed - 10);
              }
            }
            recalculateMainSize();
          }
        }}
      >
        <img
          src={imageSource}
          alt=""
          aria-hidden="true"
          className="main__image"
          ref={refMainImage}
          onLoad={(e) => {
            ctx.clearRect(0, 0, imageSizes[0], imageSizes[1]);
            imageToMainCanvas(e);
          }}
        />
        <canvas
          className="main__canvas"
          width={imageSizes[0]}
          height={imageSizes[1]}
          ref={refMainCanvas}
          onMouseMove={handleMainCanvasMouseMove}
          onClick={handleMainCanvasClick}
          onContextMenu={(e) => e.preventDefault()}
        ></canvas>
      </div>
    </div>
  );
}

// EXPORT
export default MainCanvas;
