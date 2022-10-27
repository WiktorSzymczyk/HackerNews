import React, { useState, useEffect } from "react";
import { getStoryIds } from "./services/HackernewsApi";

const App = () => {
  //set the state to empty array
  const [storyIds, setStoryIds] = useState([]);

  console.log(storyIds)

  useEffect(() => {
    getStoryIds().then(data => data && setStoryIds(data));
  }, []);

  return <p>{JSON.stringify(storyIds)}</p>;
};

export default App;
