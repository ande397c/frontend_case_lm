export const getRandomStoryIds = async (numberOfElements: number) => {
 const STORY_IDS_URL = "https://hacker-news.firebaseio.com/v0/topstories.json";

 try {
  const response = await fetch(STORY_IDS_URL);
  const reponse = await response.json();

  const shuffledArr = [...reponse].sort(() => 0.5 - Math.random());
  const tenRandomStories: number[] = shuffledArr.slice(0, numberOfElements);
  return tenRandomStories;

 } catch (error) {
  console.log(`Error occurred when fetching story data:`, error);
 }
};

export const getStoryData = async (storyId: number) => {
 const STORY_DATA_URL = `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`;

 try {
  const response = await fetch(STORY_DATA_URL);
  const reponse = await response.json();
  return reponse;

 } catch (error) {
  console.log(`Error occurred when fetching story data:`, error);
 }
};

export const getAuthorData = async (author: string) => {
const ATHOR_DATA_URL = `https://hacker-news.firebaseio.com/v0/user/${author}.json`;

 try {
  const response = await fetch(ATHOR_DATA_URL);
  const reponse = await response.json();
  return reponse;

 } catch (error) {
  console.log(`Error occurred when fetching author data:`, error);
 }
};
