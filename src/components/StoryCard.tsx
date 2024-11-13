import { getDateFromTimestamp } from "../utils/getDateFromTimestamp";
import { TStory } from "../types";

interface StoryCardProps {
 story: TStory;
}

export const StoryCard = ({ story }: StoryCardProps) => {
 const { day, month, year } = getDateFromTimestamp(story.storyTimestamp);

 const IMG_URL = "https://images.unsplash.com/photo-1504194104404-433180773017?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

 return (
  <li className="story">
   <a href={story.storyUrl} target="_blank">
    <div className="story-top-section">
     <div className="story-score">{story.storyScore}</div>
     <img src={IMG_URL} alt="awesome hacker story pic" />
     <div className="story-body">
      <p className="story-date">
       {day} {month} {year}
      </p>
      <h3 className="story-title">{story.storyTitle}</h3>
      <p className="author-info">
       By {story.author}, <span className="author-karma-score">{story.authorKarmaScore}</span>
      </p>
     </div>
    </div>
   </a>
  </li>
 );
};
