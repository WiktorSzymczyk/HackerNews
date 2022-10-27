import React, { useState, useEffect } from "react";
import { getStoryIds, getStory } from "../services/HackernewsApi";
import { Story } from "../components/Story";

export const StoriesContainer = () => {
  //set the state to empty array
  const [storyIds, setStoryIds] = useState([]);

  //console.log(storyIds);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  // example to get individual stories using a story id, insert id number in thge parentheses to check
  //getStory().then((data) => console.log(data));

  // console.log("whatchumacallit");

  //if the empty array in the use Effect has StoryIds this would cause an infinite loop to run which we dont want ie. every time the setStoryID is cha nged it would update the story id and so on causing an infinite loop
  //

  //we want to loop over the 500 so stories so we use the map funtion

  return storyIds.map((storyId) => <Story storyId={storyId} />);

  //return <p>{JSON.stringify(storyIds)}</p>;
};
