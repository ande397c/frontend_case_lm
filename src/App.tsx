import { useEffect, useState } from "react";
import { StoriesList } from "./components/StoriesList";
import { getRandomStoryIds, getStoryData, getAuthorData } from "./services";
import { TStory } from "./types";

function App() {
 const [stories, setStories] = useState<TStory[] | undefined>(undefined);
 const [isLoading, setIsLoading] = useState(false);

 useEffect(() => {
  fetchData();
 }, []);

 const fetchData = async () => {
  setIsLoading(true);
  const storyIds = await getRandomStoryIds(10);
  if (!storyIds) return;

  const storiesData = await Promise.all(
   storyIds.map(async (storyId) => {
    const storyData = await getStoryData(storyId);
    const authorData = await getAuthorData(storyData.by);

    return {
     storyId: storyData.id,
     author: storyData.by,
     authorKarmaScore: authorData.karma,
     authorId: authorData.id,
     storyTitle: storyData.title,
     storyScore: storyData.score,
     storyTimestamp: storyData.time,
     storyUrl: storyData.url,
    };
   })
  );

  setStories(storiesData.sort((a, b) => a.storyScore - b.storyScore));
  setIsLoading(false);
 };

 return (
  <main>
   <h1 className="heading">Awesome Hacker Stories</h1>
   {isLoading && <p className="loading-text">Loading stories...</p>}
   <StoriesList stories={stories} />
  </main>
 );
}

export default App;
