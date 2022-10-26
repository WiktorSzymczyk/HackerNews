import data from "./asset/data.json";
import Logo from "./asset/logo-hn-search-a822432b.webp";
import Main from "./components/Main";
import Footer from "./components/Footer";
import React, { useState } from "react";

function App() {
  const { hits } = data;
  const [text, setText] = useState("");
  const inputTextHandler = (e) => {
    setText(e.target.value);
    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Input is empty");
    } else {
      setText(e.target.value);
      setText("");
    }
  };

  return (
    <div className="container">
      <div className="header-container">
        <img src={Logo} alt="Logo" />
        <h2 className="header-title">
          Search <br /> Hacker News
        </h2>
        <div className="search-container">
          <span className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>

          <form
            type="text"
            className="search-input-form"
            onSubmit={handleSubmit}
          >
            <input
              type="search"
              placeholder="Search stories by title, url or author"
              className="search-input"
              value={text}
              autoComplete="off"
              onChange={inputTextHandler}
            />
          </form>
        </div>
      </div>
      <Main hits={hits} text={text} />
      <Footer />
    </div>
  );
}

export default App;
