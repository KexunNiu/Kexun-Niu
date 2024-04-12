import React from "react";
import Emoji from "react-emoji-render";

const Neighbours = () => {
  const neighbours = {
    "Damian Li": "http://damianli.com",
    "Jinglong Zhao": "https://google.com",
  };
  return (
    <div className="p-3">
      <div>
        <Emoji
          className="text-wrap"
          style={{
            color: "white",
          }}
        >
          🚀Neighbours
        </Emoji>
        <div className="text-light">
          <hr />
        </div>
        <div
          className="neighbours shadow-lg rounded"
          style={{
            backgroundColor: "rgba(55, 53, 47, 0.3)",
            padding: "20px",
            width: "auto",
          }}
        >
          {Object.keys(neighbours).map((key) => (
            <div key={key}>
              <a
                className="btn btn-outline-light w-100 mt-2 text-wrap"
                href={neighbours[key]}
                key={key}
                target="_blank"
                rel="noreferrer"
              >
                {key}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Neighbours;
