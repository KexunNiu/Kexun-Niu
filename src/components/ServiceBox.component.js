import React from "react";
import Emoji from "react-emoji-render";
import resume from "../Resume.pdf";

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

  const buttonClass = [
    "btn btn-outline-success grid-item",
    "btn btn-outline-danger grid-item",
    "btn btn-outline-warning grid-item",
    "btn btn-outline-light grid-item",
  ];

  return (
    <div className="middle-content flex-grow-1 d-flex flex-column justify-content-between">
      <div className="overflow-hidden w-100 h-75 shadow-lg info-panel rounded">
        <iframe
          src="https://kexunniu.vercel.app"
          title="posts"
          frameBorder="0"
          width="100%"
          height="100%"
          allowFullScreen
        ></iframe>
      </div>

      <div className="serviceBox  shadow-lg flex-column">
        <div>
          <Emoji
            className="text-wrap"
            style={{
              color: "white",
            }}
          >
            🚀Services
          </Emoji>
        </div>
        <div className="allServices">
          {Object.keys(services).map((key, index) => (
            <a
              className={`${buttonClass[index % 4]} services`}
              href={services[key]}
              key={key}
              target="_blank"
              rel="noreferrer"
            >
              {key}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
