import { React, useState, useEffect } from "react";
import { Post, getAllPostInfo } from "../notion";
import PostCard from "./PostCard.component";


function PostsComponent() {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

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

      const uniqueTags = Array.from(
        new Set(posts.flatMap((post) => post.tags))
      );
      setTags(uniqueTags);
    });
  }, []);

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPosts = posts.filter((post) => {
    // Filter based on selected tag
    if (selectedTag && !post.tags.includes(selectedTag)) {
      return false;
    }
    // Filter based on search query
    if (searchQuery && !post.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="info-panel">
      <div>
        {tags.map((tag) => (
          <button key={tag} onClick={() => handleTagSelect(tag)} className="tagButton">
            {tag}
          </button>
        ))}
        <button onClick={() => handleTagSelect('')} className="tagButton">
          All
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search Keywords"
          value={searchQuery}
          onChange={handleSearch}
          className="searchInput"
        />
      </div>
      <div>
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default PostsComponent;
