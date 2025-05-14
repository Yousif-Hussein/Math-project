import { useParams } from "react-router-dom";
import { ContentData } from "./ContentData";
const Content = () => {
  const { topic, section } = useParams();
  
  const content = ContentData[topic]?.[section] || "No content available for this section.";
  
  return (
    <div>
        <p>{content}</p>
    </div>
  );
};

export default Content;