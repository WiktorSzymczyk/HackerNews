import React from "react";
import Search from "./Search";
import Logo from "../asset/logo-hn-search-a822432b.webp";

const Header = () => {
  return (
    <div>
      <img src={Logo} alt="Logo" />
      <h1 className="header-title">
        Search <br /> Hacker News
      </h1>

      <Search />
    </div>
  );
};

export default Header;
