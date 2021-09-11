import React, { createContext } from "react";

const BlogContext = createContext();
export const BlogProvider = ({ children }) => {
  const BlogPost = [
    { title: "Blog Post #1" },
    { title: "Blog Post #2" },
    { title: "Blog Post #3" },
  ];
  return (
    <BlogContext.Provider value={BlogPost}>{children}</BlogContext.Provider>
  );
};
export default BlogContext;
