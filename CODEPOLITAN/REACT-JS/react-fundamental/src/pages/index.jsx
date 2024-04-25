import { useState, useEffect } from "react";
import blogData from "../blog.json";
import Article from "../components/Article";
import Search from "../components/Search";
import Count from "../components/Count";

const HomePages = () => {
  const [blog, setBlog] = useState(blogData);
  const [totalBlog, setTotalBlog] = useState(0);
 

  const onSearchChange = (value) => {
    const filterBlog = blogData.filter((item) => item.title.toLowerCase().includes(value));

    setBlog(filterBlog);

    setTotalBlog(filterBlog.length);
  };

  

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalBlog={totalBlog} />
      {blog.map(({ title, date, tags, isNew }, index) => {
        return <Article title={title} date={date} tags={tags} isNew={isNew} key={index} />;
      })}
      <hr />
      <h2>External Blog From API</h2>
      

      <Count />
    </>
  );
};

export default HomePages;
