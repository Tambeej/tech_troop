import { useState, useEffect } from "react";

export default function Ex2() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 10)); 
      })
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div >
      <h2>Top Posts</h2>
      <div className="all-posts">
        {posts.map((post) => (
          <div className="post"
            key={post.id}
          >
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
