import React from "react";
import { getStaticProps, findPostBySlug } from "../notion";
import { NotionRenderer } from "react-notion";
import { useParams, useLocation, Link } from "react-router-dom";

import "../styles/postDetailPage.css";

const PostsDetail = () => {
  const location = useLocation();
  const { slug } = useParams();

  const [post, setPost] = React.useState(null);
  const [blockMap, setBlockMap] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [showDelayedMessage, setShowDelayedMessage] = React.useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  React.useEffect(() => {
    setLoading(true);
    if (location.state) {
      setPost(location.state);
      setLoading(false);
    } else {
      findPostBySlug(slug)
        .then((data) => {
          setPost(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          console.log(`The posts with slug: ${slug} is not found`);
        });
    }
  }, [slug, location.state]);

  React.useEffect(() => {
    if (post) {
      // Ensure post is not null before trying to access post.id
      getStaticProps(post.id)
        .then((data) => {
          console.log(data);
          setBlockMap(data.props.blockMap);
        })
        .catch((err) => {
          console.log(err);
          console.log(`The posts with title: ${post.title} is not found`);
        });
    }
  }, [post]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowDelayedMessage(true);
    }, 5000); // Delay set to 5000 milliseconds (5 seconds)

    return () => clearTimeout(timer); // Clear timer on component unmount
  }, []);

  if (loading || !blockMap) {
    return (
      <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center">
        <div
          className="spinner-border"
          style={{ width: "3rem", height: "3rem" }}
        ></div>
        <div style={{ height: "3rem" }}></div>
        <div
          style={{
            visibility: showDelayedMessage ? "visible" : "hidden",
          }}

          className={`text-primary h6 m-1 ease-in-message ${showDelayedMessage ? 'visible' : ''}`}
        >
          If it takes too long,
        </div>
        <div
          style={{
            visibility: showDelayedMessage ? "visible" : "hidden",
          }}
          className={`text-primary h6 m-1 ease-in-message ${showDelayedMessage ? 'visible' : ''}`}
        >
          Please considering going &nbsp;
          <Link to={"/"} className="btn btn-outline-warning">
            <p className="h6 m-1">Home</p>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="postDetailPage">
      <div
        className={`info-container container-sm ${
          !loading ? "fade-in active" : "fade-in"
        }`}
      >
        <span className="badge badge-cat rounded-pill m-1">
          {post.category}
        </span>
        <h1 className="h2">{post.title}</h1>
        <h6 className="card-date text-secondary">{formatDate(post.date)}</h6>
        {post.tags &&
          post.tags.map((tag) => (
            <span className="badge rounded-pill m-1" key={tag}>
              {tag}
            </span>
          ))}
      </div>
      <div
        className={`renderer-container container-sm m-5 ${
          !loading ? "fade-in active" : "fade-in"
        }`}
      >
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
              fillRule="evenodd"
              d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"
            />
          </svg>
          <p className="h6 m-1">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default PostsDetail;
