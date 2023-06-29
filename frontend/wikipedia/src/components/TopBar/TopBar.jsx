import React from "react";
import "./TopBar.css";

const TopBar = () => {
    return (
        <div className="top__bar">
            <div className="topbar__itens">
                <div className="talk__cont">
                    <a href="/">Talk</a>
                    <a href="/">Contribuitions</a>
                </div>

                <div className="login__register">
                    <a href="/">create account</a>
                    <span className="separator">/</span>
                    <a href="/">log in</a>

                    <div>
                        <input type="text" placeholder="Enter you search..." className="search"/>
                        <i class="bi bi-search"></i>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TopBar;