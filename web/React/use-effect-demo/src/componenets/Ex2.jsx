import { useState, useEffect } from "react";

export default function Ex2() {
  const [posts, setPosts] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 10));
      })
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // cleanup
  }, []);

  return (
    <div>
      <h2>Top Posts</h2>
      <div
        className="all-posts"
        style={{
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        {posts.map((post) => (
          <div
            className="post"
            key={post.id}
            style={{
              width: isSmallScreen ? "100%" : "200px",
            }}
          >
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
