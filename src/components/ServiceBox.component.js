import { React } from "react";
import Emoji from "react-emoji-render";
import resume from "../Resume.pdf";
import PostsComponent from "./Posts.component";


const ServiceBox = () => {
  const services = {
    Resume: resume,
    Bilibili: "https://www.bilibili.com/",
    Gmail: "https://mail.google.com/mail/u/0/#inbox?compose=new",
    LinkedIn: "https://www.linkedin.com/",
    Search: "https://google.com",
    LeetCode: "https://leetcode.com/",
    ChatGPT: "https://chat.openai.com/",
  };



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
