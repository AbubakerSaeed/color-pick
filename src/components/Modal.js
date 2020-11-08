// IMPORT
import React, { useEffect } from "react";
import SimpleBar from "simplebar-react";

import "./Modal.css";
import { ReactComponent as IconClose } from "./svg/icon-close.svg";

// Modal
function Modal({ children, modalState, setModalState }) {
  // modalCloseSettings
  function modalCloseSettings(e) {
    if (modalState !== "hidden") {
      if (e.key === "Escape") {
        setModalState("hidden");
      }
    }
  }

  // useEffect
  useEffect(() => {
    window.addEventListener("keydown", modalCloseSettings);
    return () => {
      window.removeEventListener("keydown", modalCloseSettings);
    };
  });

  // handleModalCloseButton
  function handleModalCloseButton() {
    setModalState("hidden");
  }

  return (
    <div
      className="modal-wrapper"
      onClick={(e) =>
        e.target.classList.contains("modal-wrapper")
          ? setModalState("hidden")
          : undefined
      }
    >
      <div className="modal">
        <SimpleBar
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {children}
        </SimpleBar>
        <button
          className="modal__close-btn"
          onClick={() => handleModalCloseButton()}
        >
          <IconClose />
        </button>
      </div>
    </div>
  );
}

// EXPORTS
export default Modal;
