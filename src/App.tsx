import { useEffect, useState } from "react";
import { getRandomStoryIds, getStoryData, getAuthorData } from "./services";
import { StoryCard } from "./components/StoryCard";
import { TStory } from "./types";

function App() {
 const [stories, setStories] = useState<TStory[]>([]);

 useEffect(() => {
  fetchData();
 }, []);

 const fetchData = async () => {
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
 };

 return (
  <main>
   <h1>Awesome Hacker Stories</h1>
   {stories.length > 0 ? (
    <ul className="stories-container">
     {stories.map((story) => (
      <StoryCard key={story.storyId} story={story} />
     ))}
    </ul>
   ) : (
    <p className="loading-text">Loading stories...</p>
   )}
  </main>
 );
}

export default App;
