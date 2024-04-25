import React from "react";
import { useState, useEffect } from "react";

const Blog = () => {
  const [blog, setBlog] = useState(blogData);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setBlog(json));
  }, []);

  return (
    <>
      <h2>My Blog Post</h2>
      {blog.map((item, index) => {
        return (
          <div key={index}>
            No.{item.id} -- {item.title}{" "}
          </div>
        );
      })}
    </>
  );
};

export default Blog;
