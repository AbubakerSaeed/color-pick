// IMPORTS
import React, { useRef } from "react";

import "./ImageOptions.css";
import { ReactComponent as IconZap } from "./../svg/icon-zap.svg";

// ImageOptions
function ImageOptions({ activeTool, imageUrl, setImageUrl, setImageSource }) {
  // useRef
  let refUploadImageButton = useRef(null);

  // setImage
  function setImage(value, method) {
    if (window.FileList && window.File && window.FileReader) {
      if (method === "upload") {
        const file = value.target.files[0];
        const reader = new FileReader();
        reader.addEventListener("load", (event) => {
          setImageSource(event.target.result);
        });
        reader.readAsDataURL(file);
      } else if (method === "input") {
        if (value.startsWith("https://")) {
          setImageSource(value);
        }
      }
    }
  }

  return (
    <div
      className="canvas__options image"
      style={{ display: activeTool === "image" ? "initial" : "none" }}
    >
      <div className="image__options">
        <div className="image__input-wrap">
          <input
            type="text"
            className="image__input"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setImage(imageUrl, "input");
              }
            }}
          />
          <button
            className="image__input-btn"
            onClick={() => {
              setImage(imageUrl, "input");
            }}
          >
            <IconZap />
          </button>
        </div>
        <div className="image__separator">OR</div>
        <div className="image__upload-wrap">
          <button
            className="image__upload-btn"
            onClick={() => refUploadImageButton.current.click()}
          >
            <input
              type="file"
              name="file"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => {
                setImage(e, "upload");
              }}
              ref={refUploadImageButton}
            />
            <span>Upload File</span>
          </button>
          <div className="image__upload-supported">
            Supported Files: jpg, jpeg, png.
          </div>
        </div>
      </div>
    </div>
  );
}

// EXPORT
export default ImageOptions;
