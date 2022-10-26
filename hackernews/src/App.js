import data from "./asset/data.json";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import React, { useState } from "react";

function App() {
  const { hits } = data;
  const [text, setText] = useState("");

  return (
    <div className="container">
      <Header text={text} setText={setText} />
      <Main hits={hits} />
      <Footer />
    </div>
  );
}

export default App;
