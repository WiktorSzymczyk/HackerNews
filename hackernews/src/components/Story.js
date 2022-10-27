import React, { useState, useEffect } from "react";
import { getStory } from "../services/HackernewsApi";

export const Story = ({ storyId }) => {
  // set the initial story in useState as object
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <>
      <a href={story.url}>
        <p>{story.title}</p>
      </a>
      By: <p>{story.by}</p>
    </>
  ) : null;
};
