import React from "react";
import { css } from '@emotion/css'


const Header = () => {
    return (
        <header>
            <img src="src/assets/Yoda.webp" alt="Logo" className="logo" />
            <nav className={css`display:grid;
            justify-content:center;
              font-size: x-large;
                font-family: fantasy;   
                `}>
            {/* Ligger utan vidarelänk */}
                <ul > 
                    <ul><a href="/">Hem</a></ul>
                    <ul><a href="/contact">Kontakt</a></ul>
                </ul>
            </nav>
        </header>
    );
};
export default Header;