// IMPORTS
import React from "react";

import "./Header.css";
import { ReactComponent as IconApp } from "./svg/icon-app.svg";
import { ReactComponent as IconRight } from "./svg/icon-right.svg";
import { ReactComponent as IconSun } from "./svg/icon-sun.svg";

// COMPONENTS
import Modal from "./Modal";

// HEADER
function Header({
  setImageUrl,
  setImageSource,
  setSelectedColors,
  modalState,
  setModalState,
}) {
  // newScheme
  function newScheme() {
    setImageUrl("https://images.unsplash.com/photo-1433259651738-0e74537aa8b5");
    setImageSource(
      "https://images.unsplash.com/photo-1541508186468-098826081946?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
    );
    setSelectedColors([]);
  }

  // clearColors
  function clearColors() {
    setSelectedColors([]);
  }

  // handleSupportButton
  function handleSupportButton(e) {
    e.preventDefault();
    setModalState("support-modal");
  }

  return (
    <header className="header">
      <div className="header__logo">
        <a href="https://colorpick.vercel.app">
          <h1>Color Pick</h1>
          <IconApp />
        </a>
      </div>
      <div className="header__actions">
        <div className="header__editor">Picker</div>
        <div className="header__editor-actions">
          <div className="header__editor-action">
            <button className="header__editor-btn" onClick={() => newScheme()}>
              <IconRight />
              New Scheme
            </button>
          </div>
          <div className="header__editor-action">
            <button
              className="header__editor-btn"
              onClick={() => clearColors()}
            >
              <IconRight />
              Clear Colors
            </button>
          </div>
        </div>
      </div>
      <div className="header__support">
        <button
          className="header__support-btn"
          onClick={(e) => handleSupportButton(e)}
        >
          <IconSun /> Support this project
        </button>
      </div>
      {modalState === "support-modal" ? (
        <Modal modalState={modalState} setModalState={setModalState}>
          <div className="modal__heading-wrapper">
            <h2 className="modal__heading">Support</h2>
            <p className="modal__desc">Give this project a little support.</p>
          </div>

          <div className="modal__content">
            <p>
              If you love this small project of mine and want to support it,
              please consider sharing it with your family, friends, network, and
              anyone for whom this application might be useful.
            </p>

            <p>
              The project is mainly for designers, decorators, artists, and
              nature-lovers, what I am trying to say is, literally for everyone,
              so, that they can get colors from around the real-world; from
              around them and use them in their projects or even to decides
              which colors they need to be in their house, living room, kitchen,
              bedroom, etc.
            </p>

            <p>
              If you have a Twitter social network account, please use and like
              this product{" "}
              <a
                href="https://twitter.com/AbubakerSaeed96"
                target="_blank"
                rel="noopener noreferrer"
              >
                launch tweet
              </a>{" "}
              from me to share it in your network and give me a follow.
            </p>

            <p>
              The project source code is open-source and is available on{" "}
              <a
                href="https://github.com/AbubakerSaeed"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{" "}
              (MIT-Licensed). If you want to contribute and/or report some
              issue, please submit there. Also, give it a 🌟 too. (Thank You!)
            </p>

            <p>
              If you're using colors that are picked from here and want to
              support a little further only if it's not a burden, please
              consider adding any one of the images that are shown below in your
              images/code.
            </p>

            <div className="modal__images-container">
              <figure>
                <img src="/assets/original.png" alt="original" />
                <figcaption>Original</figcaption>
              </figure>
              <figure>
                <img
                  src="/assets/original-with-name.png"
                  alt="original with name"
                />
                <figcaption>Original with name</figcaption>
              </figure>

              <figure>
                <img src="/assets/black.png" alt="black" />
                <figcaption>Black</figcaption>
              </figure>
              <figure>
                <img src="/assets/black-with-name.png" alt="black with name" />
                <figcaption>Black with name</figcaption>
              </figure>

              <figure>
                <img src="/assets/white.png" alt="white" />
                <figcaption>White</figcaption>
              </figure>
              <figure>
                <img src="/assets/white-with-name.png" alt="white with name" />
                <figcaption>White with name</figcaption>
              </figure>

              <p
                style={{
                  width: "100%",
                  textAlign: "center",
                  fontSize: "1rem",
                  paddingTop: ".6rem",
                }}
              >
                All images are in a .png format with transparent background.
              </p>
            </div>

            <p>
              Lastly, if you like to work with me,{" "}
              <a href="mailto:abubaker.saeed.1996@gmail.com">hire me</a>. I am
              available for{" "}
              <a
                href="https://www.abubakersaeed.com/hire-me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                hire
              </a>
              .
            </p>

            <p>Thank you so much for using this application, happy picking!</p>
          </div>
        </Modal>
      ) : undefined}
    </header>
  );
}

// EXPORT
export default Header;
