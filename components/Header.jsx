import React from "react";

const Header = () => {
    return (
        <header className="header">
            <img src="src/assets/Yoda.webp" alt="Logo" className="logo" />
            <nav>
                <ul>
                    <ul><a href="/">Hem</a></ul>
                    <ul><a href="/contact">Kontakt</a></ul>
                </ul>
            </nav>
        </header>
    );
};
export default Header;