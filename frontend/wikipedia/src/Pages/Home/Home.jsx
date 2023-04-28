import React from "react";
import "./Home.css";

import LeftBar from "../../components/Navbar/LeftBar/LeftBar";
import TopBar from "../../components/Navbar/TopBar/TopBar";


const Home = () => {
    return (
        <div className="home__page">
            <LeftBar />
            <TopBar />

            <div className="home__itens">
                <img className="W" src={require("./Wikipedia_affiliative_mark.png")} alt="wiki" />
                <h1>wikipedia</h1>
                <p>the free <span className="blue__link" >encyclopedia</span> that <span className="blue__link">anyone</span> can edit.</p>
                <p><span className="blue__link">6,646,428</span> Articles in English</p>
            </div>
        </div>
    )
}

export default Home;