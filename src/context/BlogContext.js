import React, { createContext, useState } from "react";

const BlogContext = createContext();
export const BlogProvider = ({ children }) => {
  const [blogPost, setBlogPost] = useState([]);
  const BlogPost = [
    { title: "Blog Post #1" },
    { title: "Blog Post #2" },
    { title: "Blog Post #3" },
  ];

  const addBlogPost = () => {
    if (blogPost.length + 1 > 10) {
      return setBlogPost([...blogPost]);
    }
    setBlogPost([...blogPost, { title: `Blog Post #${blogPost.length + 1}` }]);
  };

  return (
    <BlogContext.Provider value={{ data: blogPost, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};
export default BlogContext;
