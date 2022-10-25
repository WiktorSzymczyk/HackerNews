import React from "react";
import Search from "./Search";
import Logo from "../asset/logo-hn-search-a822432b.webp";

const Header = () => {
  return (
    <div className="header-container">
      <img src={Logo} alt="Logo" />
      <h2 className="header-title">
        Search <br /> Hacker News
      </h2>
      <Search />
    </div>
  );
};

export default Header;
