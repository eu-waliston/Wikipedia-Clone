import React from "react";
import "./LeftBar.css";

const LeftBar = () => {
  const [nav, setNavbar] = React.useState(true);

  const toggleMenu = () => {
    setNavbar(!nav);
  };

  return (
    <>
      <i class="fa-solid fa-bars-staggered" onClick={toggleMenu}></i>

      <div className={nav ? "left__bar_toggle" : "left__bar"}>
        <div className={nav ? "logo__section_toggle" : "logo__section"}>
          <img
            src="./Images/Wikipedia-logo-v2.png"
            alt="logo"
            className="logo"
          />
          <img
            src="./Images/Wikipedia_wordmark.png"
            alt="logo"
            className="logo__letters"
          />
          <p>the free encyclopedia</p>
        </div>
        <div className={nav ? "menu__section__toggle" : "menu__section"}>
          <a href="/">main page</a>
          <a href="/">contents</a>
          <a href="/">featured content</a>
          <a href="/">current events</a>
          <a href="/">random article</a>
          <a href="/">donate to wikipedia</a>
          <a href="/">wikipedia store</a>

          <h1>interaction</h1>

          <a href="/">help</a>
          <a href="/">about wipipedia</a>
          <a href="/">community portal</a>
          <a href="/">recent change</a>
          <a href="/">contact page</a>

          <h1>tools</h1>

          <a href="/">what link here</a>
          <a href="/">related changes</a>
          <a href="/">upload file</a>
          <a href="/">special pages</a>
          <a href="/">permanent link</a>
          <a href="/">page information</a>
          <a href="/">wikipedia item</a>
          <a href="/">cite this page</a>

          <h1>print/export</h1>
          <a href="/">create a book</a>
          <a href="/">
            download as <span style={{ textTransform: "uppercase" }}>PDF</span>
          </a>
          <a href="/">printable version</a>

          <h1>in the other projects</h1>
          <a href="/">wikipedia commons</a>
        </div>
      </div>
    </>
  );
};

export default LeftBar;
