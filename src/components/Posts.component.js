import {React,useState,useEffect} from "react";
import { Post,getAllPostInfo } from "../notion";
import PostCard from "./PostCard.component";

function PostsComponent() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getAllPostInfo().then((data) => {
      const posts = data.map((post) => {
        return new Post(
          post.id,
          post.title,
          post.summary,
          post.category,
          post.date,
          post.tags,
          post.thumbnail[0].url,
          post.slug
        );
      });
      setPosts(posts);
    });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostsComponent;
