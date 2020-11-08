// IMPORTS
import React from "react";

import "./Tools.css";
import { ReactComponent as IconCursor } from "./svg/icon-cursor.svg";
import { ReactComponent as IconZoomIn } from "./svg/icon-zoom-in.svg";
import { ReactComponent as IconPick } from "./svg/icon-pick.svg";
import { ReactComponent as IconImage } from "./svg/icon-image.svg";
import { ReactComponent as IconHelp } from "./svg/icon-help.svg";

// COMPONENTS
import Modal from "./Modal";

// TOOLS
function Tools({ activeTool, setActiveTool, modalState, setModalState }) {
  return (
    <div className="tools">
      <div className="tools__btn-wrapper">
        <button
          className="tools__btn"
          onClick={() => setActiveTool("cursor")}
          data-tool-active={activeTool === "cursor"}
        >
          <IconCursor />
        </button>
      </div>
      <div className="tools__btn-wrapper">
        <button
          className="tools__btn"
          onClick={() => setActiveTool("zoom")}
          data-tool-active={activeTool === "zoom"}
        >
          <IconZoomIn />
        </button>
      </div>
      <hr className="tools__hr" />
      <div className="tools__btn-wrapper">
        <button
          className="tools__btn"
          onClick={() => setActiveTool("pick")}
          data-tool-active={activeTool === "pick"}
        >
          <IconPick />
        </button>
      </div>
      <div className="tools__btn-wrapper">
        <button
          className="tools__btn"
          onClick={() => setActiveTool("image")}
          data-tool-active={activeTool === "image"}
        >
          <IconImage />
        </button>
      </div>
      <hr className="tools__hr" />
      <div className="tools__btn-wrapper">
        <button
          className="tools__btn"
          onClick={() => setModalState("instructions-modal")}
        >
          <IconHelp style={{ height: "1.4rem", "--stroke-width": "2.2" }} />
        </button>
      </div>

      {modalState === "instructions-modal" ? (
        <Modal modalState={modalState} setModalState={setModalState}>
          <div className="modal__heading-wrapper">
            <h2 className="modal__heading">Instructions</h2>
            <p className="modal__desc">Get comfortable with the app.</p>
          </div>

          <ul className="modal__content">
            <li>
              <strong>
                <IconCursor /> Cursor:{" "}
              </strong>
              Normal state.
            </li>

            <li>
              <strong>
                <IconZoomIn /> Zoom:{" "}
              </strong>
              After selecting it, clicking on the image will zoom in the image,
              and clicking it while holding "Alt" will zoom out the image. You
              can also use the range input to zoom in/out the image. The option
              "Recalculate Size" will adjust the image size, it is recommended
              to use it after every time you zoom in/out the image whether it is
              via clicking or range input especially if the zoomed-in image is
              bigger than the canvas area.
            </li>

            <li>
              <strong>
                <IconPick /> Pick:{" "}
              </strong>
              Selecting this and clicking on the image will pick the color from
              the image and going to add it to the scheme, if it's the same
              color that is already available in the scheme it won't add it
              again, useful for not picking the same colors again. Although you
              can pick as many colors as you want, in one scheme there is a
              limit of seven colors.
            </li>

            <li>
              <strong>
                <IconImage /> Image:{" "}
              </strong>
              There are currently two options to add an image, the first is
              adding "URL" via input, and the second is to upload image from
              your device. The latter will always be going to work and you can
              add any of your images but for the former it's limited, the image
              URL should be an "https" and if the image isn't displaying then
              the site from where you are taking the image doesn't allow direct
              access/manipulation of the image from their site, if you've got an
              account there and you're the owner of the picture, yet it isn't
              displaying, it's for security reasons.
            </li>

            <li>
              <strong>New Scheme: </strong>
              If you want to create a new scheme; this will clear all the colors
              that you've picked in your scheme, and will change the image and
              image's URL to the application's default image and image's URL.
            </li>

            <li>
              <strong>Clear Colors: </strong>
              This will only clear the colors from the scheme, and will not
              affect anything else.
            </li>

            <li>
              <strong>Copy Color: </strong>
              To copy the color, click on the color preview that is before the
              color's hex code and the color's hex code will be copied to the
              clipboard.
            </li>

            <li>
              <strong>Remove Color: </strong>
              To remove the color from the scheme, click on the color's hex code
              and it will be removed.
            </li>

            <li>
              <strong>Import: </strong>
              You can import your already exported color scheme, which should be
              a color pick exported file in a .json format.
            </li>

            <li>
              <strong>Export: </strong>
              The export will save your color scheme on your device in a .json
              format.
            </li>
          </ul>
        </Modal>
      ) : undefined}
    </div>
  );
}

// EXPORT
export default Tools;
