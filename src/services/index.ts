const BASE_URL = "https://hacker-news.firebaseio.com/v0/";

export const getRandomStoryIds = async (numberOfElements: number) => {
 const STORY_IDS_URL = BASE_URL + "topstories.json";

 try {
  const response = await fetch(STORY_IDS_URL);
  const reponse = await response.json();

  const shuffledArr = [...reponse].sort(() => 0.5 - Math.random());
  const randomElements: number[] = shuffledArr.slice(0, numberOfElements);
  return randomElements;

 } catch (error) {
  console.log(`Error occurred when fetching story data:`, error);
 }
};

export const getStoryData = async (storyId: number) => {
 const STORY_DATA_URL = BASE_URL + `item/${storyId}.json`;

 try {
  const response = await fetch(STORY_DATA_URL);
  const reponse = await response.json();
  return reponse;

 } catch (error) {
  console.log(`Error occurred when fetching story data:`, error);
 }
};

export const getAuthorData = async (author: string) => {
const ATHOR_DATA_URL = BASE_URL + `user/${author}.json`;

 try {
  const response = await fetch(ATHOR_DATA_URL);
  const reponse = await response.json();
  return reponse;

 } catch (error) {
  console.log(`Error occurred when fetching author data:`, error);
 }
};
