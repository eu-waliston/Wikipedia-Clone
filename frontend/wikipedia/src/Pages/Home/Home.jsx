import React from "react";
import "./Home.css";
/**
 * ---- TODO 3 Paginas
 * Login
 * Register
 * Recover
 */

const Home = () => {
  return (
    <div className="home__page">
      <div className="home__itens">
        <img
          className="W"
          src="./Images/Wikipedia_affiliative_mark.png"
          alt="wiki logo"
        />
        <h1>wikipedia</h1>
        <p>
          the free <span className="blue__link">encyclopedia</span> that{" "}
          <span className="blue__link">anyone</span> can edit.
        </p>
        <p>
          <span className="blue__link">6,646,428</span> Articles in English
        </p>

        <button className="bnt_articles">Read Articles</button>
      </div>
    </div>
  );
};

export default Home;
