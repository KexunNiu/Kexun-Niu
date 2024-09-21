import { React } from "react";
import Emoji from "react-emoji-render";
import PostsComponent from "./Posts.component";


const ServiceBox = () => {

  return (
    <div className="middle-content d-flex flex-column shadow-lg p-3">
      <div>
        <Emoji
          className="text-wrap"
          style={{
            color: "white",
          }}
        >
          📹 Posts
        </Emoji>
      </div>
      <div className="text-light">
        <hr
          style={{
            width: "100%",
          }}
        />
      </div>

      <div className="info-panel mb-3">
        <PostsComponent />
      </div>
    </div>
  );
};

export default ServiceBox;
