import React from "react";
import Filter from "./Filter";
import Article from "./Article";

const Main = ({ hits, text}) => {
  return (
    <div className="main-container">
      <Filter />
      <Article hits={hits} text={text} />
      <div className="main-page-button">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        {/* <button> >> </button> */}
      </div>
    </div>
  );
};

export default Main;
