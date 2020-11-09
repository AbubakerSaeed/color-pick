// IMPORTS
import React, { useRef } from "react";
import SimpleBar from "simplebar-react";

import "./Info.css";
import { ReactComponent as IconCross } from "./svg/icon-cross.svg";
import { ReactComponent as IconCopy } from "./svg/icon-copy.svg";
import { ReactComponent as IconHeart } from "./svg/icon-heart.svg";
import { ReactComponent as IconTwitter } from "./svg/icon-twitter.svg";
import { ReactComponent as IconGitHub } from "./svg/icon-github.svg";
import { ReactComponent as IconDribble } from "./svg/icon-dribbble.svg";

// INFO
function Info({ selectedColors, setSelectedColors }) {
  // useRef
  let refImportColorsButton = useRef(null);

  // copyColorToClipBoard
  function copyColorToClipBoard(e) {
    let range = document.createRange();
    range.selectNode(e.currentTarget.nextSibling);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
  }

  // removeColor
  function removeColor(c) {
    setSelectedColors(selectedColors.filter((i) => i !== c));
  }

  // importColors
  function importColors(e) {
    if (window.FileList && window.File && window.FileReader) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", (event) => {
        let data = JSON.parse(event.target.result);
        setSelectedColors(data.colors);
      });
      reader.readAsText(file);
      e.target.value = "";
    }
  }

  // exportColors
  function exportColors(e) {
    if (selectedColors.length > 0) {
      let data = {
        colors: selectedColors,
        generated: new Date(),
      };
      let url = URL.createObjectURL(
        new Blob([JSON.stringify(data)], {
          type: "application/json",
        })
      );
      e.target.setAttribute("href", url);
    } else {
      e.preventDefault();
    }
  }

  return (
    <div className="info">
      <div className="info__heading-wrapper">
        <h2 className="info__heading">Colors</h2>
        <div className="info__limit">
          <span style={{ color: "var(--primary)" }}>
            {selectedColors.length}
          </span>
          <span></span>
          <span>7</span>
        </div>
      </div>
      <ul className="info__colors">
        <SimpleBar style={{ maxHeight: "100%" }} autoHide={false}>
          {selectedColors.length === 0 ? (
            <p
              style={{
                opacity: ".8",
                textAlign: "center",
                marginTop: ".8rem",
              }}
            >
              Empty, just like space.
            </p>
          ) : undefined}

          {selectedColors.map((c) => (
            <li className="info__color" key={c}>
              <button
                className="info__color-preview"
                style={{ background: `#${c}` }}
                onClick={(e) => copyColorToClipBoard(e)}
              >
                <IconCopy />
              </button>
              <div
                className="info__color-hex-container"
                style={{ "--x": "94%", "--y": "-12px" }}
              >
                <div
                  className="info__color-hex"
                  onMouseMove={(e) => {
                    let x = e.nativeEvent.offsetX;
                    let y = e.nativeEvent.offsetY;
                    e.target.parentElement.style = `--x: ${x}px; --y: ${y}px`;
                  }}
                  onMouseOut={(e) => {
                    e.target.parentElement.style = `--x: 94%; --y: -12px`;
                  }}
                  onClick={() => removeColor(c)}
                >
                  #{c.toUpperCase()}
                </div>
                <button
                  className="info__color-remove"
                  onClick={(e) => {
                    e.target.previousElementSibling.click();
                  }}
                >
                  <IconCross />
                </button>
              </div>
            </li>
          ))}
        </SimpleBar>
      </ul>
      <div className="info__actions">
        <button
          className="info__btn"
          onClick={() => refImportColorsButton.current.click()}
        >
          <input
            type="file"
            name="upload"
            accept=".json"
            onChange={(e) => importColors(e)}
            ref={refImportColorsButton}
            tabIndex={-1}
          />
          <span>Import</span>
        </button>
        {/* eslint-disable-next-line */}
        <a
          href=""
          className="info__btn"
          download="color-pick-scheme"
          onClick={(e) => exportColors(e)}
        >
          Export
        </a>
      </div>
      <footer className="info__footer">
        <p>
          Made with <IconHeart /> by{" "}
          <a
            href="https://twitter.com/AbubakerSaeed96"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Abubaker Saeed</strong>
          </a>
        </p>
        <div className="info__launch-links">
          <a
            href="https://twitter.com/AbubakerSaeed96/status/1325408887424610304"
            target="_blank"
            rel="noopener noreferrer"
            className="info__link"
          >
            <IconTwitter />
          </a>
          <a
            href="https://github.com/AbubakerSaeed/color-pick"
            target="_blank"
            rel="noopener noreferrer"
            className="info__link"
          >
            <IconGitHub />
          </a>
          <a
            href="https://dribbble.com/shots/14542480-Color-Pick-Launch"
            target="_blank"
            rel="noopener noreferrer"
            className="info__link"
          >
            <IconDribble />
          </a>
        </div>
        <div className="product-hunt" style={{ marginTop: "12px" }}>
          <a
            href="https://www.producthunt.com/posts/color-pick?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-color-pick"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=274059&theme=light"
              alt="Color Pick - Pick colors from around you for your next project | Product Hunt"
              style={{ width: "250px", height: "54px" }}
              width="250"
              height="54"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}

// EXPORT
export default Info;
