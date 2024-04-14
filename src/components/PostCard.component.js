import { React } from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <div className="card shadow-lg m-3">
      <Link to={`/posts/${post.slug}`} state={post} className="text-decoration-none">
        <div className="thumbnailContainer">
          <img
            src={post.thumbnail}
            className="card-img-top thumbnailImg"
            alt="..."
          />
        </div>
        <div className="card-body">
          <h5 className="card-title text-light">{post.title}</h5>
          <h6 className="card-date text-secondary">{formatDate(post.date)}</h6>
          <br />
          <p className="card-text text-white-50">{post.summary}</p>
          {post.tags &&
            post.tags.map((tag) => (
              <span className="badge rounded-pill m-1">{tag}</span>
            ))}
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
