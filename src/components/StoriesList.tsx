import { StoryCard } from "./StoryCard";
import { TStory } from "../types";

interface StoriesListProps {
stories: TStory[] | undefined
}

export const StoriesList = ({ stories }: StoriesListProps) => {
 return (
  <ul className="stories-container">
   {stories?.map((story) => (
    <StoryCard key={story.storyId} story={story} />
   ))}
  </ul>
 );
};