import axios from "axios";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

//pass an id to HackernewsAPI using the async method that takes in a storyId

export const getStory = async storyId => {
  // result is alrerady defined in getStoryId? How can there be 2 'results'?
  const result = await axios.get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data);


    return result;
};

//to get the ids for the story we use the following with the proper name to help identify
// to help with rendering of the UI we use async in the story ids.
//queueMicrotask()is a fucntion of the async

export const getStoryIds = async () => {
  const result = await axios.get(newStoriesUrl).then(({ data }) => data);
  //we use the get method for newstories to get the data from newstoriesUrl
  // the { data } detsturctures the array and cleans up the 'data'
  return result;
};
