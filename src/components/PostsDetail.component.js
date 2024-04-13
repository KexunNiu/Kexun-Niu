import React from "react";
import { getStaticProps } from "../notion";
import { NotionRenderer } from "react-notion";
import { useLocation, Link } from "react-router-dom";

import "../styles/postDetailPage.css";

const PostsDetail = () => {
  const location = useLocation();
  const post = location.state;

  const [blockMap, setBlockMap] = React.useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  React.useEffect(() => {
    getStaticProps(post.id)
      .then((data) => {
        console.log(data);
        setBlockMap(data.props.blockMap);
      })
      .catch((err) => {
        console.log(err);
        console.log(`The posts with title: ${post.title} is not found`);
      });
  }, [post]);

  if (blockMap) {
    return (
      <div className="postDetailPage">
        <div className="info-container container-sm">
          <span className="badge badge-cat rounded-pill m-1">{post.category}</span>
          <h1 className="h2">{post.title}</h1>
          <h6 className="card-date text-secondary">{formatDate(post.date)}</h6>
          {post.tags &&
            post.tags.map((tag) => (
              <span className="badge rounded-pill m-1">{tag}</span>
            ))}
        </div>
        <div className="renderer-container container-sm m-5">
          <NotionRenderer blockMap={blockMap} />
          <Link to={"/"} className="btn btn-outline-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-return-left m-1"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"
              />
            </svg>
            <p className="h6 m-1">Back</p>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <h1>
        My server is under attack!!!!! Stop accessing it!!!!
        <p>(for more please check console)</p>
      </h1>
    );
  }
};

export default PostsDetail;
